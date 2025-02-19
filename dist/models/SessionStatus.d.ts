/**
 * Cadence API
 * Cadence ERP powers your business with a single platform for all your HR, Class Management, Staff Scheduling, Time Tracking & Communication needs.
 *
 * The version of the OpenAPI document: 1.1.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface SessionStatus
 */
export interface SessionStatus {
    /**
     *
     * @type {string}
     * @memberof SessionStatus
     */
    status: string;
    /**
     *
     * @type {number}
     * @memberof SessionStatus
     */
    user?: number;
}
/**
 * Check if a given object implements the SessionStatus interface.
 */
export declare function instanceOfSessionStatus(value: object): value is SessionStatus;
export declare function SessionStatusFromJSON(json: any): SessionStatus;
export declare function SessionStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): SessionStatus;
export declare function SessionStatusToJSON(json: any): SessionStatus;
export declare function SessionStatusToJSONTyped(value?: SessionStatus | null, ignoreDiscriminator?: boolean): any;
