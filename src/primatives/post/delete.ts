import * as Errors from "../../errors";
import request from "../request";
import { ApiData, DefaultApi, DefaultApiData } from "../interface";

export async function Delete(
        post_id: number|string,
        { apiUrl = DefaultApi, token = null, hcatpcha_response=null }: ApiData = DefaultApiData,
    ) {
    await request("DELETE", `/post/${post_id}`, {
        apiUrl,
        token,
        hcatpcha_response,
    })
}