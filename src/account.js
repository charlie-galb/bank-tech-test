class Account{

    constructor(){
        this.currentBalance = 0;
    };

    getCurrentBalance(){
        return this.currentBalance;
    };

    makeDeposit(amount){
        this.currentBalance = this.currentBalance + amount;
    }
};

module.exports = Account;