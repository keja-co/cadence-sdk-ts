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
 * @interface Country
 */
export interface Country {
    /**
     *
     * @type {number}
     * @memberof Country
     */
    readonly id: number;
    /**
     *
     * @type {string}
     * @memberof Country
     */
    name: string;
    /**
     * ISO 3166-1 alpha-3 country code
     * @type {string}
     * @memberof Country
     */
    isoCode: string;
}
/**
 * Check if a given object implements the Country interface.
 */
export declare function instanceOfCountry(value: object): value is Country;
export declare function CountryFromJSON(json: any): Country;
export declare function CountryFromJSONTyped(json: any, ignoreDiscriminator: boolean): Country;
export declare function CountryToJSON(json: any): Country;
export declare function CountryToJSONTyped(value?: Omit<Country, 'id'> | null, ignoreDiscriminator?: boolean): any;
