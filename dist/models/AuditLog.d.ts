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
import type { ActionTypeEnum } from './ActionTypeEnum';
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
export declare function instanceOfAuditLog(value: object): value is AuditLog;
export declare function AuditLogFromJSON(json: any): AuditLog;
export declare function AuditLogFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuditLog;
export declare function AuditLogToJSON(json: any): AuditLog;
export declare function AuditLogToJSONTyped(value?: Omit<AuditLog, 'id' | 'timestamp'> | null, ignoreDiscriminator?: boolean): any;
