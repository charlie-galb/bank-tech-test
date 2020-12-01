const { TestScheduler } = require("jest")

const Withdrawal = require("../src/withdrawal.js")

describe("Withdrawal", () => {

    describe("getDebit", () => {
        test("It should return the amount to be debited from the account", () => {
            let withdrawal = new Withdrawal(500, 10)
            expect(withdrawal.getDebit()).toEqual(10)
        });
    });

    describe("getTransactionDate", () => {
        test("it should return the amount credited to the account by the deposit", () => {
            const realNow = Date.now
            global.Date.now = jest.fn(() => new Date('2019-04-07T10:20:30Z'))
            let withdrawal = new Withdrawal(6, 3)
            expect(withdrawal.getTransactionDate()).toEqual( "Sun Apr 07 2019 11:20:30 GMT+0100 (British Summer Time)")
            global.Date.now = realNow
        });
    });
})