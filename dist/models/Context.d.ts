/**
 * Cadence API
 * Cadence ERP powers your business with a single platform for all your HR, Class Management, Staff Scheduling, Time Tracking & Communication needs.
 *
 * The version of the OpenAPI document: 1.1.5
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface Context
 */
export interface Context {
    /**
     *
     * @type {number}
     * @memberof Context
     */
    readonly id: number;
    /**
     *
     * @type {string}
     * @memberof Context
     */
    value: string;
    /**
     *
     * @type {number}
     * @memberof Context
     */
    key: number;
}
/**
 * Check if a given object implements the Context interface.
 */
export declare function instanceOfContext(value: object): value is Context;
export declare function ContextFromJSON(json: any): Context;
export declare function ContextFromJSONTyped(json: any, ignoreDiscriminator: boolean): Context;
export declare function ContextToJSON(json: any): Context;
export declare function ContextToJSONTyped(value?: Omit<Context, 'id'> | null, ignoreDiscriminator?: boolean): any;
