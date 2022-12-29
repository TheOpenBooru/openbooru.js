import { BSL, Types } from "../src";

function expectBSLEncodeAndDecode(query: Types.PostQuery) {
    let encode = JSON.stringify

    let bsl = BSL.encode(query)
    let output_query = BSL.decode(bsl)
    
    expect(encode(query)).toMatch(encode(output_query))
}

describe("BSL", () => {
    test("encodes MD5", async () => {
        expectBSLEncodeAndDecode({md5: "098f6bcd4621d373cade4e832627b4f6"})
    });
    
    test("encodes sha256", async () => {
        expectBSLEncodeAndDecode({sha256: "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08"})
    });
    
    test("encodes include_tags", async () => {
        expectBSLEncodeAndDecode({ include_tags: ["test1", "test2"] })
    });
    
    test("encodes exclude_tags", async () => {
        expectBSLEncodeAndDecode({ exclude_tags: ["test1", "test2"] })
    });
    
    test("encodes include_tags and exclude_tags", async () => {
        expectBSLEncodeAndDecode({
            include_tags: ["test1"],
            exclude_tags: ["test2"],
        })
    });
    
    test("encodes created_after", async () => {
        expectBSLEncodeAndDecode({ created_after: 256 })
    });
    
    test("encodes created_before", async () => {
        expectBSLEncodeAndDecode({ created_before: 256 })
    });
    
    test("encodes order and sort", async () => {
        expectBSLEncodeAndDecode({
            sort: "upvotes",
            descending: false,
        })
    });
    
    test("encodes uploaders", async () => {
        expectBSLEncodeAndDecode({ uploaders: [0,1]})
    });
    
    test("encodes media_type", async () => {
        expectBSLEncodeAndDecode({
            media_types: ["animation", "image"]
        })
    });
})
