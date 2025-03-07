/**
 * Cadence API
 * Cadence ERP powers your business with a single platform for all your HR, Class Management, Staff Scheduling, Time Tracking & Communication needs.
 *
 * The version of the OpenAPI document: 1.2.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface PatchedState
 */
export interface PatchedState {
    /**
     *
     * @type {number}
     * @memberof PatchedState
     */
    readonly id?: number;
    /**
     *
     * @type {string}
     * @memberof PatchedState
     */
    name?: string;
    /**
     * Abbreviation or code for the state/region
     * @type {string}
     * @memberof PatchedState
     */
    code?: string;
    /**
     *
     * @type {number}
     * @memberof PatchedState
     */
    country?: number;
}
/**
 * Check if a given object implements the PatchedState interface.
 */
export declare function instanceOfPatchedState(value: object): value is PatchedState;
export declare function PatchedStateFromJSON(json: any): PatchedState;
export declare function PatchedStateFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedState;
export declare function PatchedStateToJSON(json: any): PatchedState;
export declare function PatchedStateToJSONTyped(value?: Omit<PatchedState, 'id'> | null, ignoreDiscriminator?: boolean): any;
