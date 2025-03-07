"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfRolePermission = instanceOfRolePermission;
exports.RolePermissionFromJSON = RolePermissionFromJSON;
exports.RolePermissionFromJSONTyped = RolePermissionFromJSONTyped;
exports.RolePermissionToJSON = RolePermissionToJSON;
exports.RolePermissionToJSONTyped = RolePermissionToJSONTyped;
/**
 * Check if a given object implements the RolePermission interface.
 */
function instanceOfRolePermission(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('role' in value) || value['role'] === undefined)
        return false;
    if (!('permission' in value) || value['permission'] === undefined)
        return false;
    if (!('context' in value) || value['context'] === undefined)
        return false;
    return true;
}
function RolePermissionFromJSON(json) {
    return RolePermissionFromJSONTyped(json, false);
}
function RolePermissionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'role': json['role'],
        'permission': json['permission'],
        'context': json['context'],
    };
}
function RolePermissionToJSON(json) {
    return RolePermissionToJSONTyped(json, false);
}
function RolePermissionToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'role': value['role'],
        'permission': value['permission'],
        'context': value['context'],
    };
}
