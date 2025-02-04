/* tslint:disable */
/* eslint-disable */
/**
 * Cadence API
 * Cadence ERP powers your business with a single platform for all your HR, Class Management, Staff Scheduling, Time Tracking & Communication needs.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
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
export function instanceOfPatchedWorkLocation(value: object): value is PatchedWorkLocation {
    return true;
}

export function PatchedWorkLocationFromJSON(json: any): PatchedWorkLocation {
    return PatchedWorkLocationFromJSONTyped(json, false);
}

export function PatchedWorkLocationFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedWorkLocation {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'address': json['address'] == null ? undefined : json['address'],
    };
}

export function PatchedWorkLocationToJSON(json: any): PatchedWorkLocation {
    return PatchedWorkLocationToJSONTyped(json, false);
}

export function PatchedWorkLocationToJSONTyped(value?: Omit<PatchedWorkLocation, 'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'address': value['address'],
    };
}

