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
 * @interface PatchedRolePermission
 */
export interface PatchedRolePermission {
    /**
     * 
     * @type {number}
     * @memberof PatchedRolePermission
     */
    readonly id?: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedRolePermission
     */
    role?: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedRolePermission
     */
    permission?: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedRolePermission
     */
    context?: number | null;
}

/**
 * Check if a given object implements the PatchedRolePermission interface.
 */
export function instanceOfPatchedRolePermission(value: object): value is PatchedRolePermission {
    return true;
}

export function PatchedRolePermissionFromJSON(json: any): PatchedRolePermission {
    return PatchedRolePermissionFromJSONTyped(json, false);
}

export function PatchedRolePermissionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedRolePermission {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'role': json['role'] == null ? undefined : json['role'],
        'permission': json['permission'] == null ? undefined : json['permission'],
        'context': json['context'] == null ? undefined : json['context'],
    };
}

export function PatchedRolePermissionToJSON(json: any): PatchedRolePermission {
    return PatchedRolePermissionToJSONTyped(json, false);
}

export function PatchedRolePermissionToJSONTyped(value?: Omit<PatchedRolePermission, 'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'role': value['role'],
        'permission': value['permission'],
        'context': value['context'],
    };
}

