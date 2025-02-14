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
 * @interface Role
 */
export interface Role {
    /**
     *
     * @type {number}
     * @memberof Role
     */
    readonly id: number;
    /**
     *
     * @type {string}
     * @memberof Role
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof Role
     */
    description?: string;
    /**
     *
     * @type {number}
     * @memberof Role
     */
    parent?: number | null;
    /**
     *
     * @type {Array<number>}
     * @memberof Role
     */
    permissions: Array<number>;
}
/**
 * Check if a given object implements the Role interface.
 */
export declare function instanceOfRole(value: object): value is Role;
export declare function RoleFromJSON(json: any): Role;
export declare function RoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): Role;
export declare function RoleToJSON(json: any): Role;
export declare function RoleToJSONTyped(value?: Omit<Role, 'id'> | null, ignoreDiscriminator?: boolean): any;
