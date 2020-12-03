const { TestScheduler } = require("jest")

const Withdrawal = require("../src/withdrawal.js")

describe("Withdrawal", () => {

    describe("getDebit", () => {
        test("It should return the amount to be debited from the account", () => {
            let withdrawal = new Withdrawal(500, 10)
            expect(withdrawal.getDebit()).toEqual(10)
        });
    });

    describe("getBalanceAfterTransaction", () => {
        test("When whole numbers are used, it should return the account balance minus the amount debited", () => {
            let withdrawal = new Withdrawal(500, 10)
            expect(withdrawal.getBalanceAfterTransaction()).toEqual(490)
        });
        test("When decimals are used, it should return the account balance minus the amount debited", () => {
            let withdrawal = new Withdrawal(65, 3.79)
            expect(withdrawal.getBalanceAfterTransaction()).toEqual(61.21)
        });
        test("When the initial balance is negative, it should return the account balance minus the amount debited", () => {
            let withdrawal = new Withdrawal(-10, 5)
            expect(withdrawal.getBalanceAfterTransaction()).toEqual(-15)
        });
    });
})