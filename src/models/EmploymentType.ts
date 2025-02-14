/* tslint:disable */
/* eslint-disable */
/**
 * Cadence API
 * Cadence ERP powers your business with a single platform for all your HR, Class Management, Staff Scheduling, Time Tracking & Communication needs.
 *
 * The version of the OpenAPI document: 1.0.3
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
 * @interface EmploymentType
 */
export interface EmploymentType {
    /**
     * 
     * @type {number}
     * @memberof EmploymentType
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof EmploymentType
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof EmploymentType
     */
    description?: string;
}

/**
 * Check if a given object implements the EmploymentType interface.
 */
export function instanceOfEmploymentType(value: object): value is EmploymentType {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function EmploymentTypeFromJSON(json: any): EmploymentType {
    return EmploymentTypeFromJSONTyped(json, false);
}

export function EmploymentTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmploymentType {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': json['description'] == null ? undefined : json['description'],
    };
}

export function EmploymentTypeToJSON(json: any): EmploymentType {
    return EmploymentTypeToJSONTyped(json, false);
}

export function EmploymentTypeToJSONTyped(value?: Omit<EmploymentType, 'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'description': value['description'],
    };
}

