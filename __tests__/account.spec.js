const Account = require("../src/account.js")

describe("Account", () => {

    describe("getCurrentBalance", () => {
        test("it returns the current balance of the account", () => {
            let account = new Account;
            expect(account.getCurrentBalance()).toEqual(0)
        })
    })

    describe("makeDeposit", () => {
        test("it alters the currentBalance according to the amount credited", () => {
            let account = new Account;
            expect(account.getCurrentBalance()).toEqual(0)
            account.makeDeposit(10)
            expect(account.getCurrentBalance()).toEqual(10)
        })
    })
})