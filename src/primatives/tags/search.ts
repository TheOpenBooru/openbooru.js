import { TagQuery, Tag } from "../../types"
import request from "../request"

export async function search(apiUrl: string, token: string|null, query: TagQuery): Promise<Array<Tag>> {
    let r = await request(apiUrl, "GET", "/tags/search", {
        params: query,
        token: token,
    })
    let tags = await r.json()
    return tags
}