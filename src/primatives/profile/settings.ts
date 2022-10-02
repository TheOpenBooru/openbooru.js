import type { Profile } from "../../types";
import * as Errors from "../../errors";
import request from "../request";
import { ApiData, DefaultApi, DefaultApiData} from "../interface";

/**
* Sets the profile's setting field to the selected string, cannot be larger than 4096 characters
*/
export async function updateSettings(
        settings: string, 
        { apiUrl = DefaultApi, token = null, hcatpcha_response=null }: ApiData = DefaultApiData,
    ) {
    await request("PUT", "/profile/settings", {
        body: settings,
        responseCodeErrors: {
            400: Errors.SettingsTooLarge,
        },
        apiUrl,
        token,
        hcatpcha_response
    })
}