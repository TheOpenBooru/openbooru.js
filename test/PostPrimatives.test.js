const { Post } = require("../dist")


test("primatives: Post Get", async () => {
    let post = await Post.get(3610594416)
    expect(post.id).toBe(3610594416)
    expect(post.source).toBe("https://twitter.com/Giraffaloops/status/1537533973269725186")
});
