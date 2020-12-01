const printTransaction = require("./printTransaction.js")

function printStatement(transactionArray){
    let heading = "| date || credit || debit || balance\n";
    let transactions = "";
    
    for(let i = 0; i < transactionArray.length; i++) {
       transactions += printTransaction(transactionArray[i])
    }

    return heading + transactions
}

module.exports = printStatement;