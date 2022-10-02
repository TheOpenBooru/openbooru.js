import * as Errors from "../../errors";
import type { Permissions } from "../../types";
import request from "../request";
import { ApiData, DefaultApi, DefaultApiData} from "../interface";


export default async function permissions(
        { apiUrl=DefaultApi, token=null }: ApiData = DefaultApiData,
    ): Promise<Permissions> {
    let r = await request("GET", "/account/permissions", {
        apiUrl,
        token,
        responseCodeErrors: {
            401: Errors.LoginFailure,
        }
    })
    let data = await r.json();
    return data;
}
