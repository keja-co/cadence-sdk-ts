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
 * @interface PatchedUser
 */
export interface PatchedUser {
    /**
     *
     * @type {number}
     * @memberof PatchedUser
     */
    readonly id?: number;
    /**
     *
     * @type {string}
     * @memberof PatchedUser
     */
    password?: string;
    /**
     *
     * @type {Date}
     * @memberof PatchedUser
     */
    lastLogin?: Date | null;
    /**
     * Designates that this user has all permissions without explicitly assigning them.
     * @type {boolean}
     * @memberof PatchedUser
     */
    isSuperuser?: boolean;
    /**
     * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
     * @type {string}
     * @memberof PatchedUser
     */
    username?: string;
    /**
     *
     * @type {string}
     * @memberof PatchedUser
     */
    firstName?: string;
    /**
     *
     * @type {string}
     * @memberof PatchedUser
     */
    lastName?: string;
    /**
     *
     * @type {string}
     * @memberof PatchedUser
     */
    email?: string;
    /**
     * Designates whether the user can log into this admin site.
     * @type {boolean}
     * @memberof PatchedUser
     */
    isStaff?: boolean;
    /**
     * Designates whether this user should be treated as active. Unselect this instead of deleting accounts.
     * @type {boolean}
     * @memberof PatchedUser
     */
    isActive?: boolean;
    /**
     *
     * @type {Date}
     * @memberof PatchedUser
     */
    dateJoined?: Date;
    /**
     *
     * @type {string}
     * @memberof PatchedUser
     */
    userSsoId?: string | null;
    /**
     * The groups this user belongs to. A user will get all permissions granted to each of their groups.
     * @type {Array<number>}
     * @memberof PatchedUser
     */
    groups?: Array<number>;
    /**
     * Specific permissions for this user.
     * @type {Array<number>}
     * @memberof PatchedUser
     */
    userPermissions?: Array<number>;
}
/**
 * Check if a given object implements the PatchedUser interface.
 */
export declare function instanceOfPatchedUser(value: object): value is PatchedUser;
export declare function PatchedUserFromJSON(json: any): PatchedUser;
export declare function PatchedUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedUser;
export declare function PatchedUserToJSON(json: any): PatchedUser;
export declare function PatchedUserToJSONTyped(value?: Omit<PatchedUser, 'id'> | null, ignoreDiscriminator?: boolean): any;
