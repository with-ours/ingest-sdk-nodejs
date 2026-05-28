// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import OursPrivacy from '@oursprivacy/server-sdk';

const client = new OursPrivacy({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource experiments', () => {
  // Mock server tests are disabled
  test.skip('assignment: only required params', async () => {
    const responsePromise = client.experiments.assignment('experiment_key', {
      token: 'token',
      visitor_id: 'x',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('assignment: required and optional params', async () => {
    const response = await client.experiments.assignment('experiment_key', {
      token: 'token',
      visitor_id: 'x',
      context: { search: 'search', url: 'url' },
      track_impression: true,
    });
  });

  // Mock server tests are disabled
  test.skip('personalization: only required params', async () => {
    const responsePromise = client.experiments.personalization({ token: 'token', visitor_id: 'x' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('personalization: required and optional params', async () => {
    const response = await client.experiments.personalization({ token: 'token', visitor_id: 'x' });
  });
});
