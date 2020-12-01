class Deposit{
    constructor(balanceBeforeTransaction, amount){
        this.balanceBeforeTransaction = balanceBeforeTransaction;
        this.amount = amount;
        this.transactionDate = Date.now()
        this.balanceAfterTransaction = this.balanceBeforeTransaction + amount;
    };

    getCredit(){
        return this.amount.toFixed(2);
    };

    getBalanceAfterTransaction(){
        return this.balanceAfterTransaction.toFixed(2);
    };

    getTransactionDate(){
        return this.transactionDate.toString();
    }
};

module.exports = Deposit;