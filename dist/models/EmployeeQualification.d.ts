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
export declare function instanceOfEmployeeQualification(value: object): value is EmployeeQualification;
export declare function EmployeeQualificationFromJSON(json: any): EmployeeQualification;
export declare function EmployeeQualificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmployeeQualification;
export declare function EmployeeQualificationToJSON(json: any): EmployeeQualification;
export declare function EmployeeQualificationToJSONTyped(value?: Omit<EmployeeQualification, 'id'> | null, ignoreDiscriminator?: boolean): any;
