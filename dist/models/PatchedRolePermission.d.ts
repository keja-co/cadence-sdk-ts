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
 * @interface PatchedRolePermission
 */
export interface PatchedRolePermission {
    /**
     *
     * @type {number}
     * @memberof PatchedRolePermission
     */
    readonly id?: number;
    /**
     *
     * @type {number}
     * @memberof PatchedRolePermission
     */
    role?: number;
    /**
     *
     * @type {number}
     * @memberof PatchedRolePermission
     */
    permission?: number;
    /**
     *
     * @type {number}
     * @memberof PatchedRolePermission
     */
    context?: number | null;
}
/**
 * Check if a given object implements the PatchedRolePermission interface.
 */
export declare function instanceOfPatchedRolePermission(value: object): value is PatchedRolePermission;
export declare function PatchedRolePermissionFromJSON(json: any): PatchedRolePermission;
export declare function PatchedRolePermissionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedRolePermission;
export declare function PatchedRolePermissionToJSON(json: any): PatchedRolePermission;
export declare function PatchedRolePermissionToJSONTyped(value?: Omit<PatchedRolePermission, 'id'> | null, ignoreDiscriminator?: boolean): any;
