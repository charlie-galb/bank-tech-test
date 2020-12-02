const Account = require("../src/account.js")

describe("Account", () => {

    const account = new Account;

    const mockDepositMaker = jest.spyOn(account, '_makeNewDeposit');
    const mockDeposit = {};
    mockDepositMaker.mockReturnValue(mockDeposit);

    const mockWithdrawalMaker = jest.spyOn(account, '_makeNewWithdrawal');
    const mockWithdrawal = {};
    mockWithdrawalMaker.mockReturnValue(mockWithdrawal);

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
        test("it creates a new Deposit and pushes it to the transactionHistory array", () => {
            account.deposit(10)
            expect(mockDepositMaker).toHaveBeenCalledWith(10, 10)
            expect(account.getTransactionHistory().length).toEqual(2)
            expect(account.getTransactionHistory()[0]).toEqual(mockDeposit)
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
            expect(account.getCurrentBalance()).toEqual(20)
            account.withdraw(10)
            expect(account.getCurrentBalance()).toEqual(10)
        })
        test("it creates a new Withdrawal and pushes it to the transactionHistory array", () => {
            account.withdraw(10)
            expect(mockWithdrawalMaker).toHaveBeenCalledWith(10, 10)
            expect(account.getTransactionHistory().length).toEqual(4)
            expect(account.getTransactionHistory()[3]).toEqual(mockWithdrawal)
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