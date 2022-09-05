import * as Errors from "../../errors";
import { Permissions } from "../../types";
import request from "../request";


export default async function permissions(apiUrl: string, token: string = null): Promise<Permissions> {
    let r = await request("/account/login", {
        apiUrl: apiUrl,
        method: "GET",
        responseCodeErrors: {
            401: Errors.LoginFailure,
        }
    })
    let data = await r.json();
    return data;
}
