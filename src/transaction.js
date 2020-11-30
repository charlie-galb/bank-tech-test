class Transaction{
    constructor(type, balanceBeforeTransaction, amount){
        this.type = type;
        this.balanceBeforeTransaction = balanceBeforeTransaction;
        this.amount = amount;
    }

    getCredit(){
        if (this.type = "deposit") return this.amount;
    }
}

module.exports = Transaction;