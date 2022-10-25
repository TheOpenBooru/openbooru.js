export type Profile = {
    id: string;
    created_at: number;
    username: string;
    level: string;
    posts: Array<number>;
    comments: Array<number>;
    email: string;
    settings: string;
    upvotes: Array<number>;
    downvotes: Array<number>;
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
