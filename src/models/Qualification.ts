/* tslint:disable */
/* eslint-disable */
/**
 * Cadence API
 * Cadence ERP powers your business with a single platform for all your HR, Class Management, Staff Scheduling, Time Tracking & Communication needs.
 *
 * The version of the OpenAPI document: 1.1.3
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
 * @interface Qualification
 */
export interface Qualification {
    /**
     * 
     * @type {number}
     * @memberof Qualification
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof Qualification
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Qualification
     */
    description?: string;
}

/**
 * Check if a given object implements the Qualification interface.
 */
export function instanceOfQualification(value: object): value is Qualification {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function QualificationFromJSON(json: any): Qualification {
    return QualificationFromJSONTyped(json, false);
}

export function QualificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Qualification {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': json['description'] == null ? undefined : json['description'],
    };
}

export function QualificationToJSON(json: any): Qualification {
    return QualificationToJSONTyped(json, false);
}

export function QualificationToJSONTyped(value?: Omit<Qualification, 'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'description': value['description'],
    };
}

