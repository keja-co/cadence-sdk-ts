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
 * @interface PatchedContext
 */
export interface PatchedContext {
    /**
     * 
     * @type {number}
     * @memberof PatchedContext
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedContext
     */
    value?: string;
    /**
     * 
     * @type {number}
     * @memberof PatchedContext
     */
    key?: number;
}

/**
 * Check if a given object implements the PatchedContext interface.
 */
export function instanceOfPatchedContext(value: object): value is PatchedContext {
    return true;
}

export function PatchedContextFromJSON(json: any): PatchedContext {
    return PatchedContextFromJSONTyped(json, false);
}

export function PatchedContextFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedContext {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'value': json['value'] == null ? undefined : json['value'],
        'key': json['key'] == null ? undefined : json['key'],
    };
}

export function PatchedContextToJSON(json: any): PatchedContext {
    return PatchedContextToJSONTyped(json, false);
}

export function PatchedContextToJSONTyped(value?: Omit<PatchedContext, 'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'value': value['value'],
        'key': value['key'],
    };
}

