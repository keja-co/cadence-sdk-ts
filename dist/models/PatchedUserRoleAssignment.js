"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfPatchedUserRoleAssignment = instanceOfPatchedUserRoleAssignment;
exports.PatchedUserRoleAssignmentFromJSON = PatchedUserRoleAssignmentFromJSON;
exports.PatchedUserRoleAssignmentFromJSONTyped = PatchedUserRoleAssignmentFromJSONTyped;
exports.PatchedUserRoleAssignmentToJSON = PatchedUserRoleAssignmentToJSON;
exports.PatchedUserRoleAssignmentToJSONTyped = PatchedUserRoleAssignmentToJSONTyped;
/**
 * Check if a given object implements the PatchedUserRoleAssignment interface.
 */
function instanceOfPatchedUserRoleAssignment(value) {
    return true;
}
function PatchedUserRoleAssignmentFromJSON(json) {
    return PatchedUserRoleAssignmentFromJSONTyped(json, false);
}
function PatchedUserRoleAssignmentFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'] == null ? undefined : json['id'],
        'user': json['user'] == null ? undefined : json['user'],
        'role': json['role'] == null ? undefined : json['role'],
    };
}
function PatchedUserRoleAssignmentToJSON(json) {
    return PatchedUserRoleAssignmentToJSONTyped(json, false);
}
function PatchedUserRoleAssignmentToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'user': value['user'],
        'role': value['role'],
    };
}
