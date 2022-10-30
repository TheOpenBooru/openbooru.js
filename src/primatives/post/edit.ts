import * as Errors from "../../errors";
import request from "../request";
import { ApiData, DefaultApi, DefaultApiData } from "../interface";


export async function edit(
        post_id: number|string,
        sources: string[],
        rating: string | null,
        tags: Array<string> | null,
        { apiUrl = DefaultApi, token = null, hcatpcha_response=null }: ApiData = DefaultApiData,
    ) {
    let data = JSON.stringify({sources, rating, tags})
    await request("PATCH", `/post/${post_id}`, {
        body: data,
        headers: { "Content-Type": "application/json" },
        responseCodeErrors: {
            400: Errors.PostEditFailure,
            404: Errors.PostNotFound,
        },
        token,
        hcatpcha_response,
        apiUrl,
    })
}