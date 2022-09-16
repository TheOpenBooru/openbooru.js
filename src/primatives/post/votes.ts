import * as Errors from "../../errors";
import request from "../request";
import { Post } from "../../types";


export async function add_upvote(apiUrl: string, id: number) {
    let r = await request(apiUrl, "POST", `/post/${id}/upvote/add`, {
        responseCodeErrors: {
            404:Errors.PostNotFound,
        }
    })
    return await r.json();
}


export async function remove_upvote(apiUrl: string, id: number) {
    let r = await request(apiUrl, "POST", `/post/${id}/upvote/remove`, {
        responseCodeErrors: {
            404:Errors.PostNotFound,
        }
    })
    return await r.json();
}


export async function add_downvote(apiUrl: string, id: number) {
    let r = await request(apiUrl, "POST", `/post/${id}/downvote/add`, {
        responseCodeErrors: {
            404:Errors.PostNotFound,
        }
    })
    return await r.json();
}


export async function remove_downvote(apiUrl: string, id: number) {
    let r = await request(apiUrl, "POST", `/post/${id}/downvote/remove`, {
        responseCodeErrors: {
            404:Errors.PostNotFound,
        }
    })
    return await r.json();
}
