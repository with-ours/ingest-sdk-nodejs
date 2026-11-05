#!/usr/bin/env -S pnpm tsn -T
// Send one server-side event for a known visitor.
//
// Run from the repo root (OURS_PRIVACY_BASE_URL optionally overrides the host):
//   OURS_PRIVACY_TOKEN=<source token> pnpm tsn -T examples/track-event.ts
//
// The values below are placeholders. Don't put health data or credentials in event properties.
import OursPrivacy from '@oursprivacy/server-sdk';
import { randomUUID } from 'node:crypto';

async function main() {
  const token = process.env['OURS_PRIVACY_TOKEN'];
  if (!token) throw new Error('Missing OURS_PRIVACY_TOKEN: set it to your Source token.');

  const client = new OursPrivacy();
  const response = await client.track.event({
    token,
    event: 'Example Signup', // must be an allowed event on your Source
    externalId: 'example-user-123', // your own identifier for this visitor
    distinctId: randomUUID(), // reuse this value if you resend, so the event deduplicates
    eventProperties: { plan: 'example-plan' },
  });
  console.log('tracked:', response.success);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
