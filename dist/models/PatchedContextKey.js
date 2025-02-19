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
exports.instanceOfPatchedContextKey = instanceOfPatchedContextKey;
exports.PatchedContextKeyFromJSON = PatchedContextKeyFromJSON;
exports.PatchedContextKeyFromJSONTyped = PatchedContextKeyFromJSONTyped;
exports.PatchedContextKeyToJSON = PatchedContextKeyToJSON;
exports.PatchedContextKeyToJSONTyped = PatchedContextKeyToJSONTyped;
/**
 * Check if a given object implements the PatchedContextKey interface.
 */
function instanceOfPatchedContextKey(value) {
    return true;
}
function PatchedContextKeyFromJSON(json) {
    return PatchedContextKeyFromJSONTyped(json, false);
}
function PatchedContextKeyFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'appName': json['app_name'] == null ? undefined : json['app_name'],
    };
}
function PatchedContextKeyToJSON(json) {
    return PatchedContextKeyToJSONTyped(json, false);
}
function PatchedContextKeyToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'description': value['description'],
        'app_name': value['appName'],
    };
}
