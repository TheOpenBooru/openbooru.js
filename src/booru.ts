import * as Primatives from "./primatives";
import type * as Types from "./types";
import * as Errors from "./errors";

export default class OpenBooru{
    apiUrl:string
    token: string | null = null
    permissions: Types.Permissions|null = null
    
    constructor(url: string = "https://api.openbooru.org", token: string|null = null) {
        this.apiUrl = url
        this.token = token
    }

    async login(username: string, password: string): Promise<string> {
        return await Primatives.Account.login(username, password, { apiUrl: this.apiUrl, token:this.token})
    }

    async register(username: string, password: string): Promise<string> {
        return await Primatives.Account.register(username, password, { apiUrl: this.apiUrl, token:this.token})
    }

    async get_profile(): Promise<Types.Profile> {
        if (this.token === null) {
            throw new Errors.LoginFailure("Login Required to View Profile");
        } else {
            return await Primatives.Profile.profile({ apiUrl: this.apiUrl, token:this.token})
        }
    }
    
    
    async update_settings(settings:string): Promise<void> {
        if (this.token === null) {
            throw new Errors.LoginFailure("Login Required to Update Profile");
        } else {
            return await Primatives.Profile.updateSettings(settings, { apiUrl: this.apiUrl, token:this.token})
        }
    }

    async get_post(id: number): Promise<Types.Post> {
        return await Primatives.Post.get(id, { apiUrl: this.apiUrl, token:this.token})
    }

    async edit_post(id: number, source:string, rating:string, tags:Array<string>): Promise<void> {
        return await Primatives.Post.edit(id, source, rating, tags, { apiUrl: this.apiUrl, token:this.token});
    }

    async delete_post(id: number): Promise<void> {
        await Primatives.Post.Delete(id, { apiUrl: this.apiUrl, token:this.token})
    }

    async import_post(url: string): Promise<Array<Types.Post>> {
        return await Primatives.Posts.Import(url, { apiUrl: this.apiUrl, token:this.token})
    }
    
    async create_post(file: File): Promise<Types.Post> {
        return await Primatives.Posts.create(file, { apiUrl: this.apiUrl, token:this.token})
    }

    async search_posts(query: Types.PostQuery, index:number, limit:number): Promise<Array<Types.Post>> {
        return await Primatives.Posts.search(query, index, limit, { apiUrl: this.apiUrl, token:this.token})
    }

    async search_tags(query: Types.TagQuery): Promise<Array<Types.Tag>> {
        return await Primatives.Tags.search(query, { apiUrl: this.apiUrl, token:this.token})
    }

    async get_all_tags(): Promise<Array<Types.Tag>> {
        return await Primatives.Tags.all({ apiUrl: this.apiUrl, token:this.token})
    }
}