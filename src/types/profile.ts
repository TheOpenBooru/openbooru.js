
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
