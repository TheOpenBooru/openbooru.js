import { Account } from "../src";


test("primatives: Post Get", async () => {
    let token = await Account.register("example_user", "3b7890v53948v:", {
        apiUrl: "http://localhost:8443",
        hcatpcha_response: "10000000-aaaa-bbbb-cccc-000000000001"
    })
    expect(token).toBeTruthy();
});
