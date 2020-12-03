class Transaction{
    constructor(balanceBeforeTransaction, amount){
        this.balanceBeforeTransaction = balanceBeforeTransaction;
        this.amount = amount;
        this.transactionDate = Date.now()
        this.balanceAfterTransaction;
    }

    getBalanceAfterTransaction(){
        return this.balanceAfterTransaction;
    }

    getTransactionDate(){
        return new Date(this.transactionDate).toLocaleString().split(',')[0];
    }
}

module.exports = Transaction;