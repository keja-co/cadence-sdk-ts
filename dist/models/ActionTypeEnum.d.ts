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
 * * `CREATE` - Create
 * * `READ` - Read
 * * `UPDATE` - Update
 * * `DELETE` - Delete
 * * `PERMISSION_CHECK` - Permission Check
 * @export
 */
export declare const ActionTypeEnum: {
    readonly Create: "CREATE";
    readonly Read: "READ";
    readonly Update: "UPDATE";
    readonly Delete: "DELETE";
    readonly PermissionCheck: "PERMISSION_CHECK";
};
export type ActionTypeEnum = typeof ActionTypeEnum[keyof typeof ActionTypeEnum];
export declare function instanceOfActionTypeEnum(value: any): boolean;
export declare function ActionTypeEnumFromJSON(json: any): ActionTypeEnum;
export declare function ActionTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActionTypeEnum;
export declare function ActionTypeEnumToJSON(value?: ActionTypeEnum | null): any;
export declare function ActionTypeEnumToJSONTyped(value: any, ignoreDiscriminator: boolean): ActionTypeEnum;
