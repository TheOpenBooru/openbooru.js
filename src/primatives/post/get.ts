import * as Errors from "../../errors";
import request from "../request";
import { ApiData, DefaultApi, DefaultApiData } from "../interface";
import type { Post } from "../../types";


export async function get(
        id: number,
        { apiUrl=DefaultApi, token=null, hcatpcha_response=null}: ApiData = DefaultApiData,
    ): Promise<Post> {
    let r = await request("GET", `/post/${id}`, {
        responseCodeErrors: {
            404:Errors.PostNotFound,
        },
        token, apiUrl, hcatpcha_response,
    })
    
    let post = await r.json();
    return post
}