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
 * @interface Permission
 */
export interface Permission {
    /**
     * 
     * @type {number}
     * @memberof Permission
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof Permission
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Permission
     */
    description?: string;
}

/**
 * Check if a given object implements the Permission interface.
 */
export function instanceOfPermission(value: object): value is Permission {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function PermissionFromJSON(json: any): Permission {
    return PermissionFromJSONTyped(json, false);
}

export function PermissionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Permission {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': json['description'] == null ? undefined : json['description'],
    };
}

export function PermissionToJSON(json: any): Permission {
    return PermissionToJSONTyped(json, false);
}

export function PermissionToJSONTyped(value?: Omit<Permission, 'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'description': value['description'],
    };
}

