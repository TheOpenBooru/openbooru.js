import { PostQuery, Post } from "../../types"
import * as Errors from "../../errors"
import request from "../request"


export async function Import(apiUrl: string, token:string|null, url: string): Promise<Array<Post>> {
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
