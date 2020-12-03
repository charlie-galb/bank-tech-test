const printStatement = require("../src/printStatement.js")
const depositObject = require("../__mocks__/deposit.js")
const withdrawalObject = require("../__mocks__/withdrawal.js")

const withdrawalMock = {
    getDebit: () => 10.5,
    getBalanceAfterTransaction: () => 0,
  getTransactionDate: () => "04/07/2019"
}
const depositMock = {
    getCredit: () => 10.5,
    getBalanceAfterTransaction: () => 10.5,
  getTransactionDate: () => "04/07/2019"
}
const mockTransactionHistory = [depositMock, withdrawalMock]

describe("printStatement", () => {
    it("prints bank statements", () => {
        expect(printStatement(mockTransactionHistory)).toEqual(
            "| date || credit || debit || balance\n04/07/2019 || || 10.50 || 0.00\n04/07/2019 || 10.50 || || 10.50\n")
    })
})