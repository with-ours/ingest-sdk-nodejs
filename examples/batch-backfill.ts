#!/usr/bin/env -S pnpm tsn -T
// Backfill historical events through /batch, resending only the rows that failed to queue.
// The supported backfill window is 1 year; `time` is in milliseconds since the UTC epoch.
//
// Run from the repo root (OURS_PRIVACY_BASE_URL optionally overrides the host):
//   OURS_PRIVACY_TOKEN=<source token> pnpm tsn -T examples/batch-backfill.ts
import OursPrivacy from '@oursprivacy/server-sdk';

type Row = OursPrivacy.BatchCreateParams['events'][number];

const DAY_MS = 24 * 60 * 60 * 1000;
const MAX_ATTEMPTS = 3;

async function main() {
  const token = process.env['OURS_PRIVACY_TOKEN'];
  if (!token) throw new Error('Missing OURS_PRIVACY_TOKEN: set it to your Source token.');

  const client = new OursPrivacy();

  // distinctId is required on batch rows. Keep it stable so a resend deduplicates.
  let pending: Row[] = [3, 4, 5].map((daysAgo) => ({
    event: 'Example Import',
    distinctId: `example-import-${daysAgo}`,
    externalId: 'example-user-123',
    time: Date.now() - daysAgo * DAY_MS,
    eventProperties: { plan: 'example-plan' },
  }));
  let invalid = 0;

  for (let attempt = 1; pending.length > 0 && attempt <= MAX_ATTEMPTS; attempt++) {
    if (attempt > 1) await new Promise((resolve) => setTimeout(resolve, attempt * 1000));

    // A partial failure is HTTP 207, which the SDK returns rather than throws, so check every row.
    // `index` points into the rows sent in this request, not the original list.
    const { accepted, failed, results } = await client.batch.create({ token, events: pending });
    console.log(`attempt ${attempt}: accepted=${accepted} failed=${failed}`);

    const retry: Row[] = [];
    for (const result of results) {
      if (result.success) continue;
      if (result.code === 'queue_failed') {
        retry.push(pending[result.index]!);
      } else {
        // Resending an invalid_event row unchanged fails again: correct it first.
        invalid++;
        console.error(`row ${pending[result.index]?.distinctId} is invalid: ${result.message}`);
      }
    }
    pending = retry;
  }

  if (pending.length > 0 || invalid > 0) {
    throw new Error(`Backfill incomplete: ${pending.length} not queued, ${invalid} invalid.`);
  }
  console.log('backfill complete');
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
