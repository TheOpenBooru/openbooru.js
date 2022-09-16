import * as Errors from "../../errors";
import request from "../request";

/**
 * Delete's the current selected Post
 * @param apiUrl 
 * @param post_id 
 * @param token 
 */
export async function Delete(apiUrl: string, token: string|null, post_id: number) {
    await request(apiUrl, "DELETE", `/post/${post_id}`, {
        token: token,
    })
}