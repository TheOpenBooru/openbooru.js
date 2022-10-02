import type { PostQuery, Post }  from "../../types"
import request from "../request"
import { ApiData, DefaultApi, DefaultApiData} from "../interface";


export async function search(
        query: PostQuery,
        index:number|null = null,
        limit:number|null = null,
        { apiUrl = DefaultApi, token = null, hcatpcha_response=null }: ApiData = DefaultApiData,
): Promise<Array<Post>>{
    
    let params = Object.assign(query)
    if (index) params = { index, ...params }
    if (limit) params = { limit, ...params }

    let r = await request("GET", "/posts/search", {
        params: params,
        apiUrl,
        token,
        hcatpcha_response
    })
    return await r.json()
}
