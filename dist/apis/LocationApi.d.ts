/**
 * Cadence API
 * Cadence ERP powers your business with a single platform for all your HR, Class Management, Staff Scheduling, Time Tracking & Communication needs.
 *
 * The version of the OpenAPI document: 1.1.5
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import type { Address, Country, PatchedAddress, PatchedCountry, PatchedState, State } from '../models/index';
export interface LocationAddressesCreateRequest {
    address: Omit<Address, 'id'>;
}
export interface LocationAddressesDestroyRequest {
    id: number;
}
export interface LocationAddressesPartialUpdateRequest {
    id: number;
    patchedAddress?: Omit<PatchedAddress, 'id'>;
}
export interface LocationAddressesRetrieveRequest {
    id: number;
}
export interface LocationAddressesUpdateRequest {
    id: number;
    address: Omit<Address, 'id'>;
}
export interface LocationCountriesCreateRequest {
    country: Omit<Country, 'id'>;
}
export interface LocationCountriesDestroyRequest {
    id: number;
}
export interface LocationCountriesPartialUpdateRequest {
    id: number;
    patchedCountry?: Omit<PatchedCountry, 'id'>;
}
export interface LocationCountriesRetrieveRequest {
    id: number;
}
export interface LocationCountriesUpdateRequest {
    id: number;
    country: Omit<Country, 'id'>;
}
export interface LocationStatesCreateRequest {
    state: Omit<State, 'id'>;
}
export interface LocationStatesDestroyRequest {
    id: number;
}
export interface LocationStatesPartialUpdateRequest {
    id: number;
    patchedState?: Omit<PatchedState, 'id'>;
}
export interface LocationStatesRetrieveRequest {
    id: number;
}
export interface LocationStatesUpdateRequest {
    id: number;
    state: Omit<State, 'id'>;
}
/**
 *
 */
export declare class LocationApi extends runtime.BaseAPI {
    /**
     */
    locationAddressesCreateRaw(requestParameters: LocationAddressesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Address>>;
    /**
     */
    locationAddressesCreate(requestParameters: LocationAddressesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Address>;
    /**
     */
    locationAddressesDestroyRaw(requestParameters: LocationAddressesDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    locationAddressesDestroy(requestParameters: LocationAddressesDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    locationAddressesListRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Address>>>;
    /**
     */
    locationAddressesList(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Address>>;
    /**
     */
    locationAddressesPartialUpdateRaw(requestParameters: LocationAddressesPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Address>>;
    /**
     */
    locationAddressesPartialUpdate(requestParameters: LocationAddressesPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Address>;
    /**
     */
    locationAddressesRetrieveRaw(requestParameters: LocationAddressesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Address>>;
    /**
     */
    locationAddressesRetrieve(requestParameters: LocationAddressesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Address>;
    /**
     */
    locationAddressesUpdateRaw(requestParameters: LocationAddressesUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Address>>;
    /**
     */
    locationAddressesUpdate(requestParameters: LocationAddressesUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Address>;
    /**
     */
    locationCountriesCreateRaw(requestParameters: LocationCountriesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Country>>;
    /**
     */
    locationCountriesCreate(requestParameters: LocationCountriesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Country>;
    /**
     */
    locationCountriesDestroyRaw(requestParameters: LocationCountriesDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    locationCountriesDestroy(requestParameters: LocationCountriesDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    locationCountriesListRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Country>>>;
    /**
     */
    locationCountriesList(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Country>>;
    /**
     */
    locationCountriesPartialUpdateRaw(requestParameters: LocationCountriesPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Country>>;
    /**
     */
    locationCountriesPartialUpdate(requestParameters: LocationCountriesPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Country>;
    /**
     */
    locationCountriesRetrieveRaw(requestParameters: LocationCountriesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Country>>;
    /**
     */
    locationCountriesRetrieve(requestParameters: LocationCountriesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Country>;
    /**
     */
    locationCountriesUpdateRaw(requestParameters: LocationCountriesUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Country>>;
    /**
     */
    locationCountriesUpdate(requestParameters: LocationCountriesUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Country>;
    /**
     */
    locationStatesCreateRaw(requestParameters: LocationStatesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<State>>;
    /**
     */
    locationStatesCreate(requestParameters: LocationStatesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<State>;
    /**
     */
    locationStatesDestroyRaw(requestParameters: LocationStatesDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     */
    locationStatesDestroy(requestParameters: LocationStatesDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     */
    locationStatesListRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<State>>>;
    /**
     */
    locationStatesList(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<State>>;
    /**
     */
    locationStatesPartialUpdateRaw(requestParameters: LocationStatesPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<State>>;
    /**
     */
    locationStatesPartialUpdate(requestParameters: LocationStatesPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<State>;
    /**
     */
    locationStatesRetrieveRaw(requestParameters: LocationStatesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<State>>;
    /**
     */
    locationStatesRetrieve(requestParameters: LocationStatesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<State>;
    /**
     */
    locationStatesUpdateRaw(requestParameters: LocationStatesUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<State>>;
    /**
     */
    locationStatesUpdate(requestParameters: LocationStatesUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<State>;
}
