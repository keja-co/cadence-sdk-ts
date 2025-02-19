/**
 * Cadence API
 * Cadence ERP powers your business with a single platform for all your HR, Class Management, Staff Scheduling, Time Tracking & Communication needs.
 *
 * The version of the OpenAPI document: 1.1.7
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface ContextKey
 */
export interface ContextKey {
    /**
     *
     * @type {number}
     * @memberof ContextKey
     */
    readonly id: number;
    /**
     *
     * @type {string}
     * @memberof ContextKey
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof ContextKey
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof ContextKey
     */
    appName: string;
}
/**
 * Check if a given object implements the ContextKey interface.
 */
export declare function instanceOfContextKey(value: object): value is ContextKey;
export declare function ContextKeyFromJSON(json: any): ContextKey;
export declare function ContextKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContextKey;
export declare function ContextKeyToJSON(json: any): ContextKey;
export declare function ContextKeyToJSONTyped(value?: Omit<ContextKey, 'id'> | null, ignoreDiscriminator?: boolean): any;
