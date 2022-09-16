import { Profile } from "../../types";
import * as Errors from "../../errors";
import request from "../request";

/**
* Sets the profile's setting field to the selected string, cannot be larger than 4096 characters
*/
export async function updateSettings(apiUrl: string, token: string, settings:string) {
    await request(apiUrl, "PUT", "/profile/settings", {
        body: settings,
        token: token,
        responseCodeErrors: {
            400: Errors.SettingsTooLarge,
        }
    })
}