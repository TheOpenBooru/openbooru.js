import * as Errors from "../../errors";
import { ApiData, DefaultApi, DefaultApiData} from "../interface";
import type { Post } from "../../types";
import request from "../request";


export async function create(
        file: File,
        { apiUrl = DefaultApi, token = null, hcatpcha_response=null }: ApiData = DefaultApiData,
    ): Promise<Post> {
    let form = new FormData();
    form.append("image", file);
    let r = await request("POST", "/posts/create", {
        body: form,
        responseCodeErrors: {
            400: Errors.PostCreationFailure,
            409: Errors.PostAlreadyExists,
        },
        apiUrl,
        token: token,
    })

    let post = await r.json();
    return post
}
