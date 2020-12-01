const depositObject = {

}

function getCredit(){
    return 10.50;
};

function getBalanceAfterTransaction(){
    return 10.50;
};

function getTransactionDate(){
    return "04/07/2019";
}

depositObject.getCredit = getCredit;
depositObject.getBalanceAfterTransaction = getBalanceAfterTransaction;
depositObject.getTransactionDate = getTransactionDate;

module.exports = depositObject;