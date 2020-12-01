const Deposit = require("./deposit");

class Account{

    constructor(){
        this.currentBalance = 0;
        this.transactionHistory = [];
    };

    getCurrentBalance(){
        return this.currentBalance;
    };

    getTransactionHistory(){
        return this.transactionHistory;
    }

    deposit(amount){
        let deposit = this._makeNewDeposit(this.currentBalance, amount);
       this._pushtransaction(deposit);
        this.currentBalance = this.currentBalance + amount;
    }

    _makeNewDeposit(){
        return new Deposit;
    }

    _pushtransaction(transaction){
        this.transactionHistory.push(transaction);
    }
};

module.exports = Account;