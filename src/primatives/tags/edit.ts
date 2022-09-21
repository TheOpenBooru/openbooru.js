import { TagQuery, Tag } from "../../types"
import request from "../request"

export async function edit(
        apiUrl: string,
        tag: string,
        namespace: string | null,
        parents: string[],
        siblings: string[],
        token: string | null = null
    ): Promise<Array<Tag>> {
    let r = await request(apiUrl, "POST", "/tags/edit", {
        token: token,
        params: { tag },
        body: JSON.stringify({
            namespace,
            parents,
            siblings,
        }),
    })
    let tags = await r.json()
    return tags
}