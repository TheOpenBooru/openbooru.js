import type { PostQuery, Post }  from "../../types"
import request from "../request"
import { ApiData, DefaultApi, DefaultApiData} from "../interface";


export async function search(
        query: PostQuery,
        index = 0,
        limit = 64,
        { apiUrl = DefaultApi, token = null }: ApiData = DefaultApiData,
    ): Promise<Array<Post>>{
    let params = Object.assign(query,{ index, limit })
    let r = await request(apiUrl, "GET", "/posts/search", {
        params: params,
    })
    return await r.json()
}
