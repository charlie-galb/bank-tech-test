class Deposit{
    constructor(balanceBeforeTransaction, amount){
        this.balanceBeforeTransaction = balanceBeforeTransaction;
        this.amount = amount;
        this.balanceAfterTransaction = this.balanceBeforeTransaction + amount;
    };

    getCredit(){
        return this.amount;
    };

    getBalanceAfterTransaction(){
        return this.balanceAfterTransaction;
    };
};

module.exports = Deposit;