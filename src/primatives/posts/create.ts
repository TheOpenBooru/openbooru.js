import * as Errors from "../../errors";
import reqeust from "../request";
import { Post } from "../../types";
import request from "../request";


export async function create(apiUrl:string, file: File, token: String): Promise<Post> {
    let form = new FormData();
    form.append("image", file);
    let r = await request("/posts/create", {
        apiUrl: apiUrl,
        method: "POST",
        body: form,
        token: token,
        responseCodeErrors: {
            400: Errors.PostCreationFailure,
            409: Errors.PostAlreadyExists,
        }
    })

    let post = await r.json();
    return post
}
