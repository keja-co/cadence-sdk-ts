/**
 * Cadence API
 * Cadence ERP powers your business with a single platform for all your HR, Class Management, Staff Scheduling, Time Tracking & Communication needs.
 *
 * The version of the OpenAPI document: 1.1.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
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
export declare function instanceOfEmployee(value: object): value is Employee;
export declare function EmployeeFromJSON(json: any): Employee;
export declare function EmployeeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Employee;
export declare function EmployeeToJSON(json: any): Employee;
export declare function EmployeeToJSONTyped(value?: Omit<Employee, 'id'> | null, ignoreDiscriminator?: boolean): any;
