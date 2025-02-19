"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Cadence API
 * Cadence ERP powers your business with a single platform for all your HR, Class Management, Staff Scheduling, Time Tracking & Communication needs.
 *
 * The version of the OpenAPI document: 1.1.7
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfSessionStatus = instanceOfSessionStatus;
exports.SessionStatusFromJSON = SessionStatusFromJSON;
exports.SessionStatusFromJSONTyped = SessionStatusFromJSONTyped;
exports.SessionStatusToJSON = SessionStatusToJSON;
exports.SessionStatusToJSONTyped = SessionStatusToJSONTyped;
/**
 * Check if a given object implements the SessionStatus interface.
 */
function instanceOfSessionStatus(value) {
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
function SessionStatusFromJSON(json) {
    return SessionStatusFromJSONTyped(json, false);
}
function SessionStatusFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'status': json['status'],
        'user': json['user'] == null ? undefined : json['user'],
    };
}
function SessionStatusToJSON(json) {
    return SessionStatusToJSONTyped(json, false);
}
function SessionStatusToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'status': value['status'],
        'user': value['user'],
    };
}
