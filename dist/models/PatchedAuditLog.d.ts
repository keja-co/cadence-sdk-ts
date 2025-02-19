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
import type { ActionTypeEnum } from './ActionTypeEnum';
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
export declare function instanceOfPatchedAuditLog(value: object): value is PatchedAuditLog;
export declare function PatchedAuditLogFromJSON(json: any): PatchedAuditLog;
export declare function PatchedAuditLogFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedAuditLog;
export declare function PatchedAuditLogToJSON(json: any): PatchedAuditLog;
export declare function PatchedAuditLogToJSONTyped(value?: Omit<PatchedAuditLog, 'id' | 'timestamp'> | null, ignoreDiscriminator?: boolean): any;
