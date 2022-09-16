import * as Errors from "../../errors";
import request from "../request";


export async function edit(apiUrl: string, token:string|null, post_id: number, source: string | null, rating: string | null, tags: Array<string> | null) {
    let data = JSON.stringify({source, rating, tags})
    await request(apiUrl, "PATCH", `/post/${post_id}`, {
        token: token,
        body: data,
        headers: { "Content-Type": "application/json" },
        responseCodeErrors: {
            400: Errors.PostEditFailure,
            404: Errors.PostNotFound,
        }
    })
}