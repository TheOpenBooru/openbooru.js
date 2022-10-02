import type { TagQuery, Tag } from "../../types"
import request from "../request"
import { ApiData, DefaultApi, DefaultApiData } from "../interface"

export async function all(
        { apiUrl = DefaultApi, token = null, hcatpcha_response = null }: ApiData = DefaultApiData,
    ): Promise<Array<Tag>> {
    let r = await request("GET", "/tags/all", {
        apiUrl,
        token,
        hcatpcha_response
    })
    let tags = await r.json()
    return tags
}