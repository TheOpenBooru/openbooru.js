const { default: Openbooru } = require("../lib");

test('Foo', async () => {
    const booru = new Openbooru()
    let id = 115218841
    let post = await booru.PostGet(id)
    expect(post.id).toBe(id)
});