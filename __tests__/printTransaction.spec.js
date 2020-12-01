const printTransaction = require("../src/printTransaction.js")
const depositObject = require("../__mocks__/deposit.js")

describe("printStatement", () => {
    it("prints bank statements", () => {
        expect(printTransaction(depositObject)).toEqual("04/07/2019 || 10.50 || || 10.50")
    })
})

