"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Cadence API
 * Cadence ERP powers your business with a single platform for all your HR, Class Management, Staff Scheduling, Time Tracking & Communication needs.
 *
 * The version of the OpenAPI document: 1.1.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfUserRoleAssignment = instanceOfUserRoleAssignment;
exports.UserRoleAssignmentFromJSON = UserRoleAssignmentFromJSON;
exports.UserRoleAssignmentFromJSONTyped = UserRoleAssignmentFromJSONTyped;
exports.UserRoleAssignmentToJSON = UserRoleAssignmentToJSON;
exports.UserRoleAssignmentToJSONTyped = UserRoleAssignmentToJSONTyped;
/**
 * Check if a given object implements the UserRoleAssignment interface.
 */
function instanceOfUserRoleAssignment(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('user' in value) || value['user'] === undefined)
        return false;
    if (!('role' in value) || value['role'] === undefined)
        return false;
    return true;
}
function UserRoleAssignmentFromJSON(json) {
    return UserRoleAssignmentFromJSONTyped(json, false);
}
function UserRoleAssignmentFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'user': json['user'],
        'role': json['role'],
    };
}
function UserRoleAssignmentToJSON(json) {
    return UserRoleAssignmentToJSONTyped(json, false);
}
function UserRoleAssignmentToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'user': value['user'],
        'role': value['role'],
    };
}
