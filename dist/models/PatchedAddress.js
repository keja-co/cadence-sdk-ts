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
exports.instanceOfPatchedAddress = instanceOfPatchedAddress;
exports.PatchedAddressFromJSON = PatchedAddressFromJSON;
exports.PatchedAddressFromJSONTyped = PatchedAddressFromJSONTyped;
exports.PatchedAddressToJSON = PatchedAddressToJSON;
exports.PatchedAddressToJSONTyped = PatchedAddressToJSONTyped;
/**
 * Check if a given object implements the PatchedAddress interface.
 */
function instanceOfPatchedAddress(value) {
    return true;
}
function PatchedAddressFromJSON(json) {
    return PatchedAddressFromJSONTyped(json, false);
}
function PatchedAddressFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'] == null ? undefined : json['id'],
        'line1': json['line_1'] == null ? undefined : json['line_1'],
        'line2': json['line_2'] == null ? undefined : json['line_2'],
        'city': json['city'] == null ? undefined : json['city'],
        'suburb': json['suburb'] == null ? undefined : json['suburb'],
        'postalCode': json['postal_code'] == null ? undefined : json['postal_code'],
        'state': json['state'] == null ? undefined : json['state'],
        'country': json['country'] == null ? undefined : json['country'],
    };
}
function PatchedAddressToJSON(json) {
    return PatchedAddressToJSONTyped(json, false);
}
function PatchedAddressToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'line_1': value['line1'],
        'line_2': value['line2'],
        'city': value['city'],
        'suburb': value['suburb'],
        'postal_code': value['postalCode'],
        'state': value['state'],
        'country': value['country'],
    };
}
