class Withdrawal{

    constructor(balanceBeforeTransaction, amount){
        this.balanceBeforeTransaction = balanceBeforeTransaction;
        this.debit = amount;
    }

    getDebit(){
        return this.debit;
    }
}

module.exports = Withdrawal;