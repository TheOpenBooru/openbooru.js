import { Profile } from "../../types";
import * as Errors from "../../errors";
import request from "../request";

/**
* Sets the profile's setting field to the selected string, cannot be larger than 4096 characters
*/
export async function updateSettings(apiUrl: string, settings:string, token: string) {
    await request("/profile/settings", {
        apiUrl: apiUrl,
        method: "PUT",
        body: settings,
        token: token,
        responseCodeErrors: {
            400: Errors.SettingsTooLarge,
        }
    })
}