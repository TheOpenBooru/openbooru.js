import * as Errors from "../../errors";
import request from "../request";


export default async function login(apiUrl: string, username: string, password: string): Promise<string> {
    let r = await request(apiUrl, "POST", "/account/login", {
        body: `username=${username}&password=${password}`,
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        responseCodeErrors: {
            401: Errors.LoginFailure,
            406: Errors.PasswordReset,
        }
    })
    let json = await r.json();
    let token = json["access_token"];
    return token;
}
