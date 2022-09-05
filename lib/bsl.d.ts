import { PostQuery } from "./types";
export declare function encode(query: PostQuery): string;
export declare function decode(bsl: string): PostQuery;
declare const _default: {
    encode: typeof encode;
    decode: typeof decode;
};
export default _default;
