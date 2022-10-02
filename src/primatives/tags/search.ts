import type { TagQuery, Tag } from "../../types"
import request from "../request"
import { ApiData, DefaultApi, DefaultApiData } from "../interface"

export async function search(
        query: TagQuery,
        {apiUrl=DefaultApi, token=null, hcatpcha_response=null}: ApiData = DefaultApiData,
    ): Promise<Array<Tag>> {
    let r = await request("GET", "/tags/search", {
        params: query,
        apiUrl,
        token,
        hcatpcha_response
    })
    let tags = await r.json()
    return tags
}