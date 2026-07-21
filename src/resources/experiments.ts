// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Experiments extends APIResource {
  /**
   * Return the server-side variant assignment for a visitor in a single A/B or
   * multivariate experiment, identified by its experiment key. Bucketing is
   * deterministic on `visitor_id` and is sticky across calls. Tracking an impression
   * is the default — pass `track_impression: false` to read without recording. The
   * browser SDK and this endpoint converge on the same variant for the same visitor.
   */
  assignment(
    experimentKey: string,
    body: ExperimentAssignmentParams,
    options?: RequestOptions,
  ): APIPromise<ExperimentAssignmentResponse> {
    return this._client.post(path`/experiments/assignments/${experimentKey}`, {
      body,
      defaultBaseURL: 'https://api.oursprivacy.com/api/v1',
      ...options,
    });
  }

  /**
   * Return the active personalization assignments for a visitor. Read-only and never
   * records an impression. Personalizations are populated by the event-driven rule
   * engine — until that ships, this endpoint returns an empty list for every
   * visitor, which is the correct fail-closed behavior (no false positives).
   */
  personalization(
    body: ExperimentPersonalizationParams,
    options?: RequestOptions,
  ): APIPromise<ExperimentPersonalizationResponse> {
    return this._client.post('/experiments/personalization', {
      body,
      defaultBaseURL: 'https://api.oursprivacy.com/api/v1',
      ...options,
    });
  }
}

export type ExperimentAssignmentResponse =
  | ExperimentAssignmentResponse.UnionMember0
  | ExperimentAssignmentResponse.UnionMember1;

export namespace ExperimentAssignmentResponse {
  export interface UnionMember0 {
    experiment_id: string;

    in_experiment: true;

    success: true;

    variant_id: string;

    experiment_key?: string | null;

    experiment_name?: string | null;

    is_control?: boolean | null;

    /**
     * Redirect destination for redirect (split-URL) variants — a same-domain relative
     * path or an absolute https:// URL. Present only when the assigned variant is a
     * redirect; absent for on-page (DOM-modification) variants. Read it straight off
     * the payload and issue the redirect server-side.
     */
    redirect?: string | null;

    type?: string | null;

    variant_name?: string | null;
  }

  export interface UnionMember1 {
    in_experiment: false;

    success: true;
  }
}

export interface ExperimentPersonalizationResponse {
  personalizations: Array<ExperimentPersonalizationResponse.Personalization>;

  success: true;
}

export namespace ExperimentPersonalizationResponse {
  export interface Personalization {
    assigned_at: number;

    experiment_id: string;

    variant_id: string;

    experiment_key?: string | null;

    experiment_name?: string | null;

    variant_name?: string | null;
  }
}

export interface ExperimentAssignmentParams {
  /**
   * The experiment token (`exp_*`) for the experiment settings holding this
   * experiment. Available from the dashboard.
   */
  token: string;

  /**
   * Stable identifier for the visitor — typically the Ours visitor id from your
   * browser cookie, or your own server-side user id if you keep the same id
   * consistent across browser and server.
   */
  visitor_id: string;

  /**
   * Optional page context for URL + query-param eligibility. Variant bucketing is
   * deterministic on `visitor_id` regardless of context.
   */
  context?: ExperimentAssignmentParams.Context | null;

  /**
   * When true (default), an `$experiment_impression` event is enqueued and the
   * visitor's `experiment_assignments` map is updated. Set to false to read the
   * assignment without recording an impression — useful for in-test diagnostics.
   */
  track_impression?: boolean | null;
}

export namespace ExperimentAssignmentParams {
  /**
   * Optional page context for URL + query-param eligibility. Variant bucketing is
   * deterministic on `visitor_id` regardless of context.
   */
  export interface Context {
    /**
     * The current query string (e.g. `?utm_source=meta`). When provided, the
     * experiment's query-param conditions are evaluated for eligibility. If omitted,
     * the query string is parsed from `url`.
     */
    search?: string | null;

    /**
     * The current page URL. When provided, the experiment's URL patterns are evaluated
     * for eligibility — visitors on non-matching URLs are returned
     * `in_experiment: false`. Omit when the caller is pre-gating the request.
     */
    url?: string | null;
  }
}

export interface ExperimentPersonalizationParams {
  /**
   * The experiment token (`exp_*`).
   */
  token: string;

  visitor_id: string;
}

export declare namespace Experiments {
  export {
    type ExperimentAssignmentResponse as ExperimentAssignmentResponse,
    type ExperimentPersonalizationResponse as ExperimentPersonalizationResponse,
    type ExperimentAssignmentParams as ExperimentAssignmentParams,
    type ExperimentPersonalizationParams as ExperimentPersonalizationParams,
  };
}
