/* tslint:disable */
/* eslint-disable */
/**
 * Cadence API
 * Cadence ERP powers your business with a single platform for all your HR, Class Management, Staff Scheduling, Time Tracking & Communication needs.
 *
 * The version of the OpenAPI document: 1.1.2
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
 * @interface PatchedRole
 */
export interface PatchedRole {
    /**
     * 
     * @type {number}
     * @memberof PatchedRole
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedRole
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedRole
     */
    description?: string;
    /**
     * 
     * @type {number}
     * @memberof PatchedRole
     */
    parent?: number | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof PatchedRole
     */
    permissions?: Array<number>;
}

/**
 * Check if a given object implements the PatchedRole interface.
 */
export function instanceOfPatchedRole(value: object): value is PatchedRole {
    return true;
}

export function PatchedRoleFromJSON(json: any): PatchedRole {
    return PatchedRoleFromJSONTyped(json, false);
}

export function PatchedRoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedRole {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'parent': json['parent'] == null ? undefined : json['parent'],
        'permissions': json['permissions'] == null ? undefined : json['permissions'],
    };
}

export function PatchedRoleToJSON(json: any): PatchedRole {
    return PatchedRoleToJSONTyped(json, false);
}

export function PatchedRoleToJSONTyped(value?: Omit<PatchedRole, 'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'description': value['description'],
        'parent': value['parent'],
        'permissions': value['permissions'],
    };
}

