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
 * @interface ContextKey
 */
export interface ContextKey {
    /**
     * 
     * @type {number}
     * @memberof ContextKey
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof ContextKey
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ContextKey
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof ContextKey
     */
    appName: string;
}

/**
 * Check if a given object implements the ContextKey interface.
 */
export function instanceOfContextKey(value: object): value is ContextKey {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('appName' in value) || value['appName'] === undefined) return false;
    return true;
}

export function ContextKeyFromJSON(json: any): ContextKey {
    return ContextKeyFromJSONTyped(json, false);
}

export function ContextKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContextKey {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'appName': json['app_name'],
    };
}

export function ContextKeyToJSON(json: any): ContextKey {
    return ContextKeyToJSONTyped(json, false);
}

export function ContextKeyToJSONTyped(value?: Omit<ContextKey, 'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'description': value['description'],
        'app_name': value['appName'],
    };
}

