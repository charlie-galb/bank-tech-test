const Deposit = require("../src/deposit.js")

describe("credit", () => {
    test("it should return the amount credited to the account by the deposit", () => {
        deposit = new Deposit(500, 10)
        expect(deposit.getCredit()).toEqual(10)
    });
});