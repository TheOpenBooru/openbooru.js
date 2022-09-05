export declare type Media = {
    url: string;
    mimetype: string;
    height: number;
    width: number;
    type: string;
};
export declare type Image = {
    url: string;
    mimetype: string;
    height: number;
    width: number;
    type: string;
};
declare type Hashes = {
    md5s: Array<string>;
    sha256s: Array<string>;
    phash: Array<string>;
};
declare type PostEdit = {};
export declare type Post = {
    id: number;
    created_at: number;
    uploader: number;
    deleted: boolean;
    source: string;
    rating: string;
    full: Image;
    preview: Image | null;
    thumbnail: Image;
    media_type: string;
    hashes: Hashes;
    tags: Array<string>;
    comments: Array<number>;
    edits: Array<PostEdit>;
    upvotes: number;
    downvotes: number;
};
export declare class PostQuery {
    sort: string;
    descending: boolean;
    include_tags: Array<string>;
    exclude_tags: Array<string>;
    created_after: number | null;
    created_before: number | null;
    ids: Array<number> | null;
    md5: string | null;
    sha256: string | null;
}
export {};
