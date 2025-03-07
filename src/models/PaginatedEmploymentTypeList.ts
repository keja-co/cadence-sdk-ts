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
import type { EmploymentType } from './EmploymentType';
import {
    EmploymentTypeFromJSON,
    EmploymentTypeFromJSONTyped,
    EmploymentTypeToJSON,
    EmploymentTypeToJSONTyped,
} from './EmploymentType';

/**
 * 
 * @export
 * @interface PaginatedEmploymentTypeList
 */
export interface PaginatedEmploymentTypeList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedEmploymentTypeList
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedEmploymentTypeList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedEmploymentTypeList
     */
    previous?: string;
    /**
     * 
     * @type {Array<EmploymentType>}
     * @memberof PaginatedEmploymentTypeList
     */
    results: Array<EmploymentType>;
}

/**
 * Check if a given object implements the PaginatedEmploymentTypeList interface.
 */
export function instanceOfPaginatedEmploymentTypeList(value: object): value is PaginatedEmploymentTypeList {
    if (!('count' in value) || value['count'] === undefined) return false;
    if (!('results' in value) || value['results'] === undefined) return false;
    return true;
}

export function PaginatedEmploymentTypeListFromJSON(json: any): PaginatedEmploymentTypeList {
    return PaginatedEmploymentTypeListFromJSONTyped(json, false);
}

export function PaginatedEmploymentTypeListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedEmploymentTypeList {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'],
        'next': json['next'] == null ? undefined : json['next'],
        'previous': json['previous'] == null ? undefined : json['previous'],
        'results': ((json['results'] as Array<any>).map(EmploymentTypeFromJSON)),
    };
}

export function PaginatedEmploymentTypeListToJSON(json: any): PaginatedEmploymentTypeList {
    return PaginatedEmploymentTypeListToJSONTyped(json, false);
}

export function PaginatedEmploymentTypeListToJSONTyped(value?: PaginatedEmploymentTypeList | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'count': value['count'],
        'next': value['next'],
        'previous': value['previous'],
        'results': ((value['results'] as Array<any>).map(EmploymentTypeToJSON)),
    };
}

