const Account = require("../src/account.js")

describe("Account", () => {

    const account = new Account;

    describe("getCurrentBalance", () => {
        test("it returns the current balance of the account", () => {
            expect(account.getCurrentBalance()).toEqual(0)
        })
    })

    describe("deposit", () => {
        test("it alters the currentBalance according to the amount credited", () => {
            account.deposit(10)
            expect(account.getCurrentBalance()).toEqual(10)
        })
        test("it raises an error if the amount is 0", () => {
            expect(() => {
                account.deposit(0);
            }).toThrow("Please enter a number larger than 0")
        })
        test("it raises an error if the amount is negative", () => {
            expect(() => {
                account.deposit(-5);
            }).toThrow("Please enter a number larger than 0")
        })
    })

    describe("withdrawal", () => {
        test("it alters the currentBalance according to the amount debited", () => {
            expect(account.getCurrentBalance()).toEqual(10)
            account.withdraw(5)
            expect(account.getCurrentBalance()).toEqual(5)
        })
        test("it raises an error if the amount is 0", () => {
            expect(() => {
                account.withdraw(0);
            }).toThrow("Please enter a number larger than 0")
        })
        test("it raises an error if the amount is negative", () => {
            expect(() => {
                account.withdraw(-10);
            }).toThrow("Please enter a number larger than 0")
        })
        test("it raises an error if the amount would take the currentBalance to below 0", () => {
            expect(() => {
                account.withdraw(100);
            }).toThrow("INSUFFICIENT FUNDS")
        })
    })
})