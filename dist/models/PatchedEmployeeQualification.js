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
exports.instanceOfPatchedEmployeeQualification = instanceOfPatchedEmployeeQualification;
exports.PatchedEmployeeQualificationFromJSON = PatchedEmployeeQualificationFromJSON;
exports.PatchedEmployeeQualificationFromJSONTyped = PatchedEmployeeQualificationFromJSONTyped;
exports.PatchedEmployeeQualificationToJSON = PatchedEmployeeQualificationToJSON;
exports.PatchedEmployeeQualificationToJSONTyped = PatchedEmployeeQualificationToJSONTyped;
/**
 * Check if a given object implements the PatchedEmployeeQualification interface.
 */
function instanceOfPatchedEmployeeQualification(value) {
    return true;
}
function PatchedEmployeeQualificationFromJSON(json) {
    return PatchedEmployeeQualificationFromJSONTyped(json, false);
}
function PatchedEmployeeQualificationFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'] == null ? undefined : json['id'],
        'issueDate': json['issue_date'] == null ? undefined : (new Date(json['issue_date'])),
        'expiryDate': json['expiry_date'] == null ? undefined : (new Date(json['expiry_date'])),
        'employee': json['employee'] == null ? undefined : json['employee'],
        'qualification': json['qualification'] == null ? undefined : json['qualification'],
    };
}
function PatchedEmployeeQualificationToJSON(json) {
    return PatchedEmployeeQualificationToJSONTyped(json, false);
}
function PatchedEmployeeQualificationToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'issue_date': value['issueDate'] == null ? undefined : ((value['issueDate']).toISOString().substring(0, 10)),
        'expiry_date': value['expiryDate'] == null ? undefined : ((value['expiryDate']).toISOString().substring(0, 10)),
        'employee': value['employee'],
        'qualification': value['qualification'],
    };
}
