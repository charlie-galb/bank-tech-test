const { getBalanceAfterTransaction } = require("../__mocks__/deposit");

function printTransaction(transaction){
    return `${transaction.getTransactionDate()}` + " || "
    + `${transaction.getCredit().toFixed(2)}` + " ||" + " || "
    + `${transaction.getBalanceAfterTransaction().toFixed(2)}`
}

module.exports = printTransaction;