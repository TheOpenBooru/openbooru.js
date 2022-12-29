import { Post } from "../src";


test("primatives: Post Get", async () => {
    let post = await Post.get(3610594416, {
        apiUrl: "http://localhost:8443"
    })
    expect(post.id).toBe(3610594416)
    expect(post.sources).toBe(["https://twitter.com/Giraffaloops/status/1537533973269725186"])
});
