const printTransaction = require("./printTransaction.js")

function printStatement(transactionArray){
    let heading = "| date || credit || debit || balance\n";
    let transactions = "";
    
    for(let i = 0; i < transactionArray.length; i++) {
       transactions += printTransaction(transactionArray[i])
    }
    let statement = heading + transactions;
    console.log(statement);
    return statement;
}

module.exports = printStatement;