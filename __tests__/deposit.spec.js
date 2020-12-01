const Deposit = require("../src/deposit.js")

describe("getCredit", () => {
    test("it should return the amount credited to the account by the deposit", () => {
        deposit = new Deposit(500, 10)
        expect(deposit.getCredit()).toEqual(10)
    });
});

describe("getBalanceAfterTransaction", () => {
    test("When whole numbers are used, it should return the account balance plus the amount credited", () => {
        deposit = new Deposit(500, 10)
        expect(deposit.getBalanceAfterTransaction()).toEqual(510)
    });
    test("When decimals are used, it should return the account balance plus the amount credited", () => {
        deposit = new Deposit(49, 9.33)
        expect(deposit.getBalanceAfterTransaction()).toEqual(58.33)
    });
});