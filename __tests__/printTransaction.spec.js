const printTransaction = require("../src/printTransaction.js")
const depositObject = require("../__mocks__/deposit.js")
const withdrawalObject = require("../__mocks__/withdrawal.js")


describe("printTransaction", () => {

    it("prints an individual deposit", () => {
        console.log(printTransaction(depositObject))
        expect(printTransaction(depositObject)).toMatch("04/07/2019 || 10.50 || || 10.50")
    });

    it("prints an individual withdrawal", () => {
        expect(printTransaction(withdrawalObject)).toMatch("04/07/2019 || || 10.50 || 0.00")
    });
})