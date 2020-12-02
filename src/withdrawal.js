class Withdrawal{

    constructor(balanceBeforeTransaction, amount){
        this.balanceBeforeTransaction = balanceBeforeTransaction;
        this.debit = amount;
        this.transactionDate = Date.now();
        this.balanceAfterTransaction = this.balanceBeforeTransaction - amount;
    }

    getDebit(){
        return this.debit;
    }

    getTransactionDate(){
        return new Date(this.transactionDate).toLocaleString().split(',')[0];
    }

    getBalanceAfterTransaction(){
        return this.balanceAfterTransaction;
    }
}

module.exports = Withdrawal;