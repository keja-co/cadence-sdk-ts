/**
 * Cadence API
 * Cadence ERP powers your business with a single platform for all your HR, Class Management, Staff Scheduling, Time Tracking & Communication needs.
 *
 * The version of the OpenAPI document: 1.1.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface User
 */
export interface User {
    /**
     *
     * @type {number}
     * @memberof User
     */
    readonly id: number;
    /**
     *
     * @type {string}
     * @memberof User
     */
    password: string;
    /**
     *
     * @type {Date}
     * @memberof User
     */
    lastLogin?: Date | null;
    /**
     * Designates that this user has all permissions without explicitly assigning them.
     * @type {boolean}
     * @memberof User
     */
    isSuperuser?: boolean;
    /**
     * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
     * @type {string}
     * @memberof User
     */
    username: string;
    /**
     *
     * @type {string}
     * @memberof User
     */
    firstName?: string;
    /**
     *
     * @type {string}
     * @memberof User
     */
    lastName?: string;
    /**
     *
     * @type {string}
     * @memberof User
     */
    email?: string;
    /**
     * Designates whether the user can log into this admin site.
     * @type {boolean}
     * @memberof User
     */
    isStaff?: boolean;
    /**
     * Designates whether this user should be treated as active. Unselect this instead of deleting accounts.
     * @type {boolean}
     * @memberof User
     */
    isActive?: boolean;
    /**
     *
     * @type {Date}
     * @memberof User
     */
    dateJoined?: Date;
    /**
     *
     * @type {string}
     * @memberof User
     */
    userSsoId?: string | null;
    /**
     * The groups this user belongs to. A user will get all permissions granted to each of their groups.
     * @type {Array<number>}
     * @memberof User
     */
    groups?: Array<number>;
    /**
     * Specific permissions for this user.
     * @type {Array<number>}
     * @memberof User
     */
    userPermissions?: Array<number>;
}
/**
 * Check if a given object implements the User interface.
 */
export declare function instanceOfUser(value: object): value is User;
export declare function UserFromJSON(json: any): User;
export declare function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User;
export declare function UserToJSON(json: any): User;
export declare function UserToJSONTyped(value?: Omit<User, 'id'> | null, ignoreDiscriminator?: boolean): any;
