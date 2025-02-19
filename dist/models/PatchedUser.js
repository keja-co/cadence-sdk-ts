"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Cadence API
 * Cadence ERP powers your business with a single platform for all your HR, Class Management, Staff Scheduling, Time Tracking & Communication needs.
 *
 * The version of the OpenAPI document: 1.1.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfPatchedUser = instanceOfPatchedUser;
exports.PatchedUserFromJSON = PatchedUserFromJSON;
exports.PatchedUserFromJSONTyped = PatchedUserFromJSONTyped;
exports.PatchedUserToJSON = PatchedUserToJSON;
exports.PatchedUserToJSONTyped = PatchedUserToJSONTyped;
/**
 * Check if a given object implements the PatchedUser interface.
 */
function instanceOfPatchedUser(value) {
    return true;
}
function PatchedUserFromJSON(json) {
    return PatchedUserFromJSONTyped(json, false);
}
function PatchedUserFromJSONTyped(json, ignoreDiscriminator) {
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
function PatchedUserToJSON(json) {
    return PatchedUserToJSONTyped(json, false);
}
function PatchedUserToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'password': value['password'],
        'last_login': value['lastLogin'] == null ? undefined : (value['lastLogin'].toISOString()),
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
