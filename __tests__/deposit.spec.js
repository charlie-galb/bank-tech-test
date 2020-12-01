const Deposit = require("../src/deposit.js")

describe("Deposit", () => {

    describe("getCredit", () => {
        test("it should return the amount credited to the account by the deposit", () => {
            let deposit = new Deposit(500, 10)
            expect(deposit.getCredit()).toEqual(10)
        });
    });
    
    describe("getTransactionDate", () => {
        test("it should return the amount credited to the account by the deposit", () => {
            const realNow = Date.now
            global.Date.now = jest.fn(() => new Date('2019-04-07T10:20:30Z'))
            let deposit = new Deposit(500, 10)
            expect(deposit.getTransactionDate()).toEqual( "Sun Apr 07 2019 11:20:30 GMT+0100 (British Summer Time)")
            global.Date.now = realNow
        });
    });
    
    describe("getBalanceAfterTransaction", () => {
        test("When whole numbers are used, it should return the account balance plus the amount credited", () => {
            let deposit = new Deposit(500, 10)
            expect(deposit.getBalanceAfterTransaction()).toEqual(510)
        });
        test("When decimals are used, it should return the account balance plus the amount credited", () => {
            let deposit = new Deposit(65, 3.79)
            expect(deposit.getBalanceAfterTransaction()).toEqual(68.79)
        });
        test("When the initial balance is negative, it should return the account balance plus the amount credited", () => {
            let deposit = new Deposit(-10, 5)
            expect(deposit.getBalanceAfterTransaction()).toEqual(-5)
        });
    });
});