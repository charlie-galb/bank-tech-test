const Account = require("../src/account.js")

describe("Account", () => {

    describe("getCurrentBalance", () => {
        test("it returns the current balance of the account", () => {
            let account = new Account;
            expect(account.getCurrentBalance()).toEqual(0)
        })
    })

    describe("deposit", () => {
        test("it alters the currentBalance according to the amount credited", () => {
            let account = new Account;
            expect(account.getCurrentBalance()).toEqual(0)
            account.deposit(10)
            expect(account.getCurrentBalance()).toEqual(10)
        })
        test("it creates a new Deposit and pushes it to the transactionHistory array", () => {
            let account = new Account;
            const mockDepositMaker = jest.spyOn(account, '_makeNewDeposit');
            const mockDeposit = {}
            mockDepositMaker.mockReturnValue(mockDeposit)
            account.deposit(10)
            expect(mockDepositMaker).toHaveBeenCalledWith(0, 10)
            expect(account.getTransactionHistory().length).toEqual(1)
            expect(account.getTransactionHistory()[0]).toEqual(mockDeposit)
        })
    })
})