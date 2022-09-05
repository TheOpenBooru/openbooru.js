import * as Errors from "../errors";

export default async function request(url_suffix: string,{
        method = "GET",
        body = null,
        headers = {},
        params = {},
        apiUrl = "http://slate:8443",
        token = null,
        responseCodeErrors = {},
    }): Promise<Response>
{
    let url = apiUrl + url_suffix;
    if (token) headers["Authorization"] = "bearer " + token

    if (params) {
        let SearchParams = generateSearchParams(params);
        url += "?" + SearchParams.toString();
    }

    let r = await fetch(url, {
        method: method,
        body: body,
        cache: "no-cache",
    })

    if (r.status === 200) {
        return r
    } else {
        let text = await r.text()
        if (r.status in responseCodeErrors) {
            let error = responseCodeErrors[r.status]
            throw new error(text);
        } else {
            switch (r.status) {
                case 422: throw new Errors.ValidationError()
                case 429: throw new Errors.RateLimited()
                case 500: throw new Errors.InternalServerError(text)
                default: throw new Error(text)
            }
        }
    } 
}


function generateSearchParams(params) {
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