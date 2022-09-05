import * as Errors from "../../errors";
import request from "../request";
import { Post } from "../../types";


export async function get(apiUrl: string, id: number): Promise<Post> {
    let r = await request(`/post/${id}`, {
        apiUrl,
        responseCodeErrors: {
            404:Errors.PostNotFound,
        }
    })
    
    let post = await r.json();
    return post
}