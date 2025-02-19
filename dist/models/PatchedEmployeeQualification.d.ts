/**
 * Cadence API
 * Cadence ERP powers your business with a single platform for all your HR, Class Management, Staff Scheduling, Time Tracking & Communication needs.
 *
 * The version of the OpenAPI document: 1.1.7
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
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
export declare function instanceOfPatchedEmployeeQualification(value: object): value is PatchedEmployeeQualification;
export declare function PatchedEmployeeQualificationFromJSON(json: any): PatchedEmployeeQualification;
export declare function PatchedEmployeeQualificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedEmployeeQualification;
export declare function PatchedEmployeeQualificationToJSON(json: any): PatchedEmployeeQualification;
export declare function PatchedEmployeeQualificationToJSONTyped(value?: Omit<PatchedEmployeeQualification, 'id'> | null, ignoreDiscriminator?: boolean): any;
