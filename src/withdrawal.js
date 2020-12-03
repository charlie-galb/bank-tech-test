const Transaction = require("./transaction.js")

class Withdrawal extends Transaction{
    constructor(balanceBeforeTransaction, amount){
        super(balanceBeforeTransaction, amount);
        this.balanceAfterTransaction = this.balanceBeforeTransaction - amount;
    }
    
    getDebit(){
        return this.amount;
    }
}

module.exports = Withdrawal;