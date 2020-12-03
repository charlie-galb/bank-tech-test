const Transaction = require("../src/transaction.js")

describe('Transaction', () => {
    describe("getTransactionDate", () => {
        test("it should return the amount credited to the account by the deposit", () => {
            const realNow = Date.now
            global.Date.now = jest.fn(() => new Date(1606903524976))
            let transaction = new Transaction(500, 10)
            expect(transaction.getTransactionDate()).toEqual('02/12/2020')
            global.Date.now = realNow
        });
    });
});