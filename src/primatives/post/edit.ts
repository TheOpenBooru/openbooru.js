import * as Errors from "../../errors";
import request from "../request";
import { ApiData, DefaultApi, DefaultApiData } from "../interface";


export async function edit(
        post_id: number,
        source: string | null,
        rating: string | null,
        tags: Array<string> | null,
        { apiUrl = DefaultApi, token = null }: ApiData = DefaultApiData,
    ) {
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