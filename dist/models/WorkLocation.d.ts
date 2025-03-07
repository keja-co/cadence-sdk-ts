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
 * @interface WorkLocation
 */
export interface WorkLocation {
    /**
     *
     * @type {number}
     * @memberof WorkLocation
     */
    readonly id: number;
    /**
     *
     * @type {string}
     * @memberof WorkLocation
     */
    name: string;
    /**
     *
     * @type {number}
     * @memberof WorkLocation
     */
    address: number;
}
/**
 * Check if a given object implements the WorkLocation interface.
 */
export declare function instanceOfWorkLocation(value: object): value is WorkLocation;
export declare function WorkLocationFromJSON(json: any): WorkLocation;
export declare function WorkLocationFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkLocation;
export declare function WorkLocationToJSON(json: any): WorkLocation;
export declare function WorkLocationToJSONTyped(value?: Omit<WorkLocation, 'id'> | null, ignoreDiscriminator?: boolean): any;
