/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PatchedEmploymentType
 */
export interface PatchedEmploymentType {
    /**
     * 
     * @type {number}
     * @memberof PatchedEmploymentType
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedEmploymentType
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedEmploymentType
     */
    description?: string;
}

/**
 * Check if a given object implements the PatchedEmploymentType interface.
 */
export function instanceOfPatchedEmploymentType(value: object): value is PatchedEmploymentType {
    return true;
}

export function PatchedEmploymentTypeFromJSON(json: any): PatchedEmploymentType {
    return PatchedEmploymentTypeFromJSONTyped(json, false);
}

export function PatchedEmploymentTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedEmploymentType {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
    };
}

export function PatchedEmploymentTypeToJSON(json: any): PatchedEmploymentType {
    return PatchedEmploymentTypeToJSONTyped(json, false);
}

export function PatchedEmploymentTypeToJSONTyped(value?: Omit<PatchedEmploymentType, 'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'description': value['description'],
    };
}

