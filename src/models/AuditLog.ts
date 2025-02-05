/* tslint:disable */
/* eslint-disable */
/**
 * Cadence API
 * Cadence ERP powers your business with a single platform for all your HR, Class Management, Staff Scheduling, Time Tracking & Communication needs.
 *
 * The version of the OpenAPI document: 1.0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { ActionTypeEnum } from './ActionTypeEnum';
import {
    ActionTypeEnumFromJSON,
    ActionTypeEnumFromJSONTyped,
    ActionTypeEnumToJSON,
    ActionTypeEnumToJSONTyped,
} from './ActionTypeEnum';

/**
 * 
 * @export
 * @interface AuditLog
 */
export interface AuditLog {
    /**
     * 
     * @type {number}
     * @memberof AuditLog
     */
    readonly id: number;
    /**
     * 
     * @type {Date}
     * @memberof AuditLog
     */
    readonly timestamp: Date;
    /**
     * 
     * @type {ActionTypeEnum}
     * @memberof AuditLog
     */
    actionType: ActionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AuditLog
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof AuditLog
     */
    targetObject: string;
    /**
     * 
     * @type {any}
     * @memberof AuditLog
     */
    beforeState: any | null;
    /**
     * 
     * @type {any}
     * @memberof AuditLog
     */
    afterState: any | null;
    /**
     * 
     * @type {number}
     * @memberof AuditLog
     */
    user: number;
}



/**
 * Check if a given object implements the AuditLog interface.
 */
export function instanceOfAuditLog(value: object): value is AuditLog {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    if (!('actionType' in value) || value['actionType'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('targetObject' in value) || value['targetObject'] === undefined) return false;
    if (!('beforeState' in value) || value['beforeState'] === undefined) return false;
    if (!('afterState' in value) || value['afterState'] === undefined) return false;
    if (!('user' in value) || value['user'] === undefined) return false;
    return true;
}

export function AuditLogFromJSON(json: any): AuditLog {
    return AuditLogFromJSONTyped(json, false);
}

export function AuditLogFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuditLog {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'timestamp': (new Date(json['timestamp'])),
        'actionType': ActionTypeEnumFromJSON(json['action_type']),
        'description': json['description'],
        'targetObject': json['target_object'],
        'beforeState': json['before_state'],
        'afterState': json['after_state'],
        'user': json['user'],
    };
}

export function AuditLogToJSON(json: any): AuditLog {
    return AuditLogToJSONTyped(json, false);
}

export function AuditLogToJSONTyped(value?: Omit<AuditLog, 'id'|'timestamp'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'action_type': ActionTypeEnumToJSON(value['actionType']),
        'description': value['description'],
        'target_object': value['targetObject'],
        'before_state': value['beforeState'],
        'after_state': value['afterState'],
        'user': value['user'],
    };
}

