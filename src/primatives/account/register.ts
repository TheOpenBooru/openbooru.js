import * as Errors from "../../errors";
import request from "../request";


export default async function register(apiUrl: string, username: string, password: string): Promise<string> {
    let r = await request("/account/register", {
        apiUrl: apiUrl,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
        responseCodeErrors: {
            400: Errors.PasswordDoesntMeetRequirements,
            409: Errors.UserAlreadyExists,
        },
    });

    let json = await r.json()
    return json.access_token
}
