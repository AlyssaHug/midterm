const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
/*
Create a function that simulates a lunch money management system for students. The function will take in a student's name, the amount of lunch money they currently have, the lunch item name, and the cost of their lunch.

- If the student has enough money to buy lunch, display "[student name] purchased [lunch item] purchased!"
- If the student does not have enough money, display "[student name] does not have sufficient funds to buy [lunch item]!"

CHALLENGE (SAVE FOR LAST):
- Show the remaining balance if the student has enough money to buy lunch
  - "[student name] purchased [lunch item] purchased! Remaining Balance [balance]"

- Show the amount of money still needed balance if the student does not have enough money
  - "[student name] does not have sufficient funds to buy [lunch item]! Needs [amount] more."
  
- If the student's remaining balance is less than $5, display "Warning: Low balance!"
- If the student's remaining balance is exactly $0, display "Balance depleted! Please add more funds."

*/

//determine a proper function name and parameter variable name
function LunchMoneyChecker(param, parammoney, paramitem, paramcost){
  let item=paramitem
  let name=paramname
if (money < cost){
  console.log(+paramname+" doesn't have enough money to buy "+item+".")
}else if(money > cost){
  console.log(+paramname+" purchased "+item+".")
}
  //write your code here
}

function StartApp(){
  readline.question('What is your name?', name => {
    readline.question('How much money do you have today?', parammoney => {
      readline.question('What are you wanting to buy?', paramitem => {
        readline.question('How much does it cost?', paramcost => {
            LunchMoneyChecker(Number(parammoney));
            LunchMoneyChecker(Number(paramcost));
          //call your function here.

          // readline.close();
          if(cost !== "quit"){
            StartApp();
          } else {
            readline.close();
          }
        })
      })
    });
  });
}

StartApp();