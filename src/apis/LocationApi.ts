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


import * as runtime from '../runtime';
import type {
  Address,
  Country,
  PatchedAddress,
  PatchedCountry,
  PatchedState,
  State,
} from '../models/index';
import {
    AddressFromJSON,
    AddressToJSON,
    CountryFromJSON,
    CountryToJSON,
    PatchedAddressFromJSON,
    PatchedAddressToJSON,
    PatchedCountryFromJSON,
    PatchedCountryToJSON,
    PatchedStateFromJSON,
    PatchedStateToJSON,
    StateFromJSON,
    StateToJSON,
} from '../models/index';

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
export class LocationApi extends runtime.BaseAPI {

    /**
     */
    async locationAddressesCreateRaw(requestParameters: LocationAddressesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Address>> {
        if (requestParameters['address'] == null) {
            throw new runtime.RequiredError(
                'address',
                'Required parameter "address" was null or undefined when calling locationAddressesCreate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/location/addresses/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AddressToJSON(requestParameters['address']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AddressFromJSON(jsonValue));
    }

    /**
     */
    async locationAddressesCreate(requestParameters: LocationAddressesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Address> {
        const response = await this.locationAddressesCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async locationAddressesDestroyRaw(requestParameters: LocationAddressesDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling locationAddressesDestroy().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/location/addresses/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async locationAddressesDestroy(requestParameters: LocationAddressesDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.locationAddressesDestroyRaw(requestParameters, initOverrides);
    }

    /**
     */
    async locationAddressesListRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Address>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/location/addresses/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AddressFromJSON));
    }

    /**
     */
    async locationAddressesList(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Address>> {
        const response = await this.locationAddressesListRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async locationAddressesPartialUpdateRaw(requestParameters: LocationAddressesPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Address>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling locationAddressesPartialUpdate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/location/addresses/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchedAddressToJSON(requestParameters['patchedAddress']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AddressFromJSON(jsonValue));
    }

    /**
     */
    async locationAddressesPartialUpdate(requestParameters: LocationAddressesPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Address> {
        const response = await this.locationAddressesPartialUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async locationAddressesRetrieveRaw(requestParameters: LocationAddressesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Address>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling locationAddressesRetrieve().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/location/addresses/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AddressFromJSON(jsonValue));
    }

    /**
     */
    async locationAddressesRetrieve(requestParameters: LocationAddressesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Address> {
        const response = await this.locationAddressesRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async locationAddressesUpdateRaw(requestParameters: LocationAddressesUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Address>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling locationAddressesUpdate().'
            );
        }

        if (requestParameters['address'] == null) {
            throw new runtime.RequiredError(
                'address',
                'Required parameter "address" was null or undefined when calling locationAddressesUpdate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/location/addresses/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: AddressToJSON(requestParameters['address']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AddressFromJSON(jsonValue));
    }

    /**
     */
    async locationAddressesUpdate(requestParameters: LocationAddressesUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Address> {
        const response = await this.locationAddressesUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async locationCountriesCreateRaw(requestParameters: LocationCountriesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Country>> {
        if (requestParameters['country'] == null) {
            throw new runtime.RequiredError(
                'country',
                'Required parameter "country" was null or undefined when calling locationCountriesCreate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/location/countries/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CountryToJSON(requestParameters['country']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CountryFromJSON(jsonValue));
    }

    /**
     */
    async locationCountriesCreate(requestParameters: LocationCountriesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Country> {
        const response = await this.locationCountriesCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async locationCountriesDestroyRaw(requestParameters: LocationCountriesDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling locationCountriesDestroy().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/location/countries/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async locationCountriesDestroy(requestParameters: LocationCountriesDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.locationCountriesDestroyRaw(requestParameters, initOverrides);
    }

    /**
     */
    async locationCountriesListRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Country>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/location/countries/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CountryFromJSON));
    }

    /**
     */
    async locationCountriesList(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Country>> {
        const response = await this.locationCountriesListRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async locationCountriesPartialUpdateRaw(requestParameters: LocationCountriesPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Country>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling locationCountriesPartialUpdate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/location/countries/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchedCountryToJSON(requestParameters['patchedCountry']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CountryFromJSON(jsonValue));
    }

    /**
     */
    async locationCountriesPartialUpdate(requestParameters: LocationCountriesPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Country> {
        const response = await this.locationCountriesPartialUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async locationCountriesRetrieveRaw(requestParameters: LocationCountriesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Country>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling locationCountriesRetrieve().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/location/countries/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CountryFromJSON(jsonValue));
    }

    /**
     */
    async locationCountriesRetrieve(requestParameters: LocationCountriesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Country> {
        const response = await this.locationCountriesRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async locationCountriesUpdateRaw(requestParameters: LocationCountriesUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Country>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling locationCountriesUpdate().'
            );
        }

        if (requestParameters['country'] == null) {
            throw new runtime.RequiredError(
                'country',
                'Required parameter "country" was null or undefined when calling locationCountriesUpdate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/location/countries/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CountryToJSON(requestParameters['country']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CountryFromJSON(jsonValue));
    }

    /**
     */
    async locationCountriesUpdate(requestParameters: LocationCountriesUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Country> {
        const response = await this.locationCountriesUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async locationStatesCreateRaw(requestParameters: LocationStatesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<State>> {
        if (requestParameters['state'] == null) {
            throw new runtime.RequiredError(
                'state',
                'Required parameter "state" was null or undefined when calling locationStatesCreate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/location/states/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: StateToJSON(requestParameters['state']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StateFromJSON(jsonValue));
    }

    /**
     */
    async locationStatesCreate(requestParameters: LocationStatesCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<State> {
        const response = await this.locationStatesCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async locationStatesDestroyRaw(requestParameters: LocationStatesDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling locationStatesDestroy().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/location/states/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async locationStatesDestroy(requestParameters: LocationStatesDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.locationStatesDestroyRaw(requestParameters, initOverrides);
    }

    /**
     */
    async locationStatesListRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<State>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/location/states/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(StateFromJSON));
    }

    /**
     */
    async locationStatesList(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<State>> {
        const response = await this.locationStatesListRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async locationStatesPartialUpdateRaw(requestParameters: LocationStatesPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<State>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling locationStatesPartialUpdate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/location/states/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchedStateToJSON(requestParameters['patchedState']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StateFromJSON(jsonValue));
    }

    /**
     */
    async locationStatesPartialUpdate(requestParameters: LocationStatesPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<State> {
        const response = await this.locationStatesPartialUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async locationStatesRetrieveRaw(requestParameters: LocationStatesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<State>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling locationStatesRetrieve().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/location/states/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StateFromJSON(jsonValue));
    }

    /**
     */
    async locationStatesRetrieve(requestParameters: LocationStatesRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<State> {
        const response = await this.locationStatesRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async locationStatesUpdateRaw(requestParameters: LocationStatesUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<State>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling locationStatesUpdate().'
            );
        }

        if (requestParameters['state'] == null) {
            throw new runtime.RequiredError(
                'state',
                'Required parameter "state" was null or undefined when calling locationStatesUpdate().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/location/states/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: StateToJSON(requestParameters['state']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StateFromJSON(jsonValue));
    }

    /**
     */
    async locationStatesUpdate(requestParameters: LocationStatesUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<State> {
        const response = await this.locationStatesUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
