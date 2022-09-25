import type { Profile } from "../../types";
import * as Errors from "../../errors";
import request from "../request";
import { ApiData, DefaultApi, DefaultApiData} from "../interface";

/**
* Sets the profile's setting field to the selected string, cannot be larger than 4096 characters
*/
export async function updateSettings(
        settings: string, 
        { apiUrl = DefaultApi, token = null }: ApiData = DefaultApiData,
    ) {
    await request(apiUrl, "PUT", "/profile/settings", {
        body: settings,
        token: token,
        responseCodeErrors: {
            400: Errors.SettingsTooLarge,
        }
    })
}