function printStatement(transactionArray){
    let heading = "| date || credit || debit || balance\n";
    let transactions = "";
    let reverseChronTransactionArray = transactionArray.reverse()
    
    for(let i = 0; i < reverseChronTransactionArray.length; i++) {
       transactions += printTransaction(reverseChronTransactionArray[i])
    }
    let statement = heading + transactions;
    console.log(statement);
    return statement;
}

function printTransaction(transaction){
    if (transaction.getCredit !== undefined) {
        return `${transaction.getTransactionDate()}` + " || "
        + `${transaction.getCredit().toFixed(2)}` + " ||" + " || "
        + `${transaction.getBalanceAfterTransaction().toFixed(2)}\n`
    } else {
        return `${transaction.getTransactionDate()}` + " || "
        + "|| " + `${transaction.getDebit().toFixed(2)}` + " || "
        + `${transaction.getBalanceAfterTransaction().toFixed(2)}\n`
    }
}

module.exports = printStatement;