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
 * @interface Employee
 */
export interface Employee {
    /**
     * 
     * @type {number}
     * @memberof Employee
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof Employee
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof Employee
     */
    lastName: string;
    /**
     * 
     * @type {string}
     * @memberof Employee
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof Employee
     */
    phoneNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof Employee
     */
    postalAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof Employee
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof Employee
     */
    postcode?: string;
    /**
     * 
     * @type {Date}
     * @memberof Employee
     */
    dateOfBirth: Date;
    /**
     * 
     * @type {Date}
     * @memberof Employee
     */
    hireDate: Date;
    /**
     * 
     * @type {string}
     * @memberof Employee
     */
    position: string;
    /**
     * 
     * @type {string}
     * @memberof Employee
     */
    hourlyRate?: string;
    /**
     * 
     * @type {string}
     * @memberof Employee
     */
    salary?: string;
    /**
     * 
     * @type {string}
     * @memberof Employee
     */
    taxFileNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof Employee
     */
    emergencyContactName?: string;
    /**
     * 
     * @type {string}
     * @memberof Employee
     */
    emergencyContactRelationship?: string;
    /**
     * 
     * @type {string}
     * @memberof Employee
     */
    emergencyContactPhone?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Employee
     */
    isActive?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof Employee
     */
    probationEndDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof Employee
     */
    notes?: string;
    /**
     * 
     * @type {number}
     * @memberof Employee
     */
    user: number;
    /**
     * 
     * @type {number}
     * @memberof Employee
     */
    employeeAddress?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Employee
     */
    state?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Employee
     */
    country?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Employee
     */
    employmentType?: number | null;
    /**
     * 
     * @type {Array<number>}
     * @memberof Employee
     */
    workLocations?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof Employee
     */
    qualifications: Array<number>;
}

/**
 * Check if a given object implements the Employee interface.
 */
export function instanceOfEmployee(value: object): value is Employee {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('firstName' in value) || value['firstName'] === undefined) return false;
    if (!('lastName' in value) || value['lastName'] === undefined) return false;
    if (!('email' in value) || value['email'] === undefined) return false;
    if (!('dateOfBirth' in value) || value['dateOfBirth'] === undefined) return false;
    if (!('hireDate' in value) || value['hireDate'] === undefined) return false;
    if (!('position' in value) || value['position'] === undefined) return false;
    if (!('user' in value) || value['user'] === undefined) return false;
    if (!('qualifications' in value) || value['qualifications'] === undefined) return false;
    return true;
}

export function EmployeeFromJSON(json: any): Employee {
    return EmployeeFromJSONTyped(json, false);
}

export function EmployeeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Employee {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'firstName': json['first_name'],
        'lastName': json['last_name'],
        'email': json['email'],
        'phoneNumber': json['phone_number'] == null ? undefined : json['phone_number'],
        'postalAddress': json['postal_address'] == null ? undefined : json['postal_address'],
        'city': json['city'] == null ? undefined : json['city'],
        'postcode': json['postcode'] == null ? undefined : json['postcode'],
        'dateOfBirth': (new Date(json['date_of_birth'])),
        'hireDate': (new Date(json['hire_date'])),
        'position': json['position'],
        'hourlyRate': json['hourly_rate'] == null ? undefined : json['hourly_rate'],
        'salary': json['salary'] == null ? undefined : json['salary'],
        'taxFileNumber': json['tax_file_number'] == null ? undefined : json['tax_file_number'],
        'emergencyContactName': json['emergency_contact_name'] == null ? undefined : json['emergency_contact_name'],
        'emergencyContactRelationship': json['emergency_contact_relationship'] == null ? undefined : json['emergency_contact_relationship'],
        'emergencyContactPhone': json['emergency_contact_phone'] == null ? undefined : json['emergency_contact_phone'],
        'isActive': json['is_active'] == null ? undefined : json['is_active'],
        'probationEndDate': json['probation_end_date'] == null ? undefined : (new Date(json['probation_end_date'])),
        'notes': json['notes'] == null ? undefined : json['notes'],
        'user': json['user'],
        'employeeAddress': json['employee_address'] == null ? undefined : json['employee_address'],
        'state': json['state'] == null ? undefined : json['state'],
        'country': json['country'] == null ? undefined : json['country'],
        'employmentType': json['employment_type'] == null ? undefined : json['employment_type'],
        'workLocations': json['work_locations'] == null ? undefined : json['work_locations'],
        'qualifications': json['qualifications'],
    };
}

export function EmployeeToJSON(json: any): Employee {
    return EmployeeToJSONTyped(json, false);
}

export function EmployeeToJSONTyped(value?: Omit<Employee, 'id'> | null, ignoreDiscriminator: boolean = false): any {
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
        'date_of_birth': ((value['dateOfBirth']).toISOString().substring(0,10)),
        'hire_date': ((value['hireDate']).toISOString().substring(0,10)),
        'position': value['position'],
        'hourly_rate': value['hourlyRate'],
        'salary': value['salary'],
        'tax_file_number': value['taxFileNumber'],
        'emergency_contact_name': value['emergencyContactName'],
        'emergency_contact_relationship': value['emergencyContactRelationship'],
        'emergency_contact_phone': value['emergencyContactPhone'],
        'is_active': value['isActive'],
        'probation_end_date': value['probationEndDate'] == null ? undefined : ((value['probationEndDate']).toISOString().substring(0,10)),
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

