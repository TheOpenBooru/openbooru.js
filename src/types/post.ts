export type Rating = "unrated" | "safe" | "sensitive" | "mature" | "explicit";
export type Sort = "id" | "created_at" | "upvotes" | "downvotes";
export type MediaType = "video" | "animation" | "image";


export type Media = {
    url: string;
    mimetype: string;
    height: number;
    width: number;
    type: MediaType;
}


export type Image = {
    url: string;
    mimetype: string;
    height: number;
    width: number;
    type: MediaType;
}


export type Animation = {
    url: string;
    mimetype: string;
    height: number;
    width: number;
    type: MediaType;
    duration: number;
    frame_count: number;
}


export type Video = {
    url: string;
    mimetype: string;
    height: number;
    width: number;
    type: MediaType;
    has_sound: boolean;
    duration: number;
    fps: string;
}


export type Hashes = {
    md5s: string[];
    sha256s: string[];
    phashes: string[];
}


export type PostEdit = {
    post_id: number;
    editter_id: number;
    created_at: number;

    old_tags: string[];
    new_tags: string[];

    old_source: string;
    new_source: string;

    old_rating: Rating;
    new_rating: Rating;
}


export type Post = { 
    id: number;
    created_at: number;
    uploader: number;
    deleted: boolean;
    source: string;
    rating: Rating;
    media_type: string;

    hashes: Hashes;
    tags: string[];
    comments: number[];
    edits: PostEdit[];

    full: Image;
    preview: Image|null;
    thumbnail: Image;

    upvotes: number;
    downvotes: number;
};


export type PostQuery = {
    sort?: Sort;
    descending?:boolean;

    include_tags?: string[];
    exclude_tags?: string[];

    created_after?: number|null;
    created_before?: number|null;

    ids?: number[]|null;
    md5?: string|null;
    sha256?: string|null;
}
