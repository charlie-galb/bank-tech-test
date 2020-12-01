const Account = require("../src/account.js")

describe("Account", () => {

    describe("getCurrentBalance", () => {
        test("it returns the current balance of the account", () => {
            let account = new Account;
            expect(account.getCurrentBalance()).toEqual(0)
        })
    })
})