export type Profile = {
    id: string;
    created_at: bigint;
    username: string;
    level: string;
    posts: Array<bigint>;
    comments: Array<bigint>;
    email: string;
    settings: string;
    upvotes: Array<bigint>;
    downvotes: Array<bigint>;
}

export type User = {
    id: number;
    created_at: number;
    username: string;
    level: string;
    posts: number[];
    comments: number[];
    email: string;
    settings: string;
    upvotes: number;
    downvotes: number;
}
