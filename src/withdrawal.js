class Withdrawal{

    constructor(balanceBeforeTransaction, amount){
        this.balanceBeforeTransaction = balanceBeforeTransaction;
        this.debit = amount;
        this.transactionDate = Date.now();
    }

    getDebit(){
        return this.debit;
    };

    getTransactionDate(){
        return this.transactionDate.toString();
    };
};

module.exports = Withdrawal;