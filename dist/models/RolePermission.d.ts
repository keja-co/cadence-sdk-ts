/**
 * Cadence API
 * Cadence ERP powers your business with a single platform for all your HR, Class Management, Staff Scheduling, Time Tracking & Communication needs.
 *
 * The version of the OpenAPI document: 1.1.4
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface RolePermission
 */
export interface RolePermission {
    /**
     *
     * @type {number}
     * @memberof RolePermission
     */
    readonly id: number;
    /**
     *
     * @type {number}
     * @memberof RolePermission
     */
    role: number;
    /**
     *
     * @type {number}
     * @memberof RolePermission
     */
    permission: number;
    /**
     *
     * @type {number}
     * @memberof RolePermission
     */
    context: number | null;
}
/**
 * Check if a given object implements the RolePermission interface.
 */
export declare function instanceOfRolePermission(value: object): value is RolePermission;
export declare function RolePermissionFromJSON(json: any): RolePermission;
export declare function RolePermissionFromJSONTyped(json: any, ignoreDiscriminator: boolean): RolePermission;
export declare function RolePermissionToJSON(json: any): RolePermission;
export declare function RolePermissionToJSONTyped(value?: Omit<RolePermission, 'id'> | null, ignoreDiscriminator?: boolean): any;
