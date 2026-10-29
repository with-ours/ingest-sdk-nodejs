// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Visitor extends APIResource {
  /**
   * Set or update properties on an existing visitor, or create a new visitor if no
   * match is found. This fires a $identify event, making the call visible in the
   * event stream. Identity resolution runs in priority order: userId (direct, no
   * lookup) → externalId → email → userProperties.phone_number. Each lookup runs
   * only if earlier identifiers did not resolve a visitor. Phone matching ignores
   * common formatting and an international + or 00 prefix, but does not infer a
   * country code. When a visitor is found, their Ours Visitor ID is used going
   * forward so all future events are attached to the same profile. For top-level
   * visitor properties: null clears the existing value, while undefined, omitted
   * fields, and empty strings are ignored. For entries inside custom_properties:
   * null, undefined, and empty strings are all ignored (custom_properties use merge
   * semantics). See https://docs.oursprivacy.com/docs/data-types for details and
   * common pitfalls.
   */
  upsert(body: VisitorUpsertParams, options?: RequestOptions): APIPromise<VisitorUpsertResponse> {
    return this._client.post('/identify', {
      body,
      defaultBaseURL: 'https://api.oursprivacy.com/api/v1',
      ...options,
    });
  }
}

export interface VisitorUpsertResponse {
  success: true;
}

export interface VisitorUpsertParams {
  /**
   * The token for your Source. You can find this in the dashboard. Leading and
   * trailing whitespace is removed before validation.
   */
  token: string;

  /**
   * User properties to associate with this user. The existing user properties will
   * be updated. And all future events will have these properties associated with
   * them.
   */
  userProperties: VisitorUpsertParams.UserProperties;

  /**
   * These properties are used throughout the Ours app to pass known values onto
   * destinations
   */
  defaultProperties?: VisitorUpsertParams.DefaultProperties | null;

  /**
   * The email address of a user. When userId is absent and externalId does not
   * resolve a visitor, we search your account for a visitor with this email. If no
   * match is found, we try userProperties.phone_number before creating a new
   * visitor. Leading and trailing whitespace is removed before validation.
   */
  email?: string | null;

  /**
   * Your system's unique identifier for this user. When userId is absent, we search
   * your account for an existing visitor with this externalId. If no match is found,
   * we try email and then userProperties.phone_number before creating a new visitor.
   * If you also have the userId from cookies or local storage, send both — it
   * removes the lookup round-trip. Non-string input is converted to text before
   * validation; clients should send a string. Leading and trailing whitespace is
   * removed before validation.
   */
  externalId?: string | null;

  /**
   * End-user network context for server-side calls. Required for probabilistic
   * identity resolution when the caller is a backend server rather than an end-user
   * browser.
   */
  identityContext?: VisitorUpsertParams.IdentityContext | null;

  /**
   * The Ours Visitor ID stored in local storage and cookies on your web properties.
   * When present, this is used directly — no lookup by externalId, email, or phone
   * is performed. If you have both a userId and an externalId, send both so the
   * event is attached to the right visitor without any lookup overhead. Leading and
   * trailing whitespace is removed before validation.
   */
  userId?: string | null;
}

export namespace VisitorUpsertParams {
  /**
   * User properties to associate with this user. The existing user properties will
   * be updated. And all future events will have these properties associated with
   * them.
   */
  export interface UserProperties {
    /**
     * Leading and trailing whitespace is removed before validation.
     */
    _ef_transaction_id?: string | null;

    ad_id?: string | null;

    /**
     * Leading and trailing whitespace is removed before validation.
     */
    admitad_uid?: string | null;

    adset_id?: string | null;

    alart?: string | null;

    aleid?: string | null;

    axwrt?: string | null;

    /**
     * Leading and trailing whitespace is removed before validation.
     */
    basis_cid?: string | null;

    /**
     * Leading and trailing whitespace is removed before validation.
     */
    beeswax_auction_id?: string | null;

    campaign_id?: string | null;

    /**
     * Non-string input is converted to text before validation; clients should send a
     * string. Leading and trailing whitespace is removed before validation.
     */
    city?: string | null;

    clickid?: string | null;

    clid?: string | null;

    /**
     * Leading and trailing whitespace is removed before validation.
     */
    company_name?: string | null;

    /**
     * Use at most 200 nonempty property keys and five object levels. Array contents do
     * not count toward the object-depth limit. Empty keys are removed recursively,
     * arrays are truncated to 250 entries, and top-level numbers outside the safe
     * integer range become strings. After normalization, the serialized JSON must be
     * shorter than 1,048,576 UTF-16 code units.
     */
    consent?: {
      [key: string]:
        | string
        | null
        | number
        | boolean
        | Array<string | null | number | boolean | Array<unknown> | { [key: string]: unknown }>
        | {
            [key: string]:
              | string
              | null
              | number
              | boolean
              | Array<string | null | number | boolean | Array<unknown> | { [key: string]: unknown }>
              | {
                  [key: string]:
                    | string
                    | null
                    | number
                    | boolean
                    | Array<string | null | number | boolean | Array<unknown> | { [key: string]: unknown }>
                    | {
                        [key: string]:
                          | string
                          | null
                          | number
                          | boolean
                          | Array<
                              string | null | number | boolean | Array<unknown> | { [key: string]: unknown }
                            >
                          | {
                              [key: string]:
                                | string
                                | null
                                | number
                                | boolean
                                | Array<
                                    | string
                                    | null
                                    | number
                                    | boolean
                                    | Array<unknown>
                                    | { [key: string]: unknown }
                                  >;
                            };
                      };
                };
          };
    } | null;

    /**
     * Non-string input is converted to text before validation; clients should send a
     * string. Leading and trailing whitespace is removed before validation.
     */
    country?: string | null;

    /**
     * Use at most 200 nonempty property keys and five object levels. Array contents do
     * not count toward the object-depth limit. Empty keys are removed recursively,
     * arrays are truncated to 250 entries, and top-level numbers outside the safe
     * integer range become strings. After normalization, the serialized JSON must be
     * shorter than 1,048,576 UTF-16 code units.
     */
    custom_properties?: {
      [key: string]:
        | string
        | null
        | number
        | boolean
        | Array<string | null | number | boolean | Array<unknown> | { [key: string]: unknown }>
        | {
            [key: string]:
              | string
              | null
              | number
              | boolean
              | Array<string | null | number | boolean | Array<unknown> | { [key: string]: unknown }>
              | {
                  [key: string]:
                    | string
                    | null
                    | number
                    | boolean
                    | Array<string | null | number | boolean | Array<unknown> | { [key: string]: unknown }>
                    | {
                        [key: string]:
                          | string
                          | null
                          | number
                          | boolean
                          | Array<
                              string | null | number | boolean | Array<unknown> | { [key: string]: unknown }
                            >
                          | {
                              [key: string]:
                                | string
                                | null
                                | number
                                | boolean
                                | Array<
                                    | string
                                    | null
                                    | number
                                    | boolean
                                    | Array<unknown>
                                    | { [key: string]: unknown }
                                  >;
                            };
                      };
                };
          };
    } | null;

    /**
     * Non-string input is converted to text before validation; clients should send a
     * string. Leading and trailing whitespace is removed before validation.
     */
    date_of_birth?: string | null;

    dclid?: string | null;

    /**
     * Non-string input is converted to text before validation; clients should send a
     * string. Leading and trailing whitespace is removed before validation.
     */
    email?: string | null;

    /**
     * Leading and trailing whitespace is removed before validation.
     */
    epik?: string | null;

    /**
     * Non-string input is converted to text before validation; clients should send a
     * string. Leading and trailing whitespace is removed before validation.
     */
    external_id?: string | null;

    fbc?: string | null;

    fbclid?: string | null;

    fbp?: string | null;

    /**
     * Non-string input is converted to text before validation; clients should send a
     * string. Leading and trailing whitespace is removed before validation.
     */
    first_name?: string | null;

    gad_source?: string | null;

    gbraid?: string | null;

    gclid?: string | null;

    /**
     * Non-string input is converted to text before validation; clients should send a
     * string. Leading and trailing whitespace is removed before validation.
     */
    gender?: string | null;

    /**
     * Leading and trailing whitespace is removed before validation.
     */
    graid?: string | null;

    /**
     * Leading and trailing whitespace is removed before validation.
     */
    grclid?: string | null;

    im_ref?: string | null;

    /**
     * The IP address of the user Leading and trailing whitespace is removed before
     * validation.
     */
    ip?: string | null;

    irclickid?: string | null;

    /**
     * Any JSON value: string, number, boolean, array, object, or null.
     */
    is_bot?: string | null | number | boolean | Array<unknown> | { [key: string]: unknown };

    /**
     * Leading and trailing whitespace is removed before validation.
     */
    job_title?: string | null;

    /**
     * Non-string input is converted to text before validation; clients should send a
     * string. Leading and trailing whitespace is removed before validation.
     */
    last_name?: string | null;

    li_fat_id?: string | null;

    msclkid?: string | null;

    ndclid?: string | null;

    /**
     * Leading and trailing whitespace is removed before validation.
     */
    ob_click_id?: string | null;

    oppref?: string | null;

    /**
     * Any JSON value: string, number, boolean, array, object, or null.
     */
    phone_number?: string | null | number | boolean | Array<unknown> | { [key: string]: unknown };

    qclid?: string | null;

    rdt_cid?: string | null;

    referrer?: string | null;

    referring_domain?: string | null;

    /**
     * Leading and trailing whitespace is removed before validation.
     */
    sacid?: string | null;

    sccid?: string | null;

    /**
     * Non-string input is converted to text before validation; clients should send a
     * string.
     */
    sid?: string | null;

    /**
     * Non-string input is converted to text before validation; clients should send a
     * string. Leading and trailing whitespace is removed before validation.
     */
    state?: string | null;

    ttclid?: string | null;

    /**
     * Leading and trailing whitespace is removed before validation.
     */
    ttd_impression_id?: string | null;

    twclid?: string | null;

    user_agent?: string | null;

    user_agent_full_list?: string | null;

    /**
     * Non-string input is converted to text before validation; clients should send a
     * string.
     */
    utm_campaign?: string | null;

    /**
     * Non-string input is converted to text before validation; clients should send a
     * string.
     */
    utm_content?: string | null;

    /**
     * Non-string input is converted to text before validation; clients should send a
     * string.
     */
    utm_medium?: string | null;

    /**
     * Non-string input is converted to text before validation; clients should send a
     * string.
     */
    utm_name?: string | null;

    /**
     * Non-string input is converted to text before validation; clients should send a
     * string.
     */
    utm_source?: string | null;

    /**
     * Non-string input is converted to text before validation; clients should send a
     * string.
     */
    utm_term?: string | null;

    /**
     * Leading and trailing whitespace is removed before validation.
     */
    viant_click_id?: string | null;

    /**
     * Leading and trailing whitespace is removed before validation.
     */
    viant_impression_id?: string | null;

    wbraid?: string | null;

    ylpcid?: string | null;

    /**
     * Any JSON value: string, number, boolean, array, object, or null.
     */
    zip?: string | null | number | boolean | Array<unknown> | { [key: string]: unknown };
  }

  /**
   * These properties are used throughout the Ours app to pass known values onto
   * destinations
   */
  export interface DefaultProperties {
    /**
     * The Everflow affiliate Click (Transaction) ID, captured from the
     * `_ef_transaction_id` URL parameter. Ex: ef_click_abc123 Leading and trailing
     * whitespace is removed before validation.
     */
    _ef_transaction_id?: string | null;

    /**
     * The total time in milliseconds this tab has been visible since the page loaded
     */
    activeDuration?: number | null;

    /**
     * The ad id detected in the session. This is set by the web sdk automatically.
     * Leading and trailing whitespace is removed before validation.
     */
    ad_id?: string | null;

    /**
     * The Admitad (Mitgo) affiliate Click ID. Ex: admitad_uid_abc123 Leading and
     * trailing whitespace is removed before validation.
     */
    admitad_uid?: string | null;

    /**
     * The adset id detected in the session. This is set by the web sdk automatically.
     * Leading and trailing whitespace is removed before validation.
     */
    adset_id?: string | null;

    /**
     * The AppLovin alart query parameter. Ex: alart123 Leading and trailing whitespace
     * is removed before validation.
     */
    alart?: string | null;

    /**
     * The AppLovin aleid query parameter. Ex: aleid123 Leading and trailing whitespace
     * is removed before validation.
     */
    aleid?: string | null;

    /**
     * The AppLovin pixel cookie value (\_axwrt). Web-only. Leading and trailing
     * whitespace is removed before validation.
     */
    axwrt?: string | null;

    /**
     * The Basis DSP Click ID. Ex: basis_cid123 Leading and trailing whitespace is
     * removed before validation.
     */
    basis_cid?: string | null;

    /**
     * The Beeswax (FreeWheel Buyer Cloud) auction ID, captured from the
     * `{{AUCTION_ID}}` macro on creative click URLs. Ex: bx-auc-abc123 Leading and
     * trailing whitespace is removed before validation.
     */
    beeswax_auction_id?: string | null;

    /**
     * The language of the browser, lowercased. Ex: en-us Leading and trailing
     * whitespace is removed before validation.
     */
    browser_language?: string | null;

    /**
     * The name of the browser. Ex: Chrome Leading and trailing whitespace is removed
     * before validation.
     */
    browser_name?: string | null;

    /**
     * The version of the browser. Ex: 114.0 Leading and trailing whitespace is removed
     * before validation.
     */
    browser_version?: string | null;

    /**
     * The campaign id detected in the session. This is set by the web sdk
     * automatically. Leading and trailing whitespace is removed before validation.
     */
    campaign_id?: string | null;

    /**
     * The Click ID. Ex: clickid123 Leading and trailing whitespace is removed before
     * validation.
     */
    clickid?: string | null;

    /**
     * The Generic Click ID. Ex: clid123 Leading and trailing whitespace is removed
     * before validation.
     */
    clid?: string | null;

    /**
     * The architecture of the CPU. Ex: amd64 Leading and trailing whitespace is
     * removed before validation.
     */
    cpu_architecture?: string | null;

    /**
     * The full url (including query params) of the current page Leading and trailing
     * whitespace is removed before validation.
     */
    current_url?: string | null;

    /**
     * The DoubleClick Click ID. Ex: dclid123 Leading and trailing whitespace is
     * removed before validation.
     */
    dclid?: string | null;

    /**
     * The model of the device. Ex: iPhone Leading and trailing whitespace is removed
     * before validation.
     */
    device_model?: string | null;

    /**
     * The type of device the user is using. Ex: mobile Leading and trailing whitespace
     * is removed before validation.
     */
    device_type?: string | null;

    /**
     * The vendor of the device. Ex: Apple Leading and trailing whitespace is removed
     * before validation.
     */
    device_vendor?: string | null;

    /**
     * The time in milliseconds since the previous event on this page, or since the web
     * SDK loaded for the first event. Restarts when a hidden tab becomes visible
     * again.
     */
    duration?: number | null;

    /**
     * The browser's encoding. Ex: UTF-8 Leading and trailing whitespace is removed
     * before validation.
     */
    encoding?: string | null;

    /**
     * The name of the browser engine. Ex: Blink Leading and trailing whitespace is
     * removed before validation.
     */
    engine_name?: string | null;

    /**
     * The version of the browser engine. Ex: 114.0 Leading and trailing whitespace is
     * removed before validation.
     */
    engine_version?: string | null;

    /**
     * The Pinterest Click ID. Ex: epik456 Leading and trailing whitespace is removed
     * before validation.
     */
    epik?: string | null;

    /**
     * Facebook Click ID with prefix format for Conversions API tracking. Ex:
     * fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890 Leading and trailing
     * whitespace is removed before validation.
     */
    fbc?: string | null;

    /**
     * Raw Facebook Click ID query parameter without prefix from ad clicks. Ex:
     * AbCdEfGhIjKlMnOpQrStUvWxYz1234567890 Leading and trailing whitespace is removed
     * before validation.
     */
    fbclid?: string | null;

    /**
     * Facebook Browser ID parameter for identifying browsers and attributing events.
     * Ex: fb.1.1554763741205.1098115397 Leading and trailing whitespace is removed
     * before validation.
     */
    fbp?: string | null;

    /**
     * Deprecated
     */
    fv?: boolean | null;

    /**
     * The Google Ad Source. Ex: google Leading and trailing whitespace is removed
     * before validation.
     */
    gad_source?: string | null;

    /**
     * The Google Braid ID. Ex: gbraid123 Leading and trailing whitespace is removed
     * before validation.
     */
    gbraid?: string | null;

    /**
     * The Google Click ID. Ex: gclid123 Leading and trailing whitespace is removed
     * before validation.
     */
    gclid?: string | null;

    /**
     * The Gravity attribution ID, captured from the `graid` URL parameter on the
     * landing page. Gravity resolves it to the campaign, publisher, and ad IDs
     * server-side. Ex: graid-abc123 Leading and trailing whitespace is removed before
     * validation.
     */
    graid?: string | null;

    /**
     * The Gravity click ID, captured from the `grclid` URL parameter that Gravity
     * (trygravity.com) appends to ad click-through URLs on the landing page. Ex:
     * grclid-abc123 Leading and trailing whitespace is removed before validation.
     */
    grclid?: string | null;

    /**
     * The host of the current page. Ex: example.com Leading and trailing whitespace is
     * removed before validation.
     */
    host?: string | null;

    /**
     * Whether the user is in an iframe. Ex: true
     */
    iframe?: boolean | null;

    /**
     * The Impact Click ID reference. Ex: im_ref123 Leading and trailing whitespace is
     * removed before validation.
     */
    im_ref?: string | null;

    /**
     * The IP address of the user. Ex: 127.0.0.1 Leading and trailing whitespace is
     * removed before validation.
     */
    ip?: string | null;

    /**
     * The Impact Click ID. Ex: irclickid123 Leading and trailing whitespace is removed
     * before validation.
     */
    irclickid?: string | null;

    /**
     * Any JSON value: string, number, boolean, array, object, or null.
     */
    is_bot?: string | null | number | boolean | Array<unknown> | { [key: string]: unknown };

    /**
     * The LinkedIn Click ID. Ex: li_fat_id123 Leading and trailing whitespace is
     * removed before validation.
     */
    li_fat_id?: string | null;

    /**
     * The Microsoft Click ID. Ex: msclkid123 Leading and trailing whitespace is
     * removed before validation.
     */
    msclkid?: string | null;

    /**
     * The NextDoor Click ID. Ex: ndclid123 Leading and trailing whitespace is removed
     * before validation.
     */
    ndclid?: string | null;

    /**
     * Deprecated
     */
    new_s?: boolean | null;

    /**
     * The Outbrain click ID, captured from the `ob_click_id` URL parameter (Outbrain
     * `{{ob_click_id}}` macro) on the landing page. Ex: ob_click_abc123 Leading and
     * trailing whitespace is removed before validation.
     */
    ob_click_id?: string | null;

    /**
     * The OpenAI Ads privacy-preserving reference, captured from the `oppref` URL
     * parameter on landing pages (the OpenAI Pixel also stores it in a `__oppref`
     * cookie). Sent to OpenAI Ads on Conversions API events for attribution. Ex:
     * oppref_abc Leading and trailing whitespace is removed before validation.
     */
    oppref?: string | null;

    /**
     * The name of the operating system. Ex: Windows Leading and trailing whitespace is
     * removed before validation.
     */
    os_name?: string | null;

    /**
     * The version of the operating system. Ex: 10.0 Leading and trailing whitespace is
     * removed before validation.
     */
    os_version?: string | null;

    /**
     * A random set of numbers for the page load
     */
    page_hash?: number | null;

    /**
     * The pathname of the current page. Ex: /home Leading and trailing whitespace is
     * removed before validation.
     */
    pathname?: string | null;

    /**
     * The Quora Click ID. Ex: qclid123 Leading and trailing whitespace is removed
     * before validation.
     */
    qclid?: string | null;

    /**
     * The Reddit Click ID. Ex: rdt_cid123 Leading and trailing whitespace is removed
     * before validation.
     */
    rdt_cid?: string | null;

    /**
     * The time an Ours server received the event, in ISO 8601 UTC
     */
    received_at?: string | null;

    /**
     * The referrer URL of the current page Leading and trailing whitespace is removed
     * before validation.
     */
    referrer?: string | null;

    /**
     * The referring domain of the current page Leading and trailing whitespace is
     * removed before validation.
     */
    referring_domain?: string | null;

    /**
     * The StackAdapt Tracking ID. Ex: sacid123 Leading and trailing whitespace is
     * removed before validation.
     */
    sacid?: string | null;

    /**
     * The Snapchat Click ID. Ex: sccid123 Leading and trailing whitespace is removed
     * before validation.
     */
    sccid?: string | null;

    /**
     * The height of the screen. Ex: 1080
     */
    screen_height?: number | null;

    /**
     * The width of the screen. Ex: 1920
     */
    screen_width?: number | null;

    /**
     * The number of sessions the user has had. Ex: 3
     */
    sessionCount?: number | null;

    /**
     * The session ID as assigned automatically by the web SDK. This is required for
     * session replay Leading and trailing whitespace is removed before validation.
     */
    sid?: string | null;

    /**
     * The screen resolution as width x height in pixels. Ex: 1920x1080 Leading and
     * trailing whitespace is removed before validation.
     */
    sr?: string | null;

    /**
     * The title of the current page Leading and trailing whitespace is removed before
     * validation.
     */
    title?: string | null;

    /**
     * The TikTok Click ID. Ex: ttclid123 Leading and trailing whitespace is removed
     * before validation.
     */
    ttclid?: string | null;

    /**
     * The Trade Desk impression ID, captured from a configured ttd_impression_id URL
     * parameter using the %%TTD_IMPRESSIONID%% creative macro. Sent as imp on
     * conversions. Leading and trailing whitespace is removed before validation.
     */
    ttd_impression_id?: string | null;

    /**
     * The Twitter Click ID. Ex: twclid123 Leading and trailing whitespace is removed
     * before validation.
     */
    twclid?: string | null;

    /**
     * The browser brands and full versions from User-Agent Client Hints, as
     * brand;version pairs separated by |. Leading and trailing whitespace is removed
     * before validation.
     */
    uafvl?: string | null;

    /**
     * The user agent of the browser Leading and trailing whitespace is removed before
     * validation.
     */
    user_agent?: string | null;

    /**
     * The UTM Campaign. The web SDK automatically captures this from the query params.
     * Leading and trailing whitespace is removed before validation.
     */
    utm_campaign?: string | null;

    /**
     * The UTM Content. The web SDK automatically captures this from the query params.
     * Leading and trailing whitespace is removed before validation.
     */
    utm_content?: string | null;

    /**
     * The UTM Medium. The web SDK automatically captures this from the query params.
     * Leading and trailing whitespace is removed before validation.
     */
    utm_medium?: string | null;

    /**
     * The UTM Name. The web SDK automatically captures this from the query params.
     * Leading and trailing whitespace is removed before validation.
     */
    utm_name?: string | null;

    /**
     * The UTM Source. The web SDK automatically captures this from the query params.
     * Leading and trailing whitespace is removed before validation.
     */
    utm_source?: string | null;

    /**
     * The UTM Term. The web SDK automatically captures this from the query params.
     * Leading and trailing whitespace is removed before validation.
     */
    utm_term?: string | null;

    /**
     * The SDK version (e.g., web SDK or ingest-sdk-\* via generated SDK headers)
     * Leading and trailing whitespace is removed before validation.
     */
    version?: string | null;

    /**
     * The Viant (Adelphic) Click ID, captured from the `viant_click_id` URL parameter
     * (Viant `${ADELPHIC_CLICKID}` macro). Sent as `xid` on Viant postbacks. Ex:
     * viant_click_abc123 Leading and trailing whitespace is removed before validation.
     */
    viant_click_id?: string | null;

    /**
     * The Viant (Adelphic) Impression ID, captured from the `viant_impression_id` URL
     * parameter (Viant `${ADELPHIC_IMPRESSIONID}` macro). Sent as `imp_id` on Viant
     * postbacks for post-view attribution. Ex: viant_imp_abc123 Leading and trailing
     * whitespace is removed before validation.
     */
    viant_impression_id?: string | null;

    /**
     * The WBRAID Identifier. The web SDK automatically captures this from the query
     * params. Leading and trailing whitespace is removed before validation.
     */
    wbraid?: string | null;

    /**
     * Whether the user is in a webview. Ex: true
     */
    webview?: boolean | null;

    /**
     * The Yelp Click ID from the landing URL, sent unchanged and unhashed.
     */
    ylpcid?: string | null;
  }

  /**
   * End-user network context for server-side calls. Required for probabilistic
   * identity resolution when the caller is a backend server rather than an end-user
   * browser.
   */
  export interface IdentityContext {
    /**
     * The end-user IP address (not the server IP).
     */
    ip: string;

    /**
     * The end-user User-Agent string (not the server UA).
     */
    userAgent: string;
  }
}

export declare namespace Visitor {
  export {
    type VisitorUpsertResponse as VisitorUpsertResponse,
    type VisitorUpsertParams as VisitorUpsertParams,
  };
}
