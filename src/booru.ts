import * as Primatives from "./primatives";
import * as Types from "./types";
import * as Errors from "./errors";

export default class OpenBooru{
    apiUrl:string
    token: string | null = null
    permissions: Types.Permissions|null = null
    
    constructor(url:string = "https://api.openbooru.org") {
        this.apiUrl = url
    }

    async updateToken(token: string | null) {
        
    }

    async login(username: string, password: string): Promise<string> {
        return await Primatives.Account.login(this.apiUrl, username, password)
    }

    async register(username: string, password: string): Promise<string> {
        return await Primatives.Account.register(this.apiUrl, username, password)
    }


    async get_profile(): Promise<Types.Profile> {
        if (this.token === null) {
            throw new Errors.LoginFailure("Login Required to View Profile");
        } else {
            return await Primatives.Profile.profile(this.apiUrl, this.token)
        }
    }
    
    
    async update_settings(settings:string): Promise<void> {
        if (this.token === null) {
            throw new Errors.LoginFailure("Login Required to Update Profile");
        } else {
            return await Primatives.Profile.updateSettings(this.apiUrl, this.token, settings)
        }
    }

    async get_post(id: number): Promise<Types.Post> {
        return await Primatives.Post.get(this.apiUrl, this.token, id)
    }

    async edit_post(id: number, source:string, rating:string, tags:Array<string>): Promise<void> {
        return await Primatives.Post.edit(this.apiUrl, this.token, id, source, rating, tags);
    }

    async delete_post(id: number): Promise<void> {
        await Primatives.Post.Delete(this.apiUrl, this.token, id)
    }

    async import_post(url: string): Promise<Array<Types.Post>> {
        return await Primatives.Posts.Import(this.apiUrl, this.token, url)
    }
    
    async create_post(file: File): Promise<Types.Post> {
        return await Primatives.Posts.create(this.apiUrl, this.token, file)
    }

    async search_posts(query: Types.PostQuery, index:number, limit:number): Promise<Array<Types.Post>> {
        return await Primatives.Posts.search(this.apiUrl, this.token, query, index, limit)
    }

    async search_tags(query: Types.TagQuery): Promise<Array<Types.Tag>> {
        return await Primatives.Tags.search(this.apiUrl, this.token, query)
    }

    async get_all_tags(): Promise<Array<Types.Tag>> {
        return await Primatives.Tags.all(this.apiUrl, this.token)
    }
}