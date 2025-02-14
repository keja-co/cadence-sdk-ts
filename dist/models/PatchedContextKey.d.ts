/**
 * Cadence API
 * Cadence ERP powers your business with a single platform for all your HR, Class Management, Staff Scheduling, Time Tracking & Communication needs.
 *
 * The version of the OpenAPI document: 1.1.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface PatchedContextKey
 */
export interface PatchedContextKey {
    /**
     *
     * @type {number}
     * @memberof PatchedContextKey
     */
    readonly id?: number;
    /**
     *
     * @type {string}
     * @memberof PatchedContextKey
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof PatchedContextKey
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof PatchedContextKey
     */
    appName?: string;
}
/**
 * Check if a given object implements the PatchedContextKey interface.
 */
export declare function instanceOfPatchedContextKey(value: object): value is PatchedContextKey;
export declare function PatchedContextKeyFromJSON(json: any): PatchedContextKey;
export declare function PatchedContextKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedContextKey;
export declare function PatchedContextKeyToJSON(json: any): PatchedContextKey;
export declare function PatchedContextKeyToJSONTyped(value?: Omit<PatchedContextKey, 'id'> | null, ignoreDiscriminator?: boolean): any;
