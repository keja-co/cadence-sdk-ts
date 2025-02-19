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
 * @interface PatchedPermission
 */
export interface PatchedPermission {
    /**
     * 
     * @type {number}
     * @memberof PatchedPermission
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedPermission
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedPermission
     */
    description?: string;
}

/**
 * Check if a given object implements the PatchedPermission interface.
 */
export function instanceOfPatchedPermission(value: object): value is PatchedPermission {
    return true;
}

export function PatchedPermissionFromJSON(json: any): PatchedPermission {
    return PatchedPermissionFromJSONTyped(json, false);
}

export function PatchedPermissionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedPermission {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
    };
}

export function PatchedPermissionToJSON(json: any): PatchedPermission {
    return PatchedPermissionToJSONTyped(json, false);
}

export function PatchedPermissionToJSONTyped(value?: Omit<PatchedPermission, 'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'description': value['description'],
    };
}

