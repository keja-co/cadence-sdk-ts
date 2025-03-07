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
 * @interface Qualification
 */
export interface Qualification {
    /**
     *
     * @type {number}
     * @memberof Qualification
     */
    readonly id: number;
    /**
     *
     * @type {string}
     * @memberof Qualification
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof Qualification
     */
    description?: string;
}
/**
 * Check if a given object implements the Qualification interface.
 */
export declare function instanceOfQualification(value: object): value is Qualification;
export declare function QualificationFromJSON(json: any): Qualification;
export declare function QualificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Qualification;
export declare function QualificationToJSON(json: any): Qualification;
export declare function QualificationToJSONTyped(value?: Omit<Qualification, 'id'> | null, ignoreDiscriminator?: boolean): any;
