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
        return this.transactionDate.toString();
    }
}

module.exports = Deposit;