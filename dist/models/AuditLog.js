"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Cadence API
 * Cadence ERP powers your business with a single platform for all your HR, Class Management, Staff Scheduling, Time Tracking & Communication needs.
 *
 * The version of the OpenAPI document: 1.1.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfAuditLog = instanceOfAuditLog;
exports.AuditLogFromJSON = AuditLogFromJSON;
exports.AuditLogFromJSONTyped = AuditLogFromJSONTyped;
exports.AuditLogToJSON = AuditLogToJSON;
exports.AuditLogToJSONTyped = AuditLogToJSONTyped;
var ActionTypeEnum_1 = require("./ActionTypeEnum");
/**
 * Check if a given object implements the AuditLog interface.
 */
function instanceOfAuditLog(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('timestamp' in value) || value['timestamp'] === undefined)
        return false;
    if (!('actionType' in value) || value['actionType'] === undefined)
        return false;
    if (!('description' in value) || value['description'] === undefined)
        return false;
    if (!('targetObject' in value) || value['targetObject'] === undefined)
        return false;
    if (!('beforeState' in value) || value['beforeState'] === undefined)
        return false;
    if (!('afterState' in value) || value['afterState'] === undefined)
        return false;
    if (!('user' in value) || value['user'] === undefined)
        return false;
    return true;
}
function AuditLogFromJSON(json) {
    return AuditLogFromJSONTyped(json, false);
}
function AuditLogFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'timestamp': (new Date(json['timestamp'])),
        'actionType': (0, ActionTypeEnum_1.ActionTypeEnumFromJSON)(json['action_type']),
        'description': json['description'],
        'targetObject': json['target_object'],
        'beforeState': json['before_state'],
        'afterState': json['after_state'],
        'user': json['user'],
    };
}
function AuditLogToJSON(json) {
    return AuditLogToJSONTyped(json, false);
}
function AuditLogToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'action_type': (0, ActionTypeEnum_1.ActionTypeEnumToJSON)(value['actionType']),
        'description': value['description'],
        'target_object': value['targetObject'],
        'before_state': value['beforeState'],
        'after_state': value['afterState'],
        'user': value['user'],
    };
}
