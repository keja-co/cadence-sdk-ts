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
exports.instanceOfPatchedCountry = instanceOfPatchedCountry;
exports.PatchedCountryFromJSON = PatchedCountryFromJSON;
exports.PatchedCountryFromJSONTyped = PatchedCountryFromJSONTyped;
exports.PatchedCountryToJSON = PatchedCountryToJSON;
exports.PatchedCountryToJSONTyped = PatchedCountryToJSONTyped;
/**
 * Check if a given object implements the PatchedCountry interface.
 */
function instanceOfPatchedCountry(value) {
    return true;
}
function PatchedCountryFromJSON(json) {
    return PatchedCountryFromJSONTyped(json, false);
}
function PatchedCountryFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'isoCode': json['iso_code'] == null ? undefined : json['iso_code'],
    };
}
function PatchedCountryToJSON(json) {
    return PatchedCountryToJSONTyped(json, false);
}
function PatchedCountryToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'iso_code': value['isoCode'],
    };
}
