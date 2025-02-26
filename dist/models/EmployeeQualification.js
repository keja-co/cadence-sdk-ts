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
exports.instanceOfEmployeeQualification = instanceOfEmployeeQualification;
exports.EmployeeQualificationFromJSON = EmployeeQualificationFromJSON;
exports.EmployeeQualificationFromJSONTyped = EmployeeQualificationFromJSONTyped;
exports.EmployeeQualificationToJSON = EmployeeQualificationToJSON;
exports.EmployeeQualificationToJSONTyped = EmployeeQualificationToJSONTyped;
/**
 * Check if a given object implements the EmployeeQualification interface.
 */
function instanceOfEmployeeQualification(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('employee' in value) || value['employee'] === undefined)
        return false;
    if (!('qualification' in value) || value['qualification'] === undefined)
        return false;
    return true;
}
function EmployeeQualificationFromJSON(json) {
    return EmployeeQualificationFromJSONTyped(json, false);
}
function EmployeeQualificationFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'issueDate': json['issue_date'] == null ? undefined : (new Date(json['issue_date'])),
        'expiryDate': json['expiry_date'] == null ? undefined : (new Date(json['expiry_date'])),
        'employee': json['employee'],
        'qualification': json['qualification'],
    };
}
function EmployeeQualificationToJSON(json) {
    return EmployeeQualificationToJSONTyped(json, false);
}
function EmployeeQualificationToJSONTyped(value, ignoreDiscriminator) {
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
