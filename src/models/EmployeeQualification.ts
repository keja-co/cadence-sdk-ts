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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface EmployeeQualification
 */
export interface EmployeeQualification {
    /**
     * 
     * @type {number}
     * @memberof EmployeeQualification
     */
    readonly id: number;
    /**
     * 
     * @type {Date}
     * @memberof EmployeeQualification
     */
    issueDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof EmployeeQualification
     */
    expiryDate?: Date;
    /**
     * 
     * @type {number}
     * @memberof EmployeeQualification
     */
    employee: number;
    /**
     * 
     * @type {number}
     * @memberof EmployeeQualification
     */
    qualification: number;
}

/**
 * Check if a given object implements the EmployeeQualification interface.
 */
export function instanceOfEmployeeQualification(value: object): value is EmployeeQualification {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('employee' in value) || value['employee'] === undefined) return false;
    if (!('qualification' in value) || value['qualification'] === undefined) return false;
    return true;
}

export function EmployeeQualificationFromJSON(json: any): EmployeeQualification {
    return EmployeeQualificationFromJSONTyped(json, false);
}

export function EmployeeQualificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmployeeQualification {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'issueDate': json['issue_date'] == null ? undefined : (new Date(json['issue_date'])),
        'expiryDate': json['expiry_date'] == null ? undefined : (new Date(json['expiry_date'])),
        'employee': json['employee'],
        'qualification': json['qualification'],
    };
}

export function EmployeeQualificationToJSON(json: any): EmployeeQualification {
    return EmployeeQualificationToJSONTyped(json, false);
}

export function EmployeeQualificationToJSONTyped(value?: Omit<EmployeeQualification, 'id'> | null, ignoreDiscriminator: boolean = false): any {
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

