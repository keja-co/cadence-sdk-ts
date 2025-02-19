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
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {number}
     * @memberof User
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    password: string;
    /**
     * 
     * @type {Date}
     * @memberof User
     */
    lastLogin?: Date | null;
    /**
     * Designates that this user has all permissions without explicitly assigning them.
     * @type {boolean}
     * @memberof User
     */
    isSuperuser?: boolean;
    /**
     * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
     * @type {string}
     * @memberof User
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    email?: string;
    /**
     * Designates whether the user can log into this admin site.
     * @type {boolean}
     * @memberof User
     */
    isStaff?: boolean;
    /**
     * Designates whether this user should be treated as active. Unselect this instead of deleting accounts.
     * @type {boolean}
     * @memberof User
     */
    isActive?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof User
     */
    dateJoined?: Date;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    userSsoId?: string | null;
    /**
     * The groups this user belongs to. A user will get all permissions granted to each of their groups.
     * @type {Array<number>}
     * @memberof User
     */
    groups?: Array<number>;
    /**
     * Specific permissions for this user.
     * @type {Array<number>}
     * @memberof User
     */
    userPermissions?: Array<number>;
}

/**
 * Check if a given object implements the User interface.
 */
export function instanceOfUser(value: object): value is User {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('password' in value) || value['password'] === undefined) return false;
    if (!('username' in value) || value['username'] === undefined) return false;
    return true;
}

export function UserFromJSON(json: any): User {
    return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'password': json['password'],
        'lastLogin': json['last_login'] == null ? undefined : (new Date(json['last_login'])),
        'isSuperuser': json['is_superuser'] == null ? undefined : json['is_superuser'],
        'username': json['username'],
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

export function UserToJSON(json: any): User {
    return UserToJSONTyped(json, false);
}

export function UserToJSONTyped(value?: Omit<User, 'id'> | null, ignoreDiscriminator: boolean = false): any {
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

