/* tslint:disable */
/* eslint-disable */
/**
 * Cadence API
 * Cadence ERP powers your business with a single platform for all your HR, Class Management, Staff Scheduling, Time Tracking & Communication needs.
 *
 * The version of the OpenAPI document: 1.2.0
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
 * @interface PatchedEmployee
 */
export interface PatchedEmployee {
    /**
     * 
     * @type {number}
     * @memberof PatchedEmployee
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedEmployee
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedEmployee
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedEmployee
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedEmployee
     */
    phoneNumber?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedEmployee
     */
    postalAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedEmployee
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedEmployee
     */
    postcode?: string;
    /**
     * 
     * @type {Date}
     * @memberof PatchedEmployee
     */
    dateOfBirth?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof PatchedEmployee
     */
    hireDate?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedEmployee
     */
    position?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedEmployee
     */
    hourlyRate?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedEmployee
     */
    salary?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedEmployee
     */
    taxFileNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedEmployee
     */
    emergencyContactName?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedEmployee
     */
    emergencyContactRelationship?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedEmployee
     */
    emergencyContactPhone?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedEmployee
     */
    isActive?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof PatchedEmployee
     */
    probationEndDate?: Date | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedEmployee
     */
    notes?: string;
    /**
     * 
     * @type {number}
     * @memberof PatchedEmployee
     */
    user?: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedEmployee
     */
    employeeAddress?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PatchedEmployee
     */
    state?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PatchedEmployee
     */
    country?: number | null;
    /**
     * 
     * @type {number}
     * @memberof PatchedEmployee
     */
    employmentType?: number | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof PatchedEmployee
     */
    workLocations?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof PatchedEmployee
     */
    qualifications?: Array<number>;
}

/**
 * Check if a given object implements the PatchedEmployee interface.
 */
export function instanceOfPatchedEmployee(value: object): value is PatchedEmployee {
    return true;
}

export function PatchedEmployeeFromJSON(json: any): PatchedEmployee {
    return PatchedEmployeeFromJSONTyped(json, false);
}

export function PatchedEmployeeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedEmployee {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'firstName': json['first_name'] == null ? undefined : json['first_name'],
        'lastName': json['last_name'] == null ? undefined : json['last_name'],
        'email': json['email'] == null ? undefined : json['email'],
        'phoneNumber': json['phone_number'] == null ? undefined : json['phone_number'],
        'postalAddress': json['postal_address'] == null ? undefined : json['postal_address'],
        'city': json['city'] == null ? undefined : json['city'],
        'postcode': json['postcode'] == null ? undefined : json['postcode'],
        'dateOfBirth': json['date_of_birth'] == null ? undefined : (new Date(json['date_of_birth'])),
        'hireDate': json['hire_date'] == null ? undefined : (new Date(json['hire_date'])),
        'position': json['position'] == null ? undefined : json['position'],
        'hourlyRate': json['hourly_rate'] == null ? undefined : json['hourly_rate'],
        'salary': json['salary'] == null ? undefined : json['salary'],
        'taxFileNumber': json['tax_file_number'] == null ? undefined : json['tax_file_number'],
        'emergencyContactName': json['emergency_contact_name'] == null ? undefined : json['emergency_contact_name'],
        'emergencyContactRelationship': json['emergency_contact_relationship'] == null ? undefined : json['emergency_contact_relationship'],
        'emergencyContactPhone': json['emergency_contact_phone'] == null ? undefined : json['emergency_contact_phone'],
        'isActive': json['is_active'] == null ? undefined : json['is_active'],
        'probationEndDate': json['probation_end_date'] == null ? undefined : (new Date(json['probation_end_date'])),
        'notes': json['notes'] == null ? undefined : json['notes'],
        'user': json['user'] == null ? undefined : json['user'],
        'employeeAddress': json['employee_address'] == null ? undefined : json['employee_address'],
        'state': json['state'] == null ? undefined : json['state'],
        'country': json['country'] == null ? undefined : json['country'],
        'employmentType': json['employment_type'] == null ? undefined : json['employment_type'],
        'workLocations': json['work_locations'] == null ? undefined : json['work_locations'],
        'qualifications': json['qualifications'] == null ? undefined : json['qualifications'],
    };
}

export function PatchedEmployeeToJSON(json: any): PatchedEmployee {
    return PatchedEmployeeToJSONTyped(json, false);
}

export function PatchedEmployeeToJSONTyped(value?: Omit<PatchedEmployee, 'id'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'first_name': value['firstName'],
        'last_name': value['lastName'],
        'email': value['email'],
        'phone_number': value['phoneNumber'],
        'postal_address': value['postalAddress'],
        'city': value['city'],
        'postcode': value['postcode'],
        'date_of_birth': value['dateOfBirth'] == null ? undefined : ((value['dateOfBirth'] as any).toISOString().substring(0,10)),
        'hire_date': value['hireDate'] == null ? undefined : ((value['hireDate'] as any).toISOString().substring(0,10)),
        'position': value['position'],
        'hourly_rate': value['hourlyRate'],
        'salary': value['salary'],
        'tax_file_number': value['taxFileNumber'],
        'emergency_contact_name': value['emergencyContactName'],
        'emergency_contact_relationship': value['emergencyContactRelationship'],
        'emergency_contact_phone': value['emergencyContactPhone'],
        'is_active': value['isActive'],
        'probation_end_date': value['probationEndDate'] == null ? undefined : ((value['probationEndDate'] as any).toISOString().substring(0,10)),
        'notes': value['notes'],
        'user': value['user'],
        'employee_address': value['employeeAddress'],
        'state': value['state'],
        'country': value['country'],
        'employment_type': value['employmentType'],
        'work_locations': value['workLocations'],
        'qualifications': value['qualifications'],
    };
}

