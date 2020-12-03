const Transaction = require("./transaction.js")
class Deposit extends Transaction{
    constructor(balanceBeforeTransaction, amount){
        super(balanceBeforeTransaction, amount);
        this.balanceAfterTransaction = this.balanceBeforeTransaction + amount;
    }

    getCredit(){
        return this.amount;
    }
}

module.exports = Deposit;