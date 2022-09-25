import type { TagQuery, Tag } from "../../types"
import request from "../request"
import { ApiData, DefaultApi, DefaultApiData } from "../interface"

export async function get(
        tag: string,
        {apiUrl=DefaultApi, token=null}: ApiData = DefaultApiData,
    ): Promise<Tag> {
    let r = await request(apiUrl, "GET", "/tags/get", {
        token: token,
        params: { tag },
    })
    let tag_obj = await r.json()
    return tag_obj
}