"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfPatchedRolePermission = instanceOfPatchedRolePermission;
exports.PatchedRolePermissionFromJSON = PatchedRolePermissionFromJSON;
exports.PatchedRolePermissionFromJSONTyped = PatchedRolePermissionFromJSONTyped;
exports.PatchedRolePermissionToJSON = PatchedRolePermissionToJSON;
exports.PatchedRolePermissionToJSONTyped = PatchedRolePermissionToJSONTyped;
/**
 * Check if a given object implements the PatchedRolePermission interface.
 */
function instanceOfPatchedRolePermission(value) {
    return true;
}
function PatchedRolePermissionFromJSON(json) {
    return PatchedRolePermissionFromJSONTyped(json, false);
}
function PatchedRolePermissionFromJSONTyped(json, ignoreDiscriminator) {
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
function PatchedRolePermissionToJSON(json) {
    return PatchedRolePermissionToJSONTyped(json, false);
}
function PatchedRolePermissionToJSONTyped(value, ignoreDiscriminator) {
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
