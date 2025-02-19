/**
 * Cadence API
 * Cadence ERP powers your business with a single platform for all your HR, Class Management, Staff Scheduling, Time Tracking & Communication needs.
 *
 * The version of the OpenAPI document: 1.1.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface PatchedPermission
 */
export interface PatchedPermission {
    /**
     *
     * @type {number}
     * @memberof PatchedPermission
     */
    readonly id?: number;
    /**
     *
     * @type {string}
     * @memberof PatchedPermission
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof PatchedPermission
     */
    description?: string;
}
/**
 * Check if a given object implements the PatchedPermission interface.
 */
export declare function instanceOfPatchedPermission(value: object): value is PatchedPermission;
export declare function PatchedPermissionFromJSON(json: any): PatchedPermission;
export declare function PatchedPermissionFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedPermission;
export declare function PatchedPermissionToJSON(json: any): PatchedPermission;
export declare function PatchedPermissionToJSONTyped(value?: Omit<PatchedPermission, 'id'> | null, ignoreDiscriminator?: boolean): any;
