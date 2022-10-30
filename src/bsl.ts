// @ts-nocheck
import type { Post, PostQuery } from "./types";

export function encode(query: PostQuery): string {
    let tags = [];
    
    if (query.sort !== undefined) {
        tags.push("sort:" + query.sort);
    }
    if (query.descending !== undefined) {
        tags.push(query.descending ? "order:dsc" : "order:asc");
    }

    if (query.include_tags !== undefined) {
        query.include_tags.forEach((tag) => tags.push(tag));
    }
    if (query.exclude_tags !== undefined) {
        query.exclude_tags.forEach((tag) => tags.push("-" + tag));
    }
    

    if (query.created_after !== undefined) {
        tags.push("after:" + query.created_after.toString());
    }
    if (query.created_before !== undefined) {
        tags.push("before:" + query.created_before.toString());
    }

    if (query.md5 !== undefined) {
        tags.push("md5:" + query.md5);
    }
    if (query.sha256 !== undefined) {
        tags.push("sha256:" + query.sha256);
    }
    if (query.source !== undefined) {
        tags.push("source:" + query.source);
    }

    if (query.ids !== undefined) {
        tags.push("ids:" + query.ids.join(","));
    }
    if (query.ratings !== undefined) {
        tags.push("ratings:" + query.ratings.join(","));
    }
    if (query.uploaders !== undefined) {
        tags.push("uploaders:" + query.uploaders.join(","));
    }
    if (query.media_types !== undefined) {
        tags.push("type:" + query.media_types.join(","));
    }

    let output = tags.join(" ");
    return output;
}

export function decode(bsl: string): PostQuery {
    const query: PostQuery = {};

    bsl += " " // Fix for search for end of section, instead finds end of string
    let tags = bsl.split(" ").filter((tag) => tag !== "")

    function extractValue(prefix: string, callback: ((value: string) => Any)|null = null): string {
        if (!bsl.includes(prefix)) return undefined

        let start = bsl.indexOf(prefix) + prefix.length;
        let end = bsl.indexOf(" ", start);
        let value = bsl.slice(start, end);
        if (callback) {
            value = callback(value)
        }
        return value
    }

    query.sort = extractValue("sort:")
    query.descending = extractValue("order:", v => v  === "dsc")

    query.created_after = extractValue("after:", Number)
    query.created_before = extractValue("before:", Number)

    query.md5 = extractValue("md5:")
    query.sha256 = extractValue("sha256:")
    query.source = extractValue("source:")

    query.uploaders = extractValue("uploaders:", v => v.split(",").map(Number))
    query.ratings = extractValue("ratings:", v => v.split(",").map(Number))
    query.media_types = extractValue("types:", v => v.split(","))
    query.ratings = extractValue("ratings:", v => v.split(","))

    query.include_tags =  tags.filter((tag) => !tag.includes(":") && !tag.includes("-"));
    query.exclude_tags = tags
        .filter((tag) => !tag.includes(":") && tag.includes("-"))
        .map((tag) => tag.slice(1));
    
    for (const key in query) {
        if (query[key] === undefined || query[key].length === 0) {
            delete query[key]
        }
    }
    return query;
}

export default { encode, decode };
