import { Profile } from "../../types";
import * as Errors from "../../errors";
import request from "../request";

/**
* Get the profile for the an account
*/
export async function profile(apiUrl: string, token: string): Promise<Profile> {
    let r = await request(apiUrl, "GET", "/profile", {
        token: token,
    })
    let profile = r.json()
    return profile;
}