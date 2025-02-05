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
 * @interface PatchedAuditLog
 */
export interface PatchedAuditLog {
    /**
     * 
     * @type {number}
     * @memberof PatchedAuditLog
     */
    readonly id?: number;
    /**
     * 
     * @type {Date}
     * @memberof PatchedAuditLog
     */
    readonly timestamp?: Date;
    /**
     * 
     * @type {ActionTypeEnum}
     * @memberof PatchedAuditLog
     */
    actionType?: ActionTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof PatchedAuditLog
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedAuditLog
     */
    targetObject?: string;
    /**
     * 
     * @type {any}
     * @memberof PatchedAuditLog
     */
    beforeState?: any | null;
    /**
     * 
     * @type {any}
     * @memberof PatchedAuditLog
     */
    afterState?: any | null;
    /**
     * 
     * @type {number}
     * @memberof PatchedAuditLog
     */
    user?: number;
}



/**
 * Check if a given object implements the PatchedAuditLog interface.
 */
export function instanceOfPatchedAuditLog(value: object): value is PatchedAuditLog {
    return true;
}

export function PatchedAuditLogFromJSON(json: any): PatchedAuditLog {
    return PatchedAuditLogFromJSONTyped(json, false);
}

export function PatchedAuditLogFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedAuditLog {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'timestamp': json['timestamp'] == null ? undefined : (new Date(json['timestamp'])),
        'actionType': json['action_type'] == null ? undefined : ActionTypeEnumFromJSON(json['action_type']),
        'description': json['description'] == null ? undefined : json['description'],
        'targetObject': json['target_object'] == null ? undefined : json['target_object'],
        'beforeState': json['before_state'] == null ? undefined : json['before_state'],
        'afterState': json['after_state'] == null ? undefined : json['after_state'],
        'user': json['user'] == null ? undefined : json['user'],
    };
}

export function PatchedAuditLogToJSON(json: any): PatchedAuditLog {
    return PatchedAuditLogToJSONTyped(json, false);
}

export function PatchedAuditLogToJSONTyped(value?: Omit<PatchedAuditLog, 'id'|'timestamp'> | null, ignoreDiscriminator: boolean = false): any {
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

