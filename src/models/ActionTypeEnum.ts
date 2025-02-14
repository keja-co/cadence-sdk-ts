/* tslint:disable */
/* eslint-disable */
/**
 * Cadence API
 * Cadence ERP powers your business with a single platform for all your HR, Class Management, Staff Scheduling, Time Tracking & Communication needs.
 *
 * The version of the OpenAPI document: 1.0.3
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
export const ActionTypeEnum = {
    Create: 'CREATE',
    Read: 'READ',
    Update: 'UPDATE',
    Delete: 'DELETE',
    PermissionCheck: 'PERMISSION_CHECK'
} as const;
export type ActionTypeEnum = typeof ActionTypeEnum[keyof typeof ActionTypeEnum];


export function instanceOfActionTypeEnum(value: any): boolean {
    for (const key in ActionTypeEnum) {
        if (Object.prototype.hasOwnProperty.call(ActionTypeEnum, key)) {
            if (ActionTypeEnum[key as keyof typeof ActionTypeEnum] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ActionTypeEnumFromJSON(json: any): ActionTypeEnum {
    return ActionTypeEnumFromJSONTyped(json, false);
}

export function ActionTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActionTypeEnum {
    return json as ActionTypeEnum;
}

export function ActionTypeEnumToJSON(value?: ActionTypeEnum | null): any {
    return value as any;
}

export function ActionTypeEnumToJSONTyped(value: any, ignoreDiscriminator: boolean): ActionTypeEnum {
    return value as ActionTypeEnum;
}

