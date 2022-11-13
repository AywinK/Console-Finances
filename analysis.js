
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

// // Average of changes month by month over whole period
// var monthly_average = total_money / total_months;
// console.log(monthly_average);

// month with greatest increase in profits
// initialise variables
var monthly_money = [];

// put the change in profits into variable
for (i = 0; i < finances.length; i++) {
    monthly_money[i] = finances[i][1];
}

console.log(monthly_money)

// average change in monthly_money
// initialise chng_in_monthly_money
var chng_in_monthly_money = [];

// calculate array of monthly change - month to month
// initialise from second month onwards
for (i = 1; i < monthly_money.length; i++ ) {
    chng_in_monthly_money[i - 1] = monthly_money[i] - monthly_money[i - 1];
}

// print chng_in_monthly_money to console
console.log(chng_in_monthly_money);

// calculate average (mean value, not median or mode) of change in monthly money
var avg_chng_in_monthly_money = 0;

for (i = 0; i < chng_in_monthly_money.length; i++) {
    avg_chng_in_monthly_money += chng_in_monthly_money[i];
}

console.log(avg_chng_in_monthly_money)

// avg_chng_in_monthly_money = avg_chng_in_monthly_money / avg_chng_in_monthly_money.length;

// print avereage change in monthly money
console.log(avg_chng_in_monthly_money / (monthly_money.length-1));

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