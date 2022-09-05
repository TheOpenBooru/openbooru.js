import { PostQuery, Post }  from "../../types"
import request from "../request"


export async function search(apiUrl: string, query: PostQuery, index = 0, limit = 64): Promise<Array<Post>>{
    let params = Object.assign(query,{ index, limit })
    let r = await request("/posts/search", {
        method: "GET",
        apiUrl: apiUrl,
        params: params,
    })
    
    let posts = await r.json()
    return posts
}
