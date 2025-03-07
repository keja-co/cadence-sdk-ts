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
/**
 * 
 * @export
 * @interface ServerMeta
 */
export interface ServerMeta {
    /**
     * 
     * @type {string}
     * @memberof ServerMeta
     */
    version: string;
    /**
     * 
     * @type {string}
     * @memberof ServerMeta
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof ServerMeta
     */
    reference: string;
}

/**
 * Check if a given object implements the ServerMeta interface.
 */
export function instanceOfServerMeta(value: object): value is ServerMeta {
    if (!('version' in value) || value['version'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('reference' in value) || value['reference'] === undefined) return false;
    return true;
}

export function ServerMetaFromJSON(json: any): ServerMeta {
    return ServerMetaFromJSONTyped(json, false);
}

export function ServerMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServerMeta {
    if (json == null) {
        return json;
    }
    return {
        
        'version': json['version'],
        'status': json['status'],
        'reference': json['reference'],
    };
}

export function ServerMetaToJSON(json: any): ServerMeta {
    return ServerMetaToJSONTyped(json, false);
}

export function ServerMetaToJSONTyped(value?: ServerMeta | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'version': value['version'],
        'status': value['status'],
        'reference': value['reference'],
    };
}

