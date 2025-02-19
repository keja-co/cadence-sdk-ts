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
 * @interface PatchedWorkLocation
 */
export interface PatchedWorkLocation {
    /**
     *
     * @type {number}
     * @memberof PatchedWorkLocation
     */
    readonly id?: number;
    /**
     *
     * @type {string}
     * @memberof PatchedWorkLocation
     */
    name?: string;
    /**
     *
     * @type {number}
     * @memberof PatchedWorkLocation
     */
    address?: number;
}
/**
 * Check if a given object implements the PatchedWorkLocation interface.
 */
export declare function instanceOfPatchedWorkLocation(value: object): value is PatchedWorkLocation;
export declare function PatchedWorkLocationFromJSON(json: any): PatchedWorkLocation;
export declare function PatchedWorkLocationFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedWorkLocation;
export declare function PatchedWorkLocationToJSON(json: any): PatchedWorkLocation;
export declare function PatchedWorkLocationToJSONTyped(value?: Omit<PatchedWorkLocation, 'id'> | null, ignoreDiscriminator?: boolean): any;
