export const DefaultApi = "https://api.openbooru.org";

export interface ApiData {
    apiUrl?: string;
    token?: string | null;
    hcatpcha_response?: string | null;
}

export const DefaultApiData: ApiData = {
    apiUrl: DefaultApi,
    token: null,
    hcatpcha_response: null,
}
