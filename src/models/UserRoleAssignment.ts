/* tslint:disable */
/* eslint-disable */
/**
 * Cadence API
 * Cadence ERP powers your business with a single platform for all your HR, Class Management, Staff Scheduling, Time Tracking & Communication needs.
 *
 * The version of the OpenAPI document: 1.0.2
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
 * @interface UserRoleAssignment
 */
export interface UserRoleAssignment {
    /**
     * 
     * @type {number}
     * @memberof UserRoleAssignment
     */
    readonly id: number;
    /**
     * 
     * @type {number}
     * @memberof UserRoleAssignment
     */
    user: number;
    /**
     * 
     * @type {number}
     * @memberof UserRoleAssignment
     */
    role: number;
}

/**
 * Check if a given object implements the UserRoleAssignment interface.
 */
export function instanceOfUserRoleAssignment(value: object): value is UserRoleAssignment {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('user' in value) || value['user'] === undefined) return false;
    if (!('role' in value) || value['role'] === undefined) return false;
    return true;
}

export function UserRoleAssignmentFromJSON(json: any): UserRoleAssignment {
    return UserRoleAssignmentFromJSONTyped(json, false);
}

export function UserRoleAssignmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserRoleAssignment {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'user': json['user'],
        'role': json['role'],
    };
}

export function UserRoleAssignmentToJSON(json: any): UserRoleAssignment {
    return UserRoleAssignmentToJSONTyped(json, false);
}

export function UserRoleAssignmentToJSONTyped(value?: Omit<UserRoleAssignment, 'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'user': value['user'],
        'role': value['role'],
    };
}

