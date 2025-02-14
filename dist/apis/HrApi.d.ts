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
import * as runtime from '../runtime';
import type { Employee, EmployeeQualification, EmploymentType, PatchedEmployee, PatchedEmployeeQualification, PatchedEmploymentType, PatchedQualification, PatchedWorkLocation, Qualification, WorkLocation } from '../models/index';
export interface HrEmployeeQualificationsCreateRequest {
    employeeQualification: Omit<EmployeeQualification, 'id'>;
}
export interface HrEmployeeQualificationsDestroyRequest {
    id: number;
}
export interface HrEmployeeQualificationsPartialUpdateRequest {
    id: number;
    patchedEmployeeQualification?: Omit<PatchedEmployeeQualification, 'id'>;
}
export interface HrEmployeeQualificationsRetrieveRequest {
    id: number;
}
export interface HrEmployeeQualificationsUpdateRequest {
    id: number;
    employeeQualification: Omit<EmployeeQualification, 'id'>;
}
export interface HrEmployeesCreateRequest {
    employee: Omit<Employee, 'id'>;
}
export interface HrEmployeesDestroyRequest {
    id: number;
}
export interface HrEmployeesPartialUpdateRequest {
    id: number;
    patchedEmployee?: Omit<PatchedEmployee, 'id'>;
}
export interface HrEmployeesRetrieveRequest {
    id: number;
}
export interface HrEmployeesUpdateRequest {
    id: number;
    employee: Omit<Employee, 'id'>;
}
export interface HrEmploymentTypesCreateRequest {
    employmentType: Omit<EmploymentType, 'id'>;
}
export interface HrEmploymentTypesDestroyRequest {
    id: number;
}
export interface HrEmploymentTypesPartialUpdateRequest {
    id: number;
    patchedEmploymentType?: Omit<PatchedEmploymentType, 'id'>;
}
export interface HrEmploymentTypesRetrieveRequest {
    id: number;
}
export interface HrEmploymentTypesUpdateRequest {
    id: number;
    employmentType: Omit<EmploymentType, 'id'>;
}
export interface HrQualificationsCreateRequest {
    qualification: Omit<Qualification, 'id'>;
}
export interface HrQualificationsDestroyRequest {
    id: number;
}
export interface HrQualificationsPartialUpdateRequest {
    id: number;
    patchedQualification?: Omit<PatchedQualification, 'id'>;
}
export interface HrQualificationsRetrieveRequest {
    id: number;
}
export interface HrQualificationsUpdateRequest {
    id: number;
    qualification: Omit<Qualification, 'id'>;
}
export interface HrWorkLocationsCreateRequest {
    workLocation: Omit<WorkLocation, 'id'>;
}
export interface HrWorkLocationsDestroyRequest {
    id: number;
}
export interface HrWorkLocationsPartialUpdateRequest {
    id: number;
    patchedWorkLocation?: Omit<PatchedWorkLocation, 'id'>;
}
export interface HrWorkLocationsRetrieveRequest {
    id: number;
}
export interface HrWorkLocationsUpdateRequest {
    id: number;
    workLocation: Omit<WorkLocation, 'id'>;
}
/**
 *
 */
export declare class HrApi extends runtime.BaseAPI {
    /**
     */
    hrEmployeeQualificationsCreateRaw(requestParameters: HrEmployeeQualificationsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EmployeeQualification>>;
    /**
     */
    hrEmployeeQualificationsCreate(requestParameters: HrEmployeeQualificationsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EmployeeQualification>;
    /**
     */
    hrEmployeeQualificationsDestroyRaw(requestParameters: HrEmployeeQualificationsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    hrEmployeeQualificationsDestroy(requestParameters: HrEmployeeQualificationsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    hrEmployeeQualificationsListRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<EmployeeQualification>>>;
    /**
     */
    hrEmployeeQualificationsList(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<EmployeeQualification>>;
    /**
     */
    hrEmployeeQualificationsPartialUpdateRaw(requestParameters: HrEmployeeQualificationsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EmployeeQualification>>;
    /**
     */
    hrEmployeeQualificationsPartialUpdate(requestParameters: HrEmployeeQualificationsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EmployeeQualification>;
    /**
     */
    hrEmployeeQualificationsRetrieveRaw(requestParameters: HrEmployeeQualificationsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EmployeeQualification>>;
    /**
     */
    hrEmployeeQualificationsRetrieve(requestParameters: HrEmployeeQualificationsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EmployeeQualification>;
    /**
     */
    hrEmployeeQualificationsUpdateRaw(requestParameters: HrEmployeeQualificationsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EmployeeQualification>>;
    /**
     */
    hrEmployeeQualificationsUpdate(requestParameters: HrEmployeeQualificationsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EmployeeQualification>;
    /**
     */
    hrEmployeesCreateRaw(requestParameters: HrEmployeesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Employee>>;
    /**
     */
    hrEmployeesCreate(requestParameters: HrEmployeesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Employee>;
    /**
     */
    hrEmployeesDestroyRaw(requestParameters: HrEmployeesDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    hrEmployeesDestroy(requestParameters: HrEmployeesDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    hrEmployeesListRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Employee>>>;
    /**
     */
    hrEmployeesList(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Employee>>;
    /**
     */
    hrEmployeesPartialUpdateRaw(requestParameters: HrEmployeesPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Employee>>;
    /**
     */
    hrEmployeesPartialUpdate(requestParameters: HrEmployeesPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Employee>;
    /**
     */
    hrEmployeesRetrieveRaw(requestParameters: HrEmployeesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Employee>>;
    /**
     */
    hrEmployeesRetrieve(requestParameters: HrEmployeesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Employee>;
    /**
     */
    hrEmployeesUpdateRaw(requestParameters: HrEmployeesUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Employee>>;
    /**
     */
    hrEmployeesUpdate(requestParameters: HrEmployeesUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Employee>;
    /**
     */
    hrEmploymentTypesCreateRaw(requestParameters: HrEmploymentTypesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EmploymentType>>;
    /**
     */
    hrEmploymentTypesCreate(requestParameters: HrEmploymentTypesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EmploymentType>;
    /**
     */
    hrEmploymentTypesDestroyRaw(requestParameters: HrEmploymentTypesDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    hrEmploymentTypesDestroy(requestParameters: HrEmploymentTypesDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    hrEmploymentTypesListRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<EmploymentType>>>;
    /**
     */
    hrEmploymentTypesList(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<EmploymentType>>;
    /**
     */
    hrEmploymentTypesPartialUpdateRaw(requestParameters: HrEmploymentTypesPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EmploymentType>>;
    /**
     */
    hrEmploymentTypesPartialUpdate(requestParameters: HrEmploymentTypesPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EmploymentType>;
    /**
     */
    hrEmploymentTypesRetrieveRaw(requestParameters: HrEmploymentTypesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EmploymentType>>;
    /**
     */
    hrEmploymentTypesRetrieve(requestParameters: HrEmploymentTypesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EmploymentType>;
    /**
     */
    hrEmploymentTypesUpdateRaw(requestParameters: HrEmploymentTypesUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EmploymentType>>;
    /**
     */
    hrEmploymentTypesUpdate(requestParameters: HrEmploymentTypesUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EmploymentType>;
    /**
     */
    hrQualificationsCreateRaw(requestParameters: HrQualificationsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Qualification>>;
    /**
     */
    hrQualificationsCreate(requestParameters: HrQualificationsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Qualification>;
    /**
     */
    hrQualificationsDestroyRaw(requestParameters: HrQualificationsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    hrQualificationsDestroy(requestParameters: HrQualificationsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    hrQualificationsListRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Qualification>>>;
    /**
     */
    hrQualificationsList(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Qualification>>;
    /**
     */
    hrQualificationsPartialUpdateRaw(requestParameters: HrQualificationsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Qualification>>;
    /**
     */
    hrQualificationsPartialUpdate(requestParameters: HrQualificationsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Qualification>;
    /**
     */
    hrQualificationsRetrieveRaw(requestParameters: HrQualificationsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Qualification>>;
    /**
     */
    hrQualificationsRetrieve(requestParameters: HrQualificationsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Qualification>;
    /**
     */
    hrQualificationsUpdateRaw(requestParameters: HrQualificationsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Qualification>>;
    /**
     */
    hrQualificationsUpdate(requestParameters: HrQualificationsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Qualification>;
    /**
     */
    hrWorkLocationsCreateRaw(requestParameters: HrWorkLocationsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkLocation>>;
    /**
     */
    hrWorkLocationsCreate(requestParameters: HrWorkLocationsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkLocation>;
    /**
     */
    hrWorkLocationsDestroyRaw(requestParameters: HrWorkLocationsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    hrWorkLocationsDestroy(requestParameters: HrWorkLocationsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    hrWorkLocationsListRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<WorkLocation>>>;
    /**
     */
    hrWorkLocationsList(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<WorkLocation>>;
    /**
     */
    hrWorkLocationsPartialUpdateRaw(requestParameters: HrWorkLocationsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkLocation>>;
    /**
     */
    hrWorkLocationsPartialUpdate(requestParameters: HrWorkLocationsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkLocation>;
    /**
     */
    hrWorkLocationsRetrieveRaw(requestParameters: HrWorkLocationsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkLocation>>;
    /**
     */
    hrWorkLocationsRetrieve(requestParameters: HrWorkLocationsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkLocation>;
    /**
     */
    hrWorkLocationsUpdateRaw(requestParameters: HrWorkLocationsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkLocation>>;
    /**
     */
    hrWorkLocationsUpdate(requestParameters: HrWorkLocationsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkLocation>;
}
