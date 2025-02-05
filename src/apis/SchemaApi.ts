/* tslint:disable */
/* eslint-disable */
/**
 * Cadence API
 * Cadence ERP powers your business with a single platform for all your HR, Class Management, Staff Scheduling, Time Tracking & Communication needs.
 *
 * The version of the OpenAPI document: 1.0.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';

export interface SchemaRetrieveRequest {
    format?: SchemaRetrieveFormatEnum;
    lang?: SchemaRetrieveLangEnum;
}

/**
 * 
 */
export class SchemaApi extends runtime.BaseAPI {

    /**
     * OpenApi3 schema for this API. Format can be selected via content negotiation.  - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json
     */
    async schemaRetrieveRaw(requestParameters: SchemaRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: any; }>> {
        const queryParameters: any = {};

        if (requestParameters['format'] != null) {
            queryParameters['format'] = requestParameters['format'];
        }

        if (requestParameters['lang'] != null) {
            queryParameters['lang'] = requestParameters['lang'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/schema/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * OpenApi3 schema for this API. Format can be selected via content negotiation.  - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json
     */
    async schemaRetrieve(requestParameters: SchemaRetrieveRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }> {
        const response = await this.schemaRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const SchemaRetrieveFormatEnum = {
    Json: 'json',
    Yaml: 'yaml'
} as const;
export type SchemaRetrieveFormatEnum = typeof SchemaRetrieveFormatEnum[keyof typeof SchemaRetrieveFormatEnum];
/**
 * @export
 */
export const SchemaRetrieveLangEnum = {
    Af: 'af',
    Ar: 'ar',
    ArDz: 'ar-dz',
    Ast: 'ast',
    Az: 'az',
    Be: 'be',
    Bg: 'bg',
    Bn: 'bn',
    Br: 'br',
    Bs: 'bs',
    Ca: 'ca',
    Ckb: 'ckb',
    Cs: 'cs',
    Cy: 'cy',
    Da: 'da',
    De: 'de',
    Dsb: 'dsb',
    El: 'el',
    En: 'en',
    EnAu: 'en-au',
    EnGb: 'en-gb',
    Eo: 'eo',
    Es: 'es',
    EsAr: 'es-ar',
    EsCo: 'es-co',
    EsMx: 'es-mx',
    EsNi: 'es-ni',
    EsVe: 'es-ve',
    Et: 'et',
    Eu: 'eu',
    Fa: 'fa',
    Fi: 'fi',
    Fr: 'fr',
    Fy: 'fy',
    Ga: 'ga',
    Gd: 'gd',
    Gl: 'gl',
    He: 'he',
    Hi: 'hi',
    Hr: 'hr',
    Hsb: 'hsb',
    Hu: 'hu',
    Hy: 'hy',
    Ia: 'ia',
    Id: 'id',
    Ig: 'ig',
    Io: 'io',
    Is: 'is',
    It: 'it',
    Ja: 'ja',
    Ka: 'ka',
    Kab: 'kab',
    Kk: 'kk',
    Km: 'km',
    Kn: 'kn',
    Ko: 'ko',
    Ky: 'ky',
    Lb: 'lb',
    Lt: 'lt',
    Lv: 'lv',
    Mk: 'mk',
    Ml: 'ml',
    Mn: 'mn',
    Mr: 'mr',
    Ms: 'ms',
    My: 'my',
    Nb: 'nb',
    Ne: 'ne',
    Nl: 'nl',
    Nn: 'nn',
    Os: 'os',
    Pa: 'pa',
    Pl: 'pl',
    Pt: 'pt',
    PtBr: 'pt-br',
    Ro: 'ro',
    Ru: 'ru',
    Sk: 'sk',
    Sl: 'sl',
    Sq: 'sq',
    Sr: 'sr',
    SrLatn: 'sr-latn',
    Sv: 'sv',
    Sw: 'sw',
    Ta: 'ta',
    Te: 'te',
    Tg: 'tg',
    Th: 'th',
    Tk: 'tk',
    Tr: 'tr',
    Tt: 'tt',
    Udm: 'udm',
    Ug: 'ug',
    Uk: 'uk',
    Ur: 'ur',
    Uz: 'uz',
    Vi: 'vi',
    ZhHans: 'zh-hans',
    ZhHant: 'zh-hant'
} as const;
export type SchemaRetrieveLangEnum = typeof SchemaRetrieveLangEnum[keyof typeof SchemaRetrieveLangEnum];
