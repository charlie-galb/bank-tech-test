const depositObject = {

}

function getCredit(){
    return 10.50;
};

function getBalanceAfterTransaction(){
    return 10.50;
};

function getTransactionDate(){
    let cannedDate = new Date('2019-04-07T10:20:30Z');
    return cannedDate.toString();
}

depositObject.getCredit = getCredit;
depositObject.getBalanceAfterTransaction = getBalanceAfterTransaction;
depositObject.getTransactionDate = getTransactionDate;

module.exports = depositObject;