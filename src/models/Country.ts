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
 * @interface Country
 */
export interface Country {
    /**
     * 
     * @type {number}
     * @memberof Country
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof Country
     */
    name: string;
    /**
     * ISO 3166-1 alpha-3 country code
     * @type {string}
     * @memberof Country
     */
    isoCode: string;
}

/**
 * Check if a given object implements the Country interface.
 */
export function instanceOfCountry(value: object): value is Country {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('isoCode' in value) || value['isoCode'] === undefined) return false;
    return true;
}

export function CountryFromJSON(json: any): Country {
    return CountryFromJSONTyped(json, false);
}

export function CountryFromJSONTyped(json: any, ignoreDiscriminator: boolean): Country {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'isoCode': json['iso_code'],
    };
}

export function CountryToJSON(json: any): Country {
    return CountryToJSONTyped(json, false);
}

export function CountryToJSONTyped(value?: Omit<Country, 'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'iso_code': value['isoCode'],
    };
}

