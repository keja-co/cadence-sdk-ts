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
import * as runtime from '../runtime';
import type { AuditLog, Context, ContextKey, PaginatedAuditLogList, PaginatedContextKeyList, PaginatedContextList, PaginatedPermissionList, PaginatedRoleList, PaginatedRolePermissionList, PaginatedUserRoleAssignmentList, PatchedAuditLog, PatchedContext, PatchedContextKey, PatchedPermission, PatchedRole, PatchedRolePermission, PatchedUserRoleAssignment, Permission, Role, RolePermission, UserRoleAssignment } from '../models/index';
export interface ComplianceAuditlogsCreateRequest {
    auditLog: Omit<AuditLog, 'id' | 'timestamp'>;
}
export interface ComplianceAuditlogsDestroyRequest {
    id: number;
}
export interface ComplianceAuditlogsListRequest {
    page?: number;
    pageSize?: number;
}
export interface ComplianceAuditlogsPartialUpdateRequest {
    id: number;
    patchedAuditLog?: Omit<PatchedAuditLog, 'id' | 'timestamp'>;
}
export interface ComplianceAuditlogsRetrieveRequest {
    id: number;
}
export interface ComplianceAuditlogsUpdateRequest {
    id: number;
    auditLog: Omit<AuditLog, 'id' | 'timestamp'>;
}
export interface ComplianceContextkeysCreateRequest {
    contextKey: Omit<ContextKey, 'id'>;
}
export interface ComplianceContextkeysDestroyRequest {
    id: number;
}
export interface ComplianceContextkeysListRequest {
    page?: number;
    pageSize?: number;
}
export interface ComplianceContextkeysPartialUpdateRequest {
    id: number;
    patchedContextKey?: Omit<PatchedContextKey, 'id'>;
}
export interface ComplianceContextkeysRetrieveRequest {
    id: number;
}
export interface ComplianceContextkeysUpdateRequest {
    id: number;
    contextKey: Omit<ContextKey, 'id'>;
}
export interface ComplianceContextsCreateRequest {
    context: Omit<Context, 'id'>;
}
export interface ComplianceContextsDestroyRequest {
    id: number;
}
export interface ComplianceContextsListRequest {
    page?: number;
    pageSize?: number;
}
export interface ComplianceContextsPartialUpdateRequest {
    id: number;
    patchedContext?: Omit<PatchedContext, 'id'>;
}
export interface ComplianceContextsRetrieveRequest {
    id: number;
}
export interface ComplianceContextsUpdateRequest {
    id: number;
    context: Omit<Context, 'id'>;
}
export interface CompliancePermissionsCreateRequest {
    permission: Omit<Permission, 'id'>;
}
export interface CompliancePermissionsDestroyRequest {
    id: number;
}
export interface CompliancePermissionsListRequest {
    page?: number;
    pageSize?: number;
}
export interface CompliancePermissionsPartialUpdateRequest {
    id: number;
    patchedPermission?: Omit<PatchedPermission, 'id'>;
}
export interface CompliancePermissionsRetrieveRequest {
    id: number;
}
export interface CompliancePermissionsUpdateRequest {
    id: number;
    permission: Omit<Permission, 'id'>;
}
export interface ComplianceRolepermissionsCreateRequest {
    rolePermission: Omit<RolePermission, 'id'>;
}
export interface ComplianceRolepermissionsDestroyRequest {
    id: number;
}
export interface ComplianceRolepermissionsListRequest {
    page?: number;
    pageSize?: number;
}
export interface ComplianceRolepermissionsPartialUpdateRequest {
    id: number;
    patchedRolePermission?: Omit<PatchedRolePermission, 'id'>;
}
export interface ComplianceRolepermissionsRetrieveRequest {
    id: number;
}
export interface ComplianceRolepermissionsUpdateRequest {
    id: number;
    rolePermission: Omit<RolePermission, 'id'>;
}
export interface ComplianceRolesCreateRequest {
    role: Omit<Role, 'id'>;
}
export interface ComplianceRolesDestroyRequest {
    id: number;
}
export interface ComplianceRolesListRequest {
    page?: number;
    pageSize?: number;
}
export interface ComplianceRolesPartialUpdateRequest {
    id: number;
    patchedRole?: Omit<PatchedRole, 'id'>;
}
export interface ComplianceRolesRetrieveRequest {
    id: number;
}
export interface ComplianceRolesUpdateRequest {
    id: number;
    role: Omit<Role, 'id'>;
}
export interface ComplianceUserroleassignmentsCreateRequest {
    userRoleAssignment: Omit<UserRoleAssignment, 'id'>;
}
export interface ComplianceUserroleassignmentsDestroyRequest {
    id: number;
}
export interface ComplianceUserroleassignmentsListRequest {
    page?: number;
    pageSize?: number;
}
export interface ComplianceUserroleassignmentsPartialUpdateRequest {
    id: number;
    patchedUserRoleAssignment?: Omit<PatchedUserRoleAssignment, 'id'>;
}
export interface ComplianceUserroleassignmentsRetrieveRequest {
    id: number;
}
export interface ComplianceUserroleassignmentsUpdateRequest {
    id: number;
    userRoleAssignment: Omit<UserRoleAssignment, 'id'>;
}
/**
 *
 */
export declare class ComplianceApi extends runtime.BaseAPI {
    /**
     */
    complianceAuditlogsCreateRaw(requestParameters: ComplianceAuditlogsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AuditLog>>;
    /**
     */
    complianceAuditlogsCreate(requestParameters: ComplianceAuditlogsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AuditLog>;
    /**
     */
    complianceAuditlogsDestroyRaw(requestParameters: ComplianceAuditlogsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    complianceAuditlogsDestroy(requestParameters: ComplianceAuditlogsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    complianceAuditlogsListRaw(requestParameters: ComplianceAuditlogsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedAuditLogList>>;
    /**
     */
    complianceAuditlogsList(requestParameters?: ComplianceAuditlogsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedAuditLogList>;
    /**
     */
    complianceAuditlogsPartialUpdateRaw(requestParameters: ComplianceAuditlogsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AuditLog>>;
    /**
     */
    complianceAuditlogsPartialUpdate(requestParameters: ComplianceAuditlogsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AuditLog>;
    /**
     */
    complianceAuditlogsRetrieveRaw(requestParameters: ComplianceAuditlogsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AuditLog>>;
    /**
     */
    complianceAuditlogsRetrieve(requestParameters: ComplianceAuditlogsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AuditLog>;
    /**
     */
    complianceAuditlogsUpdateRaw(requestParameters: ComplianceAuditlogsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AuditLog>>;
    /**
     */
    complianceAuditlogsUpdate(requestParameters: ComplianceAuditlogsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AuditLog>;
    /**
     */
    complianceContextkeysCreateRaw(requestParameters: ComplianceContextkeysCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ContextKey>>;
    /**
     */
    complianceContextkeysCreate(requestParameters: ComplianceContextkeysCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ContextKey>;
    /**
     */
    complianceContextkeysDestroyRaw(requestParameters: ComplianceContextkeysDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    complianceContextkeysDestroy(requestParameters: ComplianceContextkeysDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    complianceContextkeysListRaw(requestParameters: ComplianceContextkeysListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedContextKeyList>>;
    /**
     */
    complianceContextkeysList(requestParameters?: ComplianceContextkeysListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedContextKeyList>;
    /**
     */
    complianceContextkeysPartialUpdateRaw(requestParameters: ComplianceContextkeysPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ContextKey>>;
    /**
     */
    complianceContextkeysPartialUpdate(requestParameters: ComplianceContextkeysPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ContextKey>;
    /**
     */
    complianceContextkeysRetrieveRaw(requestParameters: ComplianceContextkeysRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ContextKey>>;
    /**
     */
    complianceContextkeysRetrieve(requestParameters: ComplianceContextkeysRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ContextKey>;
    /**
     */
    complianceContextkeysUpdateRaw(requestParameters: ComplianceContextkeysUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ContextKey>>;
    /**
     */
    complianceContextkeysUpdate(requestParameters: ComplianceContextkeysUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ContextKey>;
    /**
     */
    complianceContextsCreateRaw(requestParameters: ComplianceContextsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Context>>;
    /**
     */
    complianceContextsCreate(requestParameters: ComplianceContextsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Context>;
    /**
     */
    complianceContextsDestroyRaw(requestParameters: ComplianceContextsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    complianceContextsDestroy(requestParameters: ComplianceContextsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    complianceContextsListRaw(requestParameters: ComplianceContextsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedContextList>>;
    /**
     */
    complianceContextsList(requestParameters?: ComplianceContextsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedContextList>;
    /**
     */
    complianceContextsPartialUpdateRaw(requestParameters: ComplianceContextsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Context>>;
    /**
     */
    complianceContextsPartialUpdate(requestParameters: ComplianceContextsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Context>;
    /**
     */
    complianceContextsRetrieveRaw(requestParameters: ComplianceContextsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Context>>;
    /**
     */
    complianceContextsRetrieve(requestParameters: ComplianceContextsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Context>;
    /**
     */
    complianceContextsUpdateRaw(requestParameters: ComplianceContextsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Context>>;
    /**
     */
    complianceContextsUpdate(requestParameters: ComplianceContextsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Context>;
    /**
     */
    compliancePermissionsCreateRaw(requestParameters: CompliancePermissionsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Permission>>;
    /**
     */
    compliancePermissionsCreate(requestParameters: CompliancePermissionsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Permission>;
    /**
     */
    compliancePermissionsDestroyRaw(requestParameters: CompliancePermissionsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    compliancePermissionsDestroy(requestParameters: CompliancePermissionsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    compliancePermissionsListRaw(requestParameters: CompliancePermissionsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedPermissionList>>;
    /**
     */
    compliancePermissionsList(requestParameters?: CompliancePermissionsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedPermissionList>;
    /**
     */
    compliancePermissionsPartialUpdateRaw(requestParameters: CompliancePermissionsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Permission>>;
    /**
     */
    compliancePermissionsPartialUpdate(requestParameters: CompliancePermissionsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Permission>;
    /**
     */
    compliancePermissionsRetrieveRaw(requestParameters: CompliancePermissionsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Permission>>;
    /**
     */
    compliancePermissionsRetrieve(requestParameters: CompliancePermissionsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Permission>;
    /**
     */
    compliancePermissionsUpdateRaw(requestParameters: CompliancePermissionsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Permission>>;
    /**
     */
    compliancePermissionsUpdate(requestParameters: CompliancePermissionsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Permission>;
    /**
     */
    complianceRolepermissionsCreateRaw(requestParameters: ComplianceRolepermissionsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RolePermission>>;
    /**
     */
    complianceRolepermissionsCreate(requestParameters: ComplianceRolepermissionsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RolePermission>;
    /**
     */
    complianceRolepermissionsDestroyRaw(requestParameters: ComplianceRolepermissionsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    complianceRolepermissionsDestroy(requestParameters: ComplianceRolepermissionsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    complianceRolepermissionsListRaw(requestParameters: ComplianceRolepermissionsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedRolePermissionList>>;
    /**
     */
    complianceRolepermissionsList(requestParameters?: ComplianceRolepermissionsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedRolePermissionList>;
    /**
     */
    complianceRolepermissionsPartialUpdateRaw(requestParameters: ComplianceRolepermissionsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RolePermission>>;
    /**
     */
    complianceRolepermissionsPartialUpdate(requestParameters: ComplianceRolepermissionsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RolePermission>;
    /**
     */
    complianceRolepermissionsRetrieveRaw(requestParameters: ComplianceRolepermissionsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RolePermission>>;
    /**
     */
    complianceRolepermissionsRetrieve(requestParameters: ComplianceRolepermissionsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RolePermission>;
    /**
     */
    complianceRolepermissionsUpdateRaw(requestParameters: ComplianceRolepermissionsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RolePermission>>;
    /**
     */
    complianceRolepermissionsUpdate(requestParameters: ComplianceRolepermissionsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RolePermission>;
    /**
     */
    complianceRolesCreateRaw(requestParameters: ComplianceRolesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Role>>;
    /**
     */
    complianceRolesCreate(requestParameters: ComplianceRolesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Role>;
    /**
     */
    complianceRolesDestroyRaw(requestParameters: ComplianceRolesDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    complianceRolesDestroy(requestParameters: ComplianceRolesDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    complianceRolesListRaw(requestParameters: ComplianceRolesListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedRoleList>>;
    /**
     */
    complianceRolesList(requestParameters?: ComplianceRolesListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedRoleList>;
    /**
     */
    complianceRolesPartialUpdateRaw(requestParameters: ComplianceRolesPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Role>>;
    /**
     */
    complianceRolesPartialUpdate(requestParameters: ComplianceRolesPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Role>;
    /**
     */
    complianceRolesRetrieveRaw(requestParameters: ComplianceRolesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Role>>;
    /**
     */
    complianceRolesRetrieve(requestParameters: ComplianceRolesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Role>;
    /**
     */
    complianceRolesUpdateRaw(requestParameters: ComplianceRolesUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Role>>;
    /**
     */
    complianceRolesUpdate(requestParameters: ComplianceRolesUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Role>;
    /**
     */
    complianceUserroleassignmentsCreateRaw(requestParameters: ComplianceUserroleassignmentsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserRoleAssignment>>;
    /**
     */
    complianceUserroleassignmentsCreate(requestParameters: ComplianceUserroleassignmentsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserRoleAssignment>;
    /**
     */
    complianceUserroleassignmentsDestroyRaw(requestParameters: ComplianceUserroleassignmentsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    complianceUserroleassignmentsDestroy(requestParameters: ComplianceUserroleassignmentsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    complianceUserroleassignmentsListRaw(requestParameters: ComplianceUserroleassignmentsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedUserRoleAssignmentList>>;
    /**
     */
    complianceUserroleassignmentsList(requestParameters?: ComplianceUserroleassignmentsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedUserRoleAssignmentList>;
    /**
     */
    complianceUserroleassignmentsPartialUpdateRaw(requestParameters: ComplianceUserroleassignmentsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserRoleAssignment>>;
    /**
     */
    complianceUserroleassignmentsPartialUpdate(requestParameters: ComplianceUserroleassignmentsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserRoleAssignment>;
    /**
     */
    complianceUserroleassignmentsRetrieveRaw(requestParameters: ComplianceUserroleassignmentsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserRoleAssignment>>;
    /**
     */
    complianceUserroleassignmentsRetrieve(requestParameters: ComplianceUserroleassignmentsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserRoleAssignment>;
    /**
     */
    complianceUserroleassignmentsUpdateRaw(requestParameters: ComplianceUserroleassignmentsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserRoleAssignment>>;
    /**
     */
    complianceUserroleassignmentsUpdate(requestParameters: ComplianceUserroleassignmentsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserRoleAssignment>;
}
