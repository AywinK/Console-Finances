
// Heading
var Heading = "Financial Analysis";
console.log(Heading);

// Finding total number of months
var total_months = finances.length;
console.log(total_months);

// Net total amount profit/losses over whole period
// initialise variables
var total_money = 0;
var money = 0;

// add up all the monthly amounts
for (i = 0; i < finances.length; i++) {
    money = finances[i][1];
    total_money += money;
    // console.log(total_money);
}

// console log total money
console.log(total_money);

// Average of changes month by month over whole period
var monthly_average = total_money / total_months;
console.log(monthly_average);

// month with greatest increase in profits
// initialise variables
var monthly_money = [];

// put the change in profits into variable
for (i = 0; i < finances.length; i++) {
    monthly_money[i] = finances[i][1];
}

console.log(monthly_money)

// Greatest profit
var great_profit = Math.max(...monthly_money);
console.log(great_profit);
// Find the index of greatest profit
var profit_i = monthly_money.indexOf(great_profit);
console.log(profit_i);
// find array with greatest profit in finances data
var profit_array = finances[profit_i];
console.log(profit_array);

// Greatest loss
var great_loss = Math.min(...monthly_money);
console.log(great_loss);
// Find the index of greatest loss
var loss_i = monthly_money.indexOf(great_loss);
console.log(loss_i);
// find array with greatest loss in finances data
var loss_array = finances[loss_i];
console.log(loss_array);