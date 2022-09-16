import * as Errors from "../../errors";
import request from "../request";
import { Post } from "../../types";


export async function get(apiUrl: string, token:string|null, id: number): Promise<Post> {
    let r = await request(apiUrl, "GET", `/post/${id}`, {
        responseCodeErrors: {
            404:Errors.PostNotFound,
        }
    })
    
    let post = await r.json();
    return post
}