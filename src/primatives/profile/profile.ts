import type { Profile } from "../../types";
import * as Errors from "../../errors";
import request from "../request";
import { ApiData, DefaultApi, DefaultApiData} from "../interface";

/**
* Get the profile for the an account
*/
export async function profile(
        { apiUrl = DefaultApi, token = null }: ApiData = DefaultApiData,
    ): Promise<Profile> {
    let r = await request(apiUrl, "GET", "/profile", {
        token: token,
    })
    let profile = r.json()
    return profile;
}