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
exports.instanceOfPatchedPermission = instanceOfPatchedPermission;
exports.PatchedPermissionFromJSON = PatchedPermissionFromJSON;
exports.PatchedPermissionFromJSONTyped = PatchedPermissionFromJSONTyped;
exports.PatchedPermissionToJSON = PatchedPermissionToJSON;
exports.PatchedPermissionToJSONTyped = PatchedPermissionToJSONTyped;
/**
 * Check if a given object implements the PatchedPermission interface.
 */
function instanceOfPatchedPermission(value) {
    return true;
}
function PatchedPermissionFromJSON(json) {
    return PatchedPermissionFromJSONTyped(json, false);
}
function PatchedPermissionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
    };
}
function PatchedPermissionToJSON(json) {
    return PatchedPermissionToJSONTyped(json, false);
}
function PatchedPermissionToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'description': value['description'],
    };
}
