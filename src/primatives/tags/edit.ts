import type { TagQuery, Tag } from "../../types"
import { ApiData, DefaultApi, DefaultApiData } from "../interface"
import request from "../request"
import { TagEditFailure } from "../../errors"

export async function edit(
        tag: string,
        namespace: string | null,
        parents: string[],
        siblings: string[],
        {apiUrl=DefaultApi, token=null, hcatpcha_response=null}: ApiData = DefaultApiData,
    ): Promise<Tag> {
    let r = await request("POST", "/tags/edit", {
        params: { tag },
        body: JSON.stringify({
            namespace,
            parents,
            siblings,
        }),
        headers: {
            "Content-Type": "application/json",
        },
        apiUrl,
        token,
        hcatpcha_response
    })

    if (r.status === 200){
        let tags = await r.json()
        return tags
    } else {
        let err_text = await r.text()
        throw new TagEditFailure(err_text);
    }
}