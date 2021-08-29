const index = require("./index")
// @ponicode
describe("index.handler", () => {
    test("0", async () => {
        await index.handler(false, "DELETE FROM Projects WHERE pid = %s", "callback detected, not supported yet")
    })

    test("1", async () => {
        await index.handler(true, "UNLOCK TABLES;", "callback detected, not supported yet")
    })

    test("2", async () => {
        await index.handler(true, "DELETE FROM Projects WHERE pid = %s", "callback detected, not supported yet")
    })

    test("3", async () => {
        await index.handler(true, "DROP TABLE tmp;", "callback detected, not supported yet")
    })

    test("4", async () => {
        await index.handler(false, "UNLOCK TABLES;", "callback detected, not supported yet")
    })

    test("5", async () => {
        await index.handler(undefined, "", undefined)
    })
})
