import * as Errors from "../../errors";
import request from "../request";


export async function edit(apiUrl: string, post_id: number, source: string | null, rating: string | null, tags: Array<string> | null, token: string = null) {
    let data = JSON.stringify({source, rating, tags})
    await request(`/post/${post_id}`, {
        apiUrl: apiUrl,
        method: "PATCH",
        body: data,
        headers: { "Content-Type": "application/json" },
        token: token,
        responseCodeErrors: {
            400: Errors.PostEditFailure,
            404: Errors.PostNotFound,
        }
    })
}