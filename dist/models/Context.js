"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Cadence API
 * Cadence ERP powers your business with a single platform for all your HR, Class Management, Staff Scheduling, Time Tracking & Communication needs.
 *
 * The version of the OpenAPI document: 1.1.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfContext = instanceOfContext;
exports.ContextFromJSON = ContextFromJSON;
exports.ContextFromJSONTyped = ContextFromJSONTyped;
exports.ContextToJSON = ContextToJSON;
exports.ContextToJSONTyped = ContextToJSONTyped;
/**
 * Check if a given object implements the Context interface.
 */
function instanceOfContext(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('value' in value) || value['value'] === undefined)
        return false;
    if (!('key' in value) || value['key'] === undefined)
        return false;
    return true;
}
function ContextFromJSON(json) {
    return ContextFromJSONTyped(json, false);
}
function ContextFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'value': json['value'],
        'key': json['key'],
    };
}
function ContextToJSON(json) {
    return ContextToJSONTyped(json, false);
}
function ContextToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'value': value['value'],
        'key': value['key'],
    };
}
