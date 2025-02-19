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
 * @interface State
 */
export interface State {
    /**
     *
     * @type {number}
     * @memberof State
     */
    readonly id: number;
    /**
     *
     * @type {string}
     * @memberof State
     */
    name: string;
    /**
     * Abbreviation or code for the state/region
     * @type {string}
     * @memberof State
     */
    code?: string;
    /**
     *
     * @type {number}
     * @memberof State
     */
    country: number;
}
/**
 * Check if a given object implements the State interface.
 */
export declare function instanceOfState(value: object): value is State;
export declare function StateFromJSON(json: any): State;
export declare function StateFromJSONTyped(json: any, ignoreDiscriminator: boolean): State;
export declare function StateToJSON(json: any): State;
export declare function StateToJSONTyped(value?: Omit<State, 'id'> | null, ignoreDiscriminator?: boolean): any;
