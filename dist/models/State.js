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
exports.instanceOfState = instanceOfState;
exports.StateFromJSON = StateFromJSON;
exports.StateFromJSONTyped = StateFromJSONTyped;
exports.StateToJSON = StateToJSON;
exports.StateToJSONTyped = StateToJSONTyped;
/**
 * Check if a given object implements the State interface.
 */
function instanceOfState(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('country' in value) || value['country'] === undefined)
        return false;
    return true;
}
function StateFromJSON(json) {
    return StateFromJSONTyped(json, false);
}
function StateFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'name': json['name'],
        'code': json['code'] == null ? undefined : json['code'],
        'country': json['country'],
    };
}
function StateToJSON(json) {
    return StateToJSONTyped(json, false);
}
function StateToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'code': value['code'],
        'country': value['country'],
    };
}
