import type { TagQuery, Tag } from "../../types"
import request from "../request"
import { ApiData, DefaultApi, DefaultApiData } from "../interface"

export async function get(
        tag: string,
        {apiUrl=DefaultApi, token=null, hcatpcha_response=null}: ApiData = DefaultApiData,
    ): Promise<Tag> {
    let r = await request("GET", "/tags/get", {
        params: { tag },
        apiUrl,
        token,
        hcatpcha_response,
    })
    let tag_obj = await r.json()
    return tag_obj
}