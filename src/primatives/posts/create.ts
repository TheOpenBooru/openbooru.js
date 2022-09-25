import * as Errors from "../../errors";
import { ApiData, DefaultApi, DefaultApiData} from "../interface";
import type { Post } from "../../types";
import request from "../request";


export async function create(
        file: File,
        { apiUrl = DefaultApi, token = null }: ApiData = DefaultApiData,
    ): Promise<Post> {
    let form = new FormData();
    form.append("image", file);
    let r = await request(apiUrl, "POST", "/posts/create", {
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
