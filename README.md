# Bank Tech Test  
  
## Specification  

### Requirements

- You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)  
- Deposits, withdrawal.  
- Account statement (date, amount, balance) printing.  
- Data can be kept in memory (it doesn't need to be stored to a database or anything).  

### Acceptance Criteria  

Given a client makes a deposit of 1000 on 10-01-2012  
And a deposit of 2000 on 13-01-2012   
And a withdrawal of 500 on 14-01-2012  
When she prints her bank statement  
Then she would see:  
```
date || credit || debit || balance  
14/01/2012 || || 500.00 || 2500.00  
13/01/2012 || 2000.00 || || 3000.00  
10/01/2012 || 1000.00 || || 1000.00  
```  

## How to run the app    

1. Run the node repl in the root directory with `node`
2. Load index.js with `.load index.js`  
3. To open an account: `myAccount = new Account`  
4. To make a deposit: `myAccount.deposit(10)`
5. To make a withdrawal: `myAccount.withdraw(5)`  
6. To check your balance: `myAccount.getCurrentBalance()`  
7. To print a full statement: `printStatement(myAccount.transactionHistory)`

## My approach   

Having decided to use JavaScript to complete the task (as opposed to Ruby, the only other programming language I know), I initially elected to design the app to run in the browser console. However, I ran into some problems due to the module syntax not being recognised by the browser. I then decided to reconfigure the app to run in Node's REPL. I decided to use Jest for testing, given that it has an in-built code coverage tool, which reduced set up time. I used ESLint as a linter in order to ensure code quality.

### List of Dependencies  

- Jest  
- ESLint

### Test Coverage

### User Stories  

```
As a user,  
So that I can save my hard-earned money,  
I would like to be able to make deposits into my account.  
```

```
As a user,  
So that I can use my hard-earned money to make cash-purchases,  
I would like to be able to withdraw it from my account.  
```

```
As a user,  
So that I can track my spending,  
I would like to be able to print out a statement showing my transaction history.  
```

### Edge Cases  

| *Case* | *Outcome |
| ------- | -------- |
| Withdrawal would take user's balance below 0 | Raises error |
| Negative value or 0 passed to deposit() | Raises error |
| Negative value or 0 passed to withdraw() | Raises error |  


### Class Relationship Diagram  

![Class Relationship Diagram][https://github.com/charlie-galb/bank-tech-test/blob/main/bank-class-diagram.jpeg]

### Test coverage  

![Test coverage][https://github.com/charlie-galb/bank-tech-test/blob/main/test_coverage.png]
