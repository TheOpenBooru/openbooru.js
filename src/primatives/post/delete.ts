import * as Errors from "../../errors";
import request from "../request";
import { ApiData, DefaultApi, DefaultApiData } from "../interface";

export async function Delete(
        post_id: number,
        { apiUrl = DefaultApi, token = null }: ApiData = DefaultApiData,
    ) {
    await request(apiUrl, "DELETE", `/post/${post_id}`, {
        token: token,
    })
}