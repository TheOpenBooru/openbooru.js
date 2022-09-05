import { Account, Post, Posts, Profile, Tags } from "./primatives";
import * as Types from "./types";

export * as Primatives from "./primatives";
export * as Types from "./types";
export default class OpenBooru{
    apiUrl:string
    token:string|null
    constructor(url:string = "https://api.openbooru.org", token:string = null) {
        this.apiUrl = url
        this.token = token
    }

    async PostGet(id: number): Promise<Types.Post> {
        return await Post.get(this.apiUrl, id)
    }

    async PostEdit(id: number, source:string, rating:string, tags:Array<string>): Promise<void> {
        return await Post.edit(this.apiUrl, id, source, rating, tags);
    }

    async PostDelete(id: number): Promise<void> {
        await Post.Delete(this.apiUrl, id, this.token)
    }

    async PostsImport(url: string): Promise<Array<Types.Post>> {
        return await Posts.Import(this.apiUrl, url, this.token)
    }
    
    async PostsCreate(file: File): Promise<Types.Post> {
        return await Posts.create(this.apiUrl, file, this.token)
    }

    async PostsSearch(query: Types.PostQuery, index:number, limit:number): Promise<Array<Types.Post>> {
        return await Posts.search(this.apiUrl, query, index, limit)
    }

    async TagsSearch(query: Types.TagQuery): Promise<Array<Types.Tag>> {
        return await Tags.search(this.apiUrl, query)
    }
}