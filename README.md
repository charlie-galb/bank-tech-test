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

## My approach   

Having decided to use JavaScript to complete the task (as opposed to Ruby, the only other programming language I know), I have decided to design the app to run in the browser console. Although it would be possible to create command-line app via node, I think that this would add extra layers of complexity that the relatively straightforward requirements of the task do not demand. I feel that Jasmine is a good choice for my testing framework, given that it also runs in the browser, does not require a DOM and is extremely simple to set up. 

## Planning  

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

### Class Relationship Diagram  

To be linked.  

### Tests  

**Transaction**  

*Deposit*

| Input  || Output |  
|----------|----------|  
| 500, 10 | 510 |
|-10, 5 | -5 |
| 65, 3.79 | 68.79 |
| 37, 0 | "Please enter an amount larger than 0" |  

*Withdrawal*

| Input  || Output |  
|----------|----------|  
| 500, 10 | 510 |
|-10, -5 | -15 |
| 65, 3.79 | 68.79 |
| 37, 0 | "Please enter an amount larger than 0" |

**Account**  

*Print Statement*

`withdrawalDouble = {
    date: 13/01/2012,
    credit: 0,
    debit: 10.00
    balanceAfterTransaction: 0.00
}`  

`depositDouble = {
    date: 12/01/2012,
    credit: 0,
    debit: 10.00
    balanceAfterTransaction: 10.00
}`

| Input  || Output |  
|----------|----------|  
| [depositDouble] | date || credit || debit || balance
12/01/2012 || 10.00 || || 10.00 |
| [depositDouble, withdrawalDouble] | date || credit || debit || balance
13/01/2012 ||  || 10.00 || 0.00 |
12/01/2012 || 10.00 || || 10.00 |
