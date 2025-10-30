// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { OursPrivacy } from '../client';

export abstract class APIResource {
  protected _client: OursPrivacy;

  constructor(client: OursPrivacy) {
    this._client = client;
  }
}
