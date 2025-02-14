/* tslint:disable */
/* eslint-disable */
/**
 * Cadence API
 * Cadence ERP powers your business with a single platform for all your HR, Class Management, Staff Scheduling, Time Tracking & Communication needs.
 *
 * The version of the OpenAPI document: 1.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PatchedEmployeeQualification
 */
export interface PatchedEmployeeQualification {
    /**
     * 
     * @type {number}
     * @memberof PatchedEmployeeQualification
     */
    readonly id?: number;
    /**
     * 
     * @type {Date}
     * @memberof PatchedEmployeeQualification
     */
    issueDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof PatchedEmployeeQualification
     */
    expiryDate?: Date;
    /**
     * 
     * @type {number}
     * @memberof PatchedEmployeeQualification
     */
    employee?: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedEmployeeQualification
     */
    qualification?: number;
}

/**
 * Check if a given object implements the PatchedEmployeeQualification interface.
 */
export function instanceOfPatchedEmployeeQualification(value: object): value is PatchedEmployeeQualification {
    return true;
}

export function PatchedEmployeeQualificationFromJSON(json: any): PatchedEmployeeQualification {
    return PatchedEmployeeQualificationFromJSONTyped(json, false);
}

export function PatchedEmployeeQualificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedEmployeeQualification {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'issueDate': json['issue_date'] == null ? undefined : (new Date(json['issue_date'])),
        'expiryDate': json['expiry_date'] == null ? undefined : (new Date(json['expiry_date'])),
        'employee': json['employee'] == null ? undefined : json['employee'],
        'qualification': json['qualification'] == null ? undefined : json['qualification'],
    };
}

export function PatchedEmployeeQualificationToJSON(json: any): PatchedEmployeeQualification {
    return PatchedEmployeeQualificationToJSONTyped(json, false);
}

export function PatchedEmployeeQualificationToJSONTyped(value?: Omit<PatchedEmployeeQualification, 'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'issue_date': value['issueDate'] == null ? undefined : ((value['issueDate']).toISOString().substring(0,10)),
        'expiry_date': value['expiryDate'] == null ? undefined : ((value['expiryDate']).toISOString().substring(0,10)),
        'employee': value['employee'],
        'qualification': value['qualification'],
    };
}

