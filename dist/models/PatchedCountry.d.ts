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
 * @interface PatchedCountry
 */
export interface PatchedCountry {
    /**
     *
     * @type {number}
     * @memberof PatchedCountry
     */
    readonly id?: number;
    /**
     *
     * @type {string}
     * @memberof PatchedCountry
     */
    name?: string;
    /**
     * ISO 3166-1 alpha-3 country code
     * @type {string}
     * @memberof PatchedCountry
     */
    isoCode?: string;
}
/**
 * Check if a given object implements the PatchedCountry interface.
 */
export declare function instanceOfPatchedCountry(value: object): value is PatchedCountry;
export declare function PatchedCountryFromJSON(json: any): PatchedCountry;
export declare function PatchedCountryFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedCountry;
export declare function PatchedCountryToJSON(json: any): PatchedCountry;
export declare function PatchedCountryToJSONTyped(value?: Omit<PatchedCountry, 'id'> | null, ignoreDiscriminator?: boolean): any;
