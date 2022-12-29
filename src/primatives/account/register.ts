import * as Errors from "../../errors";
import request from "../request";
import { ApiData, DefaultApi, DefaultApiData } from "../interface";



export default async function register(
        username: string,
        password: string,
    { apiUrl = DefaultApi, token = null, hcatpcha_response = null }: ApiData = DefaultApiData,
    ): Promise<string> {
    let r = await request(
        "POST",
        "/account/register", {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
        responseCodeErrors: {
            400: Errors.PasswordDoesntMeetRequirements,
            409: Errors.UserAlreadyExists,
        },
        apiUrl,
        token,
        hcatpcha_response,
    });

    let json = await r.json()
    return json.access_token
}
