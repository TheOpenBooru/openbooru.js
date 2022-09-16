const { BSL } = require("../dist")

test("bsl: md5", async () => {
    let bsl = BSL.encode({ md5: "098f6bcd4621d373cade4e832627b4f6" })
    expect(bsl).toBe("md5:098f6bcd4621d373cade4e832627b4f6")
});

test("bsl: sha256", async () => {
    let bsl = BSL.encode({ sha256: "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08" })
    expect(bsl).toBe("sha256:9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08")
});

test("bsl: include_tags", async () => {
    let bsl = BSL.encode({ include_tags: ["test1", "test2"] })
    expect(bsl).toBe("test1 test2")
});
test("bsl: exclude_tags", async () => {
    let bsl = BSL.encode({ exclude_tags: ["test1", "test2"] })
    expect(bsl).toBe("-test1 -test2")
});
test("bsl: include_tags and exclude_tags", async () => {
    let bsl = BSL.encode({
        include_tags: ["test1"],
        exclude_tags: ["test2"],
    })
    expect(bsl).toBe("test1 -test2")
});

test("bsl: created_after", async () => {
    let bsl = BSL.encode({ created_after: 256 })
    expect(bsl).toBe("created_after:256")
});

test("bsl: created_before", async () => {
    let bsl = BSL.encode({ created_after: 256 })
    expect(bsl).toBe("created_after:256")
});

test("bsl: or", async () => {
    let bsl = BSL.encode({
        sort: "upvotes",
        descending: false,
    })
    expect(bsl).toBe("sort:upvotes order:asc")
});