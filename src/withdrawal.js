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
        return this.transactionDate.toString();
    }

    getBalanceAfterTransaction(){
        return this.balanceAfterTransaction;
    }
}

module.exports = Withdrawal;