import type { PostQuery, Post } from "../../types"
import * as Errors from "../../errors"
import request from "../request"
import { ApiData, DefaultApi, DefaultApiData } from "../interface";


export async function Import(
        url: string,
        { apiUrl = DefaultApi, token = null }: ApiData = DefaultApiData,
    ): Promise<Array<Post>> {
    let r = await request(apiUrl, "POST", "/posts/import", {
        token: token,
        body: url,
        responseCodeErrors: {
            400: Errors.PostImportFailure,
            409: Errors.PostAlreadyExists,
        }
    })

    let posts = await r.json()
    return posts
}
