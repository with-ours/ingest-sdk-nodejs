// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Visitor extends APIResource {
  /**
   * Define visitor properties on an existing visitor or create a new visitor. Note:
   * This does not fire an event. If you want to fire an event, use the track method
   * and include properties for the visitor.
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
   * The token for your Source. You can find this in the dashboard.
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
   * The email address of a user. We will associate this event with the user or
   * create a user. Used for lookup if externalId and userId are not included in the
   * request.
   */
  email?: string | null;

  /**
   * The externalId (the ID in your system) of a user. We will associate this event
   * with the user or create a user. If included in the request, email lookup is
   * ignored.
   */
  externalId?: string | null;

  /**
   * The Ours user id stored in local storage and cookies on your web properties. If
   * userId is included in the request, we do not lookup the user by email or
   * externalId.
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
    ad_id?: string | null;

    adset_id?: string | null;

    alart?: string | null;

    aleid?: string | null;

    basis_cid?: string | null;

    campaign_id?: string | null;

    city?: string | null;

    clickid?: string | null;

    clid?: string | null;

    company_name?: string | null;

    consent?: { [key: string]: string | null } | null;

    country?: string | null;

    custom_properties?: { [key: string]: string | null } | null;

    date_of_birth?: string | null;

    dclid?: string | null;

    email?: string | null;

    epik?: string | null;

    external_id?: string | null;

    fbc?: string | null;

    fbclid?: string | null;

    fbp?: string | null;

    first_name?: string | null;

    gad_source?: string | null;

    gbraid?: string | null;

    gclid?: string | null;

    gender?: string | null;

    im_ref?: string | null;

    /**
     * The IP address of the user
     */
    ip?: string | null;

    irclickid?: string | null;

    is_bot?: string | null;

    job_title?: string | null;

    last_name?: string | null;

    li_fat_id?: string | null;

    msclkid?: string | null;

    ndclid?: string | null;

    phone_number?: string | null;

    qclid?: string | null;

    rdt_cid?: string | null;

    referrer?: string | null;

    referring_domain?: string | null;

    sacid?: string | null;

    sccid?: string | null;

    sid?: string | null;

    state?: string | null;

    ttclid?: string | null;

    twclid?: string | null;

    user_agent?: string | null;

    user_agent_full_list?: string | null;

    utm_campaign?: string | null;

    utm_content?: string | null;

    utm_medium?: string | null;

    utm_name?: string | null;

    utm_source?: string | null;

    utm_term?: string | null;

    wbraid?: string | null;

    zip?: string | null;
  }

  /**
   * These properties are used throughout the Ours app to pass known values onto
   * destinations
   */
  export interface DefaultProperties {
    /**
     * The active time in milliseconds that the user had this tab active
     */
    activeDuration?: number | null;

    /**
     * The ad id for detected in the session. This is set by the web sdk automatically.
     */
    ad_id?: string | null;

    /**
     * The adset id for detected in the session. This is set by the web sdk
     * automatically.
     */
    adset_id?: string | null;

    /**
     * The AppLovin alart query parameter. Ex: alart123
     */
    alart?: string | null;

    /**
     * The AppLovin aleid query parameter. Ex: aleid123
     */
    aleid?: string | null;

    /**
     * The Basis DSP Click ID. Ex: basis_cid123
     */
    basis_cid?: string | null;

    /**
     * The language of the browser. Ex: en-US
     */
    browser_language?: string | null;

    /**
     * The name of the browser. Ex: Chrome
     */
    browser_name?: string | null;

    /**
     * The version of the browser. Ex: 114.0
     */
    browser_version?: string | null;

    /**
     * The campaign id for detected in the session. This is set by the web sdk
     * automatically.
     */
    campaign_id?: string | null;

    /**
     * The Click ID. Ex: clickid123
     */
    clickid?: string | null;

    /**
     * The Generic Click ID. Ex: clid123
     */
    clid?: string | null;

    /**
     * The architecture of the CPU. Ex: x64
     */
    cpu_architecture?: string | null;

    /**
     * The full url (including query params) of the current page
     */
    current_url?: string | null;

    /**
     * The DoubleClick Click ID. Ex: dclid123
     */
    dclid?: string | null;

    /**
     * The model of the device. Ex: iPhone 13
     */
    device_model?: string | null;

    /**
     * The type of device the user is using. Ex: mobile
     */
    device_type?: string | null;

    /**
     * The vendor of the device. Ex: Apple
     */
    device_vendor?: string | null;

    /**
     * The time in milliseconds since the page was loaded // script was loaded
     */
    duration?: number | null;

    /**
     * The browsers encoding. Ex: UTF-8
     */
    encoding?: string | null;

    /**
     * The name of the browser engine. Ex: Blink
     */
    engine_name?: string | null;

    /**
     * The version of the browser engine. Ex: 114.0
     */
    engine_version?: string | null;

    /**
     * The Pinterest Click ID. Ex: epik456
     */
    epik?: string | null;

    /**
     * Facebook Click ID with prefix format for Conversions API tracking. Ex:
     * fb.1.1554763741205.AbCdEfGhIjKlMnOpQrStUvWxYz1234567890
     */
    fbc?: string | null;

    /**
     * Raw Facebook Click ID query parameter without prefix from ad clicks. Ex:
     * AbCdEfGhIjKlMnOpQrStUvWxYz1234567890
     */
    fbclid?: string | null;

    /**
     * Facebook Browser ID parameter for identifying browsers and attributing events.
     * Ex: fb.1.1554763741205.1098115397
     */
    fbp?: string | null;

    /**
     * Deprecated
     */
    fv?: boolean | null;

    /**
     * The Google Ad Source. Ex: google
     */
    gad_source?: string | null;

    /**
     * The Google Braid ID. Ex: gbraid123
     */
    gbraid?: string | null;

    /**
     * The Google Click ID. Ex: gclid123
     */
    gclid?: string | null;

    /**
     * The host of the current page. Ex: example.com
     */
    host?: string | null;

    /**
     * Whether the user is in an iframe. Ex: true
     */
    iframe?: boolean | null;

    /**
     * The Impact Click ID reference. Ex: im_ref123
     */
    im_ref?: string | null;

    /**
     * The IP address of the user. Ex: 127.0.0.1
     */
    ip?: string | null;

    /**
     * The Impact Click ID. Ex: irclickid123
     */
    irclickid?: string | null;

    /**
     * Whether we have detected that the user is a bot. This is set automatically by
     * the Ours server primarily for events tracked through the web SDK.
     */
    is_bot?: string | null;

    /**
     * The LinkedIn Click ID. Ex: li_fat_id123
     */
    li_fat_id?: string | null;

    /**
     * The Microsoft Click ID. Ex: msclkid123
     */
    msclkid?: string | null;

    /**
     * The NextDoor Click ID. Ex: ndclid123
     */
    ndclid?: string | null;

    /**
     * Deprecated
     */
    new_s?: boolean | null;

    /**
     * The name of the operating system. Ex: Windows
     */
    os_name?: string | null;

    /**
     * The version of the operating system. Ex: 10.0
     */
    os_version?: string | null;

    /**
     * A random set of numbers for the page load
     */
    page_hash?: number | null;

    /**
     * The pathname of the current page. Ex: /home
     */
    pathname?: string | null;

    /**
     * The Quora Click ID. Ex: qclid123
     */
    qclid?: string | null;

    /**
     * The Reddit Click ID. Ex: rdt_cid123
     */
    rdt_cid?: string | null;

    /**
     * The time the event was received by an Ours server in ISO format
     */
    received_at?: string | null;

    /**
     * The referrer URL of the current page
     */
    referrer?: string | null;

    /**
     * The referring domain of the current page
     */
    referring_domain?: string | null;

    /**
     * The StackAdapt Tracking ID. Ex: sacid123
     */
    sacid?: string | null;

    /**
     * The SnapChat Click ID. Ex: sccid123
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
     * session replay
     */
    sid?: string | null;

    sr?: string | null;

    /**
     * The title of the current page
     */
    title?: string | null;

    /**
     * The TikTok Click ID. Ex: ttclid123
     */
    ttclid?: string | null;

    /**
     * The Twitter Click ID. Ex: twclid123
     */
    twclid?: string | null;

    /**
     * User agent as a full list of strings.
     */
    uafvl?: string | null;

    /**
     * The user agent of the browser
     */
    user_agent?: string | null;

    /**
     * The UTM Campaign. The web SDK automatically captures this from the query params.
     */
    utm_campaign?: string | null;

    /**
     * The UTM Content. The web SDK automatically captures this from the query params.
     */
    utm_content?: string | null;

    /**
     * The UTM Medium. The web SDK automatically captures this from the query params.
     */
    utm_medium?: string | null;

    /**
     * The UTM Name. The web SDK automatically captures this from the query params.
     */
    utm_name?: string | null;

    /**
     * The UTM Source. The web SDK automatically captures this from the query params.
     */
    utm_source?: string | null;

    /**
     * The UTM Term. The web SDK automatically captures this from the query params.
     */
    utm_term?: string | null;

    /**
     * The version of the web SDK
     */
    version?: string | null;

    /**
     * The WBRAID Identifier. The web SDK automatically captures this from the query
     * params.
     */
    wbraid?: string | null;

    /**
     * Whether the user is in a webview. Ex: true
     */
    webview?: boolean | null;
  }
}

export declare namespace Visitor {
  export {
    type VisitorUpsertResponse as VisitorUpsertResponse,
    type VisitorUpsertParams as VisitorUpsertParams,
  };
}
