import { TagQuery, Tag } from "../../types"
import request from "../request"

export default async function search(apiUrl: string, query: TagQuery): Promise<Array<Tag>> {
    let r = await request("/tags/search", {
        apiUrl: apiUrl,
        params: query,
    })
    let tags = await r.json()
    return tags
}