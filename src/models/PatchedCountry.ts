/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PatchedCountry
 */
export interface PatchedCountry {
    /**
     * 
     * @type {number}
     * @memberof PatchedCountry
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedCountry
     */
    name?: string;
    /**
     * ISO 3166-1 alpha-3 country code
     * @type {string}
     * @memberof PatchedCountry
     */
    isoCode?: string;
}

/**
 * Check if a given object implements the PatchedCountry interface.
 */
export function instanceOfPatchedCountry(value: object): value is PatchedCountry {
    return true;
}

export function PatchedCountryFromJSON(json: any): PatchedCountry {
    return PatchedCountryFromJSONTyped(json, false);
}

export function PatchedCountryFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedCountry {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'isoCode': json['iso_code'] == null ? undefined : json['iso_code'],
    };
}

export function PatchedCountryToJSON(json: any): PatchedCountry {
    return PatchedCountryToJSONTyped(json, false);
}

export function PatchedCountryToJSONTyped(value?: Omit<PatchedCountry, 'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'iso_code': value['isoCode'],
    };
}

