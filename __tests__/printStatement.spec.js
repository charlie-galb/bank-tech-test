const printStatement = require("../src/printStatement.js")
const depositObject = require("../__mocks__/deposit.js")
const withdrawalObject = require("../__mocks__/withdrawal.js")

const transactionArray = [depositObject, withdrawalObject]

describe("printStatement", () => {
    it("prints bank statements", () => {
        expect(printStatement(transactionArray)).toEqual(
            "| date || credit || debit || balance\n04/07/2019 || 10.50 || || 10.50\n04/07/2019 || || 10.50 || 0.00\n")
    })
})