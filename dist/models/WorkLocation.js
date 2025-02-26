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
exports.instanceOfWorkLocation = instanceOfWorkLocation;
exports.WorkLocationFromJSON = WorkLocationFromJSON;
exports.WorkLocationFromJSONTyped = WorkLocationFromJSONTyped;
exports.WorkLocationToJSON = WorkLocationToJSON;
exports.WorkLocationToJSONTyped = WorkLocationToJSONTyped;
/**
 * Check if a given object implements the WorkLocation interface.
 */
function instanceOfWorkLocation(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('address' in value) || value['address'] === undefined)
        return false;
    return true;
}
function WorkLocationFromJSON(json) {
    return WorkLocationFromJSONTyped(json, false);
}
function WorkLocationFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'name': json['name'],
        'address': json['address'],
    };
}
function WorkLocationToJSON(json) {
    return WorkLocationToJSONTyped(json, false);
}
function WorkLocationToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'address': value['address'],
    };
}
