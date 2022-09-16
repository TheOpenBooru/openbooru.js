import * as Errors from "../../errors";
import { Permissions } from "../../types";
import request from "../request";


export default async function permissions(apiUrl: string, token: string|null = null): Promise<Permissions> {
    let r = await request(apiUrl, "GET", "/account/permissions", {
        token: token,
        responseCodeErrors: {
            401: Errors.LoginFailure,
        }
    })
    let data = await r.json();
    return data;
}
