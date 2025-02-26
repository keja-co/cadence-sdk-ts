/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime';
import type { Country } from './Country';
import {
    CountryFromJSON,
    CountryFromJSONTyped,
    CountryToJSON,
    CountryToJSONTyped,
} from './Country';

/**
 * 
 * @export
 * @interface PaginatedCountryList
 */
export interface PaginatedCountryList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedCountryList
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedCountryList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedCountryList
     */
    previous?: string;
    /**
     * 
     * @type {Array<Country>}
     * @memberof PaginatedCountryList
     */
    results: Array<Country>;
}

/**
 * Check if a given object implements the PaginatedCountryList interface.
 */
export function instanceOfPaginatedCountryList(value: object): value is PaginatedCountryList {
    if (!('count' in value) || value['count'] === undefined) return false;
    if (!('results' in value) || value['results'] === undefined) return false;
    return true;
}

export function PaginatedCountryListFromJSON(json: any): PaginatedCountryList {
    return PaginatedCountryListFromJSONTyped(json, false);
}

export function PaginatedCountryListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedCountryList {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'],
        'next': json['next'] == null ? undefined : json['next'],
        'previous': json['previous'] == null ? undefined : json['previous'],
        'results': ((json['results'] as Array<any>).map(CountryFromJSON)),
    };
}

export function PaginatedCountryListToJSON(json: any): PaginatedCountryList {
    return PaginatedCountryListToJSONTyped(json, false);
}

export function PaginatedCountryListToJSONTyped(value?: PaginatedCountryList | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'count': value['count'],
        'next': value['next'],
        'previous': value['previous'],
        'results': ((value['results'] as Array<any>).map(CountryToJSON)),
    };
}

