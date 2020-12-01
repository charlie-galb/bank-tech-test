const { TestScheduler } = require("jest")

const Withdrawal = require("../src/withdrawal.js")

describe("Withdrawal", () => {

    describe("getDebit", () => {
        test("It should return the amount to be debited from the account", () => {
            let withdrawal = new Withdrawal(500, 10)
            expect(withdrawal.getDebit()).toEqual(10)
        });
    });
})