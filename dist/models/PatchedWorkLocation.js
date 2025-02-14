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
exports.instanceOfPatchedWorkLocation = instanceOfPatchedWorkLocation;
exports.PatchedWorkLocationFromJSON = PatchedWorkLocationFromJSON;
exports.PatchedWorkLocationFromJSONTyped = PatchedWorkLocationFromJSONTyped;
exports.PatchedWorkLocationToJSON = PatchedWorkLocationToJSON;
exports.PatchedWorkLocationToJSONTyped = PatchedWorkLocationToJSONTyped;
/**
 * Check if a given object implements the PatchedWorkLocation interface.
 */
function instanceOfPatchedWorkLocation(value) {
    return true;
}
function PatchedWorkLocationFromJSON(json) {
    return PatchedWorkLocationFromJSONTyped(json, false);
}
function PatchedWorkLocationFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'address': json['address'] == null ? undefined : json['address'],
    };
}
function PatchedWorkLocationToJSON(json) {
    return PatchedWorkLocationToJSONTyped(json, false);
}
function PatchedWorkLocationToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'address': value['address'],
    };
}
