"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Errors = __importStar(require("../errors"));
function request(url_suffix, { method = "GET", body = null, headers = {}, params = {}, apiUrl = "http://slate:8443", token = null, responseCodeErrors = {}, }) {
    return __awaiter(this, void 0, void 0, function* () {
        let url = apiUrl + url_suffix;
        if (token)
            headers["Authorization"] = "bearer " + token;
        if (params) {
            let SearchParams = generateSearchParams(params);
            url += "?" + SearchParams.toString();
        }
        let r = yield fetch(url, {
            method: method,
            body: body,
            cache: "no-cache",
        });
        if (r.status === 200) {
            return r;
        }
        else {
            let text = yield r.text();
            if (r.status in responseCodeErrors) {
                let error = responseCodeErrors[r.status];
                throw new error(text);
            }
            else {
                switch (r.status) {
                    case 422: throw new Errors.ValidationError();
                    case 429: throw new Errors.RateLimited();
                    case 500: throw new Errors.InternalServerError(text);
                    default: throw new Error(text);
                }
            }
        }
    });
}
exports.default = request;
function generateSearchParams(params) {
    let SearchParams = new URLSearchParams();
    for (let key in params) {
        let value = params[key];
        if (Array.isArray(value)) {
            value.forEach((v) => SearchParams.append(key, v));
        }
        else {
            SearchParams.set(key, value);
        }
    }
    return SearchParams;
}
