class Deposit{
    constructor(balanceBeforeTransaction, amount){
        this.balanceBeforeTransaction = balanceBeforeTransaction;
        this.amount = amount;
        this.transactionDate = Date.now()
        this.balanceAfterTransaction = this.balanceBeforeTransaction + amount;
    }

    getCredit(){
        return this.amount;
    }

    getBalanceAfterTransaction(){
        return this.balanceAfterTransaction;
    }

    getTransactionDate(){
        return new Date(this.transactionDate).toLocaleString().split(',')[0];
    }
}

module.exports = Deposit;