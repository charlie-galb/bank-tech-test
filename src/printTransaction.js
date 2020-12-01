const { getBalanceAfterTransaction } = require("../__mocks__/deposit");

function printTransaction(transaction){
    if (transaction.getCredit !== undefined) {
        return `${transaction.getTransactionDate()}` + " || "
        + `${transaction.getCredit().toFixed(2)}` + " ||" + " || "
        + `${transaction.getBalanceAfterTransaction().toFixed(2)}`
    } else {
        return `${transaction.getTransactionDate()}` + " || "
        + "|| " + `${transaction.getDebit().toFixed(2)}` + " || "
        + `${transaction.getBalanceAfterTransaction().toFixed(2)}`
    }
}

module.exports = printTransaction;