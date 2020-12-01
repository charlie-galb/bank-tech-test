const withdrawalObject = {

}

function getDebit(){
    return 10.50;
};

function getBalanceAfterTransaction(){
    return 0.00;
};

function getTransactionDate(){
    return "04/07/2019";
}

withdrawalObject.getDebit = getDebit;
withdrawalObject.getBalanceAfterTransaction = getBalanceAfterTransaction;
withdrawalObject.getTransactionDate = getTransactionDate;

module.exports = withdrawalObject;