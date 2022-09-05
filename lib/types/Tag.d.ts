export declare type Tag = {
    name: string;
    created_at: number;
    namespace: string;
    count: number;
    siblings: Array<string>;
    parents: Array<string>;
};
export declare type TagQuery = {
    name_like?: string;
    namespace?: string;
    count_gt?: number;
    limit?: number;
};
