/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PatchedAddress
 */
export interface PatchedAddress {
    /**
     * 
     * @type {number}
     * @memberof PatchedAddress
     */
    readonly id?: number;
    /**
     * Street address or PO Box
     * @type {string}
     * @memberof PatchedAddress
     */
    line1?: string;
    /**
     * Additional address information, e.g., apartment, unit
     * @type {string}
     * @memberof PatchedAddress
     */
    line2?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedAddress
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedAddress
     */
    suburb?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedAddress
     */
    postalCode?: string;
    /**
     * 
     * @type {number}
     * @memberof PatchedAddress
     */
    state?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PatchedAddress
     */
    country?: number;
}

/**
 * Check if a given object implements the PatchedAddress interface.
 */
export function instanceOfPatchedAddress(value: object): value is PatchedAddress {
    return true;
}

export function PatchedAddressFromJSON(json: any): PatchedAddress {
    return PatchedAddressFromJSONTyped(json, false);
}

export function PatchedAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedAddress {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'line1': json['line_1'] == null ? undefined : json['line_1'],
        'line2': json['line_2'] == null ? undefined : json['line_2'],
        'city': json['city'] == null ? undefined : json['city'],
        'suburb': json['suburb'] == null ? undefined : json['suburb'],
        'postalCode': json['postal_code'] == null ? undefined : json['postal_code'],
        'state': json['state'] == null ? undefined : json['state'],
        'country': json['country'] == null ? undefined : json['country'],
    };
}

export function PatchedAddressToJSON(json: any): PatchedAddress {
    return PatchedAddressToJSONTyped(json, false);
}

export function PatchedAddressToJSONTyped(value?: Omit<PatchedAddress, 'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'line_1': value['line1'],
        'line_2': value['line2'],
        'city': value['city'],
        'suburb': value['suburb'],
        'postal_code': value['postalCode'],
        'state': value['state'],
        'country': value['country'],
    };
}

