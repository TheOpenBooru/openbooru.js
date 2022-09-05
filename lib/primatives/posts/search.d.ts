import { PostQuery, Post } from "../../types";
export declare function search(apiUrl: string, query: PostQuery, index?: number, limit?: number): Promise<Array<Post>>;
