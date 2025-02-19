/* tslint:disable */
/* eslint-disable */
/**
 * Cadence API
 * Cadence ERP powers your business with a single platform for all your HR, Class Management, Staff Scheduling, Time Tracking & Communication needs.
 *
 * The version of the OpenAPI document: 1.1.5
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
 * @interface PatchedUser
 */
export interface PatchedUser {
    /**
     * 
     * @type {number}
     * @memberof PatchedUser
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedUser
     */
    password?: string;
    /**
     * 
     * @type {Date}
     * @memberof PatchedUser
     */
    lastLogin?: Date | null;
    /**
     * Designates that this user has all permissions without explicitly assigning them.
     * @type {boolean}
     * @memberof PatchedUser
     */
    isSuperuser?: boolean;
    /**
     * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
     * @type {string}
     * @memberof PatchedUser
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedUser
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedUser
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedUser
     */
    email?: string;
    /**
     * Designates whether the user can log into this admin site.
     * @type {boolean}
     * @memberof PatchedUser
     */
    isStaff?: boolean;
    /**
     * Designates whether this user should be treated as active. Unselect this instead of deleting accounts.
     * @type {boolean}
     * @memberof PatchedUser
     */
    isActive?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof PatchedUser
     */
    dateJoined?: Date;
    /**
     * 
     * @type {string}
     * @memberof PatchedUser
     */
    userSsoId?: string | null;
    /**
     * The groups this user belongs to. A user will get all permissions granted to each of their groups.
     * @type {Array<number>}
     * @memberof PatchedUser
     */
    groups?: Array<number>;
    /**
     * Specific permissions for this user.
     * @type {Array<number>}
     * @memberof PatchedUser
     */
    userPermissions?: Array<number>;
}

/**
 * Check if a given object implements the PatchedUser interface.
 */
export function instanceOfPatchedUser(value: object): value is PatchedUser {
    return true;
}

export function PatchedUserFromJSON(json: any): PatchedUser {
    return PatchedUserFromJSONTyped(json, false);
}

export function PatchedUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedUser {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'password': json['password'] == null ? undefined : json['password'],
        'lastLogin': json['last_login'] == null ? undefined : (new Date(json['last_login'])),
        'isSuperuser': json['is_superuser'] == null ? undefined : json['is_superuser'],
        'username': json['username'] == null ? undefined : json['username'],
        'firstName': json['first_name'] == null ? undefined : json['first_name'],
        'lastName': json['last_name'] == null ? undefined : json['last_name'],
        'email': json['email'] == null ? undefined : json['email'],
        'isStaff': json['is_staff'] == null ? undefined : json['is_staff'],
        'isActive': json['is_active'] == null ? undefined : json['is_active'],
        'dateJoined': json['date_joined'] == null ? undefined : (new Date(json['date_joined'])),
        'userSsoId': json['user_sso_id'] == null ? undefined : json['user_sso_id'],
        'groups': json['groups'] == null ? undefined : json['groups'],
        'userPermissions': json['user_permissions'] == null ? undefined : json['user_permissions'],
    };
}

export function PatchedUserToJSON(json: any): PatchedUser {
    return PatchedUserToJSONTyped(json, false);
}

export function PatchedUserToJSONTyped(value?: Omit<PatchedUser, 'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'password': value['password'],
        'last_login': value['lastLogin'] == null ? undefined : ((value['lastLogin'] as any).toISOString()),
        'is_superuser': value['isSuperuser'],
        'username': value['username'],
        'first_name': value['firstName'],
        'last_name': value['lastName'],
        'email': value['email'],
        'is_staff': value['isStaff'],
        'is_active': value['isActive'],
        'date_joined': value['dateJoined'] == null ? undefined : ((value['dateJoined']).toISOString()),
        'user_sso_id': value['userSsoId'],
        'groups': value['groups'],
        'user_permissions': value['userPermissions'],
    };
}

