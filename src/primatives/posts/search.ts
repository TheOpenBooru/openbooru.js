import { PostQuery, Post }  from "../../types"
import request from "../request"


export async function search(apiUrl: string, token:string|null, query: PostQuery, index = 0, limit = 64): Promise<Array<Post>>{
    let params = Object.assign(query,{ index, limit })
    let r = await request(apiUrl, "GET", "/posts/search", {
        params: params,
    })
    return await r.json()
}
