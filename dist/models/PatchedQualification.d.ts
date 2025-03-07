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
/**
 *
 * @export
 * @interface PatchedQualification
 */
export interface PatchedQualification {
    /**
     *
     * @type {number}
     * @memberof PatchedQualification
     */
    readonly id?: number;
    /**
     *
     * @type {string}
     * @memberof PatchedQualification
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof PatchedQualification
     */
    description?: string;
}
/**
 * Check if a given object implements the PatchedQualification interface.
 */
export declare function instanceOfPatchedQualification(value: object): value is PatchedQualification;
export declare function PatchedQualificationFromJSON(json: any): PatchedQualification;
export declare function PatchedQualificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedQualification;
export declare function PatchedQualificationToJSON(json: any): PatchedQualification;
export declare function PatchedQualificationToJSONTyped(value?: Omit<PatchedQualification, 'id'> | null, ignoreDiscriminator?: boolean): any;
