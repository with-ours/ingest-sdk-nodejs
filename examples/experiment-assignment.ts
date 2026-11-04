#!/usr/bin/env -S pnpm tsn -T
// Choose an experiment variant on the server, failing open: any assignment error serves the
// default experience, so an outage or timeout here can't break the page.
//
// Experiment calls take an experiment token (`exp_*`); they don't accept the Source token.
// Run from the repo root (OURS_PRIVACY_BASE_URL optionally overrides the host):
//   OURS_PRIVACY_EXPERIMENT_TOKEN=exp_<token> pnpm tsn -T examples/experiment-assignment.ts
import OursPrivacy from '@oursprivacy/server-sdk';

const client = new OursPrivacy();

async function variantFor(token: string, visitorId: string): Promise<string> {
  try {
    const assignment = await client.experiments.assignment(
      'example_experiment',
      { token, visitor_id: visitorId, context: { url: 'https://example.com/pricing' } },
      { timeout: 2000, maxRetries: 0 }, // don't let a slow call hold up the response you're serving
    );
    return (assignment.in_experiment && assignment.variant_name) || 'default';
  } catch (error) {
    console.error(
      'assignment unavailable, serving the default:',
      error instanceof Error ? error.message : error,
    );
    return 'default';
  }
}

async function main() {
  const token = process.env['OURS_PRIVACY_EXPERIMENT_TOKEN'];
  if (!token)
    throw new Error('Missing OURS_PRIVACY_EXPERIMENT_TOKEN: set it to your exp_* experiment token.');

  console.log('variant:', await variantFor(token, 'example-user-123'));
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
