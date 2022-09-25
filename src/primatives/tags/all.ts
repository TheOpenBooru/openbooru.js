import type { TagQuery, Tag } from "../../types"
import request from "../request"
import { ApiData, DefaultApi, DefaultApiData } from "../interface"

export async function all(
        { apiUrl = DefaultApi, token = null }: ApiData = DefaultApiData,
    ): Promise<Array<Tag>> {
    let r = await request(apiUrl, "GET", "/tags/all", {
        token: token,
    })
    let tags = await r.json()
    return tags
}