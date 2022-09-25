// @ts-nocheck
import type { Post, PostQuery } from "./types";

export function encode(query: PostQuery): string {
    let tags = [];
    
    if (query.include_tags !== undefined) {
        query.include_tags.forEach((tag) => tags.push(tag));
    }
    if (query.exclude_tags !== undefined) {
        query.exclude_tags.forEach((tag) => tags.push("-" + tag));
    }
    
    if (query.sort !== undefined) {
        tags.push("sort:" + query.sort);
    }
    if (query.descending !== undefined) {
        tags.push(query.descending ? "order:dsc" : "order:asc");
    }

    if (query.created_after !== undefined) {
        tags.push("created_after:" + query.created_after.toString());
    }
    if (query.created_before !== undefined) {
        tags.push("created_before:" + query.created_before.toString());
    }

    if (query.md5 !== undefined) {
        tags.push("md5:" + query.md5);
    }
    if (query.sha256 !== undefined) {
        tags.push("sha256:" + query.sha256);
    }

    let output = tags.join(" ");
    return output;
}

export function decode(bsl: string): PostQuery {
    const query: PostQuery = {};

    bsl += " " // Fix for search for end of section, instead finds end of string
    let tags = bsl.split(" ").filter((tag) => tag !== "")
    

    function setValue(prefix: string, key:string, mutateFunc:Function|null = null): string {
        if (!bsl.includes(prefix)) return ""

        let start = bsl.indexOf(prefix) + prefix.length;
        let end = bsl.indexOf(" ", start);
        let value = bsl.slice(start, end);
        
        if (mutateFunc) value = mutateFunc(value);
        query[key] = value
    }

    setValue("created_after:", "created_after", Number)
    setValue("created_before:", "created_before", Number)
    setValue("sort:", "sort", String)
    setValue("md5:", "md5", String)
    setValue("sha256:", "sha256", String)
    setValue("order:", "descending", (v) => v === "dsc")
    
    query.include_tags =  tags.filter((tag) => !tag.includes(":") && !tag.includes("-"));
    query.exclude_tags = tags
        .filter((tag) => !tag.includes(":") && tag.includes("-"))
        .map((tag) => tag.slice(1));
    return query;
}

export default { encode, decode };
