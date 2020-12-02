class Account{

    constructor(){
        this.currentBalance = 0;
        this.transactionHistory = [];
    }

    getCurrentBalance(){
        return this.currentBalance;
    }

    getTransactionHistory(){
        return this.transactionHistory;
    }

    deposit(amount){
        this._checkAmountValidity(amount);
        let deposit = this._makeNewDeposit(this.currentBalance, amount);
        this._pushtransaction(deposit);
        this.currentBalance = this.currentBalance + amount;
    }

    withdraw(amount){
        this._checkAmountValidity(amount);
        this._checkIfSufficientFunds(amount);
        let withdrawal = this._makeNewWithdrawal(this.currentBalance, amount);
        this._pushtransaction(withdrawal);
        this.currentBalance = this.currentBalance - amount;
    }

    _makeNewDeposit(currentBalance, amount){
        return new Deposit(currentBalance, amount);
    }

    _makeNewWithdrawal(){
        return new Withdrawal;
    }

    _pushtransaction(transaction){
        this.transactionHistory.push(transaction);
    }

    _checkAmountValidity(amount){
        if (amount <= 0) {throw "Please enter a number larger than 0"};
    }

    _checkIfSufficientFunds(amount){
        if (this.currentBalance - amount < 0) { throw "INSUFFICIENT FUNDS" }
    }
}

module.exports = Account;