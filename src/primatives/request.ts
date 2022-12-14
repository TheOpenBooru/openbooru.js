// @ts-nocheck
import * as Errors from "../errors";
import { ApiData, DefaultApi, DefaultApiData } from "./interface";

interface RequestParams {
    body?: any|null,
    headers?: object,
    params?: object,
    responseCodeErrors?: object,
    apiUrl?: string|null,
    hcatpcha_response?: string|null,
    token?: string|null,
}

export default async function request(
        method: string,
        url_suffix: string,
        {
            body = null,
            headers = {},
            params = {},
            responseCodeErrors = {},
            apiUrl = DefaultApi,
            hcatpcha_response = null,
            token = null
        }: RequestParams,
    ): Promise<Response> {
    if (token) {
        headers["Authorization"] = "bearer " + token
    }
    if (hcatpcha_response !== null) {
        params["h-captcha-response"] = hcatpcha_response
    }
    
    let url = apiUrl + url_suffix;
    if (params) {
        let SearchParams = generateParameters(params);
        url += "?" + SearchParams.toString();
    }

    let r = await fetch(url, { body, method, headers })
    
    if (r.status === 200) {
        return r
    } else {
        let text = await r.text()
        if (r.status in responseCodeErrors) {
            let error = responseCodeErrors[r.status]
            throw new error(text);
        } else {
            switch (r.status) {
                case 401: throw new Errors.InvalidToken()
                case 422: throw new Errors.ValidationError()
                case 429: throw new Errors.RateLimited(Number(r.headers["Retry-After"]))
                case 500: throw new Errors.InternalServerError(text)
                default: throw new Error(text)
            }
        }
    } 
}


function generateParameters(params: object) {
    let SearchParams = new URLSearchParams();
    for (let key in params) {
        let value = params[key];
        if (Array.isArray(value)) {
            value.forEach((v) => SearchParams.append(key, v));
        } else {
            SearchParams.set(key, value);
        }
    }
    return SearchParams
}
