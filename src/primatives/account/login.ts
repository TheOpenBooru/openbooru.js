import * as Errors from "../../errors";
import request from "../request";
import { ApiData, DefaultApi, DefaultApiData} from "../interface";


export default async function login(
        username: string,
        password: string,
        { apiUrl = DefaultApi, token = null }: ApiData = DefaultApiData,
    ): Promise<string> {
    let r = await request(apiUrl, "POST", "/account/login", {
        body: `username=${username}&password=${password}`,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        responseCodeErrors: {
            401: Errors.LoginFailure,
            406: Errors.PasswordReset,
        }
    })
    let json = await r.json();
    let access_token = json["access_token"];
    return access_token;
}
