import { TagQuery, Tag } from "../../types"
import request from "../request"

export async function all(apiUrl: string, token:string|null = null): Promise<Array<Tag>> {
    let r = await request(apiUrl, "GET", "/tags/all", {
        token: token,
    })
    let tags = await r.json()
    return tags
}