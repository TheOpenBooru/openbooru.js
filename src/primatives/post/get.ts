import * as Errors from "../../errors";
import request from "../request";
import { ApiData, DefaultApi, DefaultApiData } from "../interface";
import type { Post } from "../../types";


export async function get(
        id: number,
        { apiUrl=DefaultApi, token=null }: ApiData = DefaultApiData,
    ): Promise<Post> {
    let r = await request(apiUrl, "GET", `/post/${id}`, {
        token: token,
        responseCodeErrors: {
            404:Errors.PostNotFound,
        }
    })
    
    let post = await r.json();
    return post
}