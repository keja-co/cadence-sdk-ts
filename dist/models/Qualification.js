"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Cadence API
 * Cadence ERP powers your business with a single platform for all your HR, Class Management, Staff Scheduling, Time Tracking & Communication needs.
 *
 * The version of the OpenAPI document: 1.1.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfQualification = instanceOfQualification;
exports.QualificationFromJSON = QualificationFromJSON;
exports.QualificationFromJSONTyped = QualificationFromJSONTyped;
exports.QualificationToJSON = QualificationToJSON;
exports.QualificationToJSONTyped = QualificationToJSONTyped;
/**
 * Check if a given object implements the Qualification interface.
 */
function instanceOfQualification(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('name' in value) || value['name'] === undefined)
        return false;
    return true;
}
function QualificationFromJSON(json) {
    return QualificationFromJSONTyped(json, false);
}
function QualificationFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'name': json['name'],
        'description': json['description'] == null ? undefined : json['description'],
    };
}
function QualificationToJSON(json) {
    return QualificationToJSONTyped(json, false);
}
function QualificationToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'description': value['description'],
    };
}
