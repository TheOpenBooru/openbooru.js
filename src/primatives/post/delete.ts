import * as Errors from "../../errors";
import request from "../request";

/**
 * Delete's the current selected Post
 * @param apiUrl 
 * @param post_id 
 * @param token 
 */
export async function Delete(apiUrl: string, post_id: number, token: string = null) {
    await request(`/post/${post_id}`, {
        method: "DELETE",
        token: token,
        apiUrl: apiUrl,
    })
}