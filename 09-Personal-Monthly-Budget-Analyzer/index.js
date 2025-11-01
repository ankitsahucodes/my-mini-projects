console.log("Monthly Budget Analysis Report")
console.log("-------------------------------")

let salary = 50000
let sideHustles = 10000
let groceries = 5000
let utilities = 2000
let rent = 20000
let transportation = 3000

let totalIncome = salary + sideHustles

let totalExpenses = groceries + utilities + rent + transportation 

let budgetSurplusDeficit = totalIncome - totalExpenses

let budgetStatus = ""
if ( budgetSurplusDeficit >= 0 ){
  budgetStatus = "Congratulations! You have a budget surplus."
} else {
  budgetStatus = "Opps! You have a budget deficit. Consider reducing expenses or increasing income."
}

let spendingInsights = ""

if ( totalExpenses <= 10000){
  spendingInsights = "Great job! You have maintained a low expense level."
} 

else if ( totalExpenses > 10000 && totalExpenses <= 20000){
  spendingInsights = "Your expenses are moderate. Look for opportunities to reduce unnecessary spending."
}

else if ( totalExpenses > 20000 && totalExpenses <= 30000 ){
  spendingInsights = "Your expenses are on the higher side. Consider creating a more detailed budget to manage your spending."
}
else {
  spendingInsights = "Your expenses are quite high. It is essential to analyze your spending habits and make necessary adjustments."
}

let budgetTips = ""

if ( budgetSurplusDeficit >= 10000 ){
  budgetTips = "You have a significant budget surplus. Consider allocating the surplus towards savings or debt repayment."
}
else if ( budgetSurplusDeficit < 10000 && budgetSurplusDeficit >= -10000 ) {
  budgetStatus = "Your budget is relatively balanced. Focus on maintaining your current financial habits."
} 
 else {
   budgetTips = "You have a budget deficit. Evaluate your expenses and identify areas where you can cut back."
 }



console.log("Total Income: ₹" + totalIncome)
console.log("Total Expenses: ₹" + totalExpenses)
console.log("Budget Surplus/Deficit: ₹" + budgetSurplusDeficit )
console.log("\nBudget Status:" , budgetStatus)
console.log("\nSpending Insights:\n" +  spendingInsights)
console.log("\nBudget Management Tips:\n" + budgetTips)