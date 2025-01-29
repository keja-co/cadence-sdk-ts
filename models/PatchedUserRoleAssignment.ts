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
 * @interface PatchedUserRoleAssignment
 */
export interface PatchedUserRoleAssignment {
    /**
     * 
     * @type {number}
     * @memberof PatchedUserRoleAssignment
     */
    readonly id?: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedUserRoleAssignment
     */
    user?: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedUserRoleAssignment
     */
    role?: number;
}

/**
 * Check if a given object implements the PatchedUserRoleAssignment interface.
 */
export function instanceOfPatchedUserRoleAssignment(value: object): value is PatchedUserRoleAssignment {
    return true;
}

export function PatchedUserRoleAssignmentFromJSON(json: any): PatchedUserRoleAssignment {
    return PatchedUserRoleAssignmentFromJSONTyped(json, false);
}

export function PatchedUserRoleAssignmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedUserRoleAssignment {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'user': json['user'] == null ? undefined : json['user'],
        'role': json['role'] == null ? undefined : json['role'],
    };
}

export function PatchedUserRoleAssignmentToJSON(json: any): PatchedUserRoleAssignment {
    return PatchedUserRoleAssignmentToJSONTyped(json, false);
}

export function PatchedUserRoleAssignmentToJSONTyped(value?: Omit<PatchedUserRoleAssignment, 'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'user': value['user'],
        'role': value['role'],
    };
}

