const Account = require("../src/account.js")
const printStatement = require("../src/printStatement.js")

describe("Feature test", () => {
    test('Can create an account, make a deposit, and print out a statement', () => {
        account = new Account;
        expect(account.getCurrentBalance()).toEqual(0)
        account.deposit(9.50)
        expect(account.getCurrentBalance()).toEqual(9.50)
        account.withdraw(2.10)
        expect(account.getCurrentBalance()).toEqual(7.40)
        account.withdraw(0.40)
        expect(account.getCurrentBalance()).toEqual(7.00)
        account.deposit(9.50)
        expect(account.getCurrentBalance()).toEqual(16.50)
        console.log(account.getTransactionHistory())
        expect(printStatement(account.transactionHistory)).toEqual(
             "| date || credit || debit || balance\n03/12/2020 || 9.50 || || 16.50\n03/12/2020 || || 0.40 || 7.00\n03/12/2020 || || 2.10 || 7.40\n03/12/2020 || 9.50 || || 9.50\n"
             )
    })})