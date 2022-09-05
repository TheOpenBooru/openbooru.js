/**
* Sets the profile's setting field to the selected string, cannot be larger than 4096 characters
*/
export declare function updateSettings(apiUrl: string, settings: string, token: string): Promise<void>;
