/**
 * Cadence API
 * Cadence ERP powers your business with a single platform for all your HR, Class Management, Staff Scheduling, Time Tracking & Communication needs.
 *
 * The version of the OpenAPI document: 1.1.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface PatchedRole
 */
export interface PatchedRole {
    /**
     *
     * @type {number}
     * @memberof PatchedRole
     */
    readonly id?: number;
    /**
     *
     * @type {string}
     * @memberof PatchedRole
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof PatchedRole
     */
    description?: string;
    /**
     *
     * @type {number}
     * @memberof PatchedRole
     */
    parent?: number | null;
    /**
     *
     * @type {Array<number>}
     * @memberof PatchedRole
     */
    permissions?: Array<number>;
}
/**
 * Check if a given object implements the PatchedRole interface.
 */
export declare function instanceOfPatchedRole(value: object): value is PatchedRole;
export declare function PatchedRoleFromJSON(json: any): PatchedRole;
export declare function PatchedRoleFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedRole;
export declare function PatchedRoleToJSON(json: any): PatchedRole;
export declare function PatchedRoleToJSONTyped(value?: Omit<PatchedRole, 'id'> | null, ignoreDiscriminator?: boolean): any;
