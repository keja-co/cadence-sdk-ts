"use strict";
/* tslint:disable */
/* eslint-disable */
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaRetrieveLangEnum = exports.SchemaRetrieveFormatEnum = exports.SchemaApi = void 0;
var runtime = require("../runtime");
/**
 *
 */
var SchemaApi = /** @class */ (function (_super) {
    __extends(SchemaApi, _super);
    function SchemaApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * OpenApi3 schema for this API. Format can be selected via content negotiation.  - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json
     */
    SchemaApi.prototype.schemaRetrieveRaw = function (requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryParameters = {};
                        if (requestParameters['format'] != null) {
                            queryParameters['format'] = requestParameters['format'];
                        }
                        if (requestParameters['lang'] != null) {
                            queryParameters['lang'] = requestParameters['lang'];
                        }
                        headerParameters = {};
                        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
                            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
                        }
                        return [4 /*yield*/, this.request({
                                path: "/api/schema/",
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            }, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response)];
                }
            });
        });
    };
    /**
     * OpenApi3 schema for this API. Format can be selected via content negotiation.  - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json
     */
    SchemaApi.prototype.schemaRetrieve = function () {
        return __awaiter(this, arguments, void 0, function (requestParameters, initOverrides) {
            var response;
            if (requestParameters === void 0) { requestParameters = {}; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.schemaRetrieveRaw(requestParameters, initOverrides)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return SchemaApi;
}(runtime.BaseAPI));
exports.SchemaApi = SchemaApi;
/**
 * @export
 */
exports.SchemaRetrieveFormatEnum = {
    Json: 'json',
    Yaml: 'yaml'
};
/**
 * @export
 */
exports.SchemaRetrieveLangEnum = {
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
};
