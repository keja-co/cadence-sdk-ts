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
exports.instanceOfPatchedQualification = instanceOfPatchedQualification;
exports.PatchedQualificationFromJSON = PatchedQualificationFromJSON;
exports.PatchedQualificationFromJSONTyped = PatchedQualificationFromJSONTyped;
exports.PatchedQualificationToJSON = PatchedQualificationToJSON;
exports.PatchedQualificationToJSONTyped = PatchedQualificationToJSONTyped;
/**
 * Check if a given object implements the PatchedQualification interface.
 */
function instanceOfPatchedQualification(value) {
    return true;
}
function PatchedQualificationFromJSON(json) {
    return PatchedQualificationFromJSONTyped(json, false);
}
function PatchedQualificationFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
    };
}
function PatchedQualificationToJSON(json) {
    return PatchedQualificationToJSONTyped(json, false);
}
function PatchedQualificationToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'description': value['description'],
    };
}
