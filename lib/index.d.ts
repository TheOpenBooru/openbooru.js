import * as Types from "./types";
export * as Primatives from "./primatives";
export * as Types from "./types";
export default class OpenBooru {
    apiUrl: string;
    token: string | null;
    constructor(url?: string, token?: string);
    PostGet(id: number): Promise<Types.Post>;
    PostEdit(id: number, source: string, rating: string, tags: Array<string>): Promise<void>;
    PostDelete(id: number): Promise<void>;
    PostsImport(url: string): Promise<Array<Types.Post>>;
    PostsCreate(file: File): Promise<Types.Post>;
    PostsSearch(query: Types.PostQuery, index: number, limit: number): Promise<Array<Types.Post>>;
    TagsSearch(query: Types.TagQuery): Promise<Array<Types.Tag>>;
}
