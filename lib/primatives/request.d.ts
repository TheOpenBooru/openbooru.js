export default function request(url_suffix: string, { method, body, headers, params, apiUrl, token, responseCodeErrors, }: {
    method?: string;
    body?: any;
    headers?: {};
    params?: {};
    apiUrl?: string;
    token?: any;
    responseCodeErrors?: {};
}): Promise<Response>;
