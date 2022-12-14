
// Finding total number of months
var total_months = finances.length;
var total_months_array = "Total months (datapoints) included in dataset: " + total_months;

// Net total amount profit/losses over whole period
// initialise variables
var net_total_money = 0;

// add up all the monthly amounts
for (i = 0; i < finances.length; i++) {
    net_total_money += finances[i][1];
}
var net_total_money_array = "Net total of profit/losses over entire period: ($" + net_total_money + ")";

// net profit/loss for whole period averaged out over each month
var avg_monthly_net = Math.round((net_total_money / total_months) * 100) / 100;
var avg_monthly_net_array = "Average net total of profit/losses every month over whole period: ($" + avg_monthly_net + ")";

// monthly profit/loss from dataset put into variable
// initialise variables
var monthly_money = [];

// put the change in profits into variable
for (i = 0; i < finances.length; i++) {
    monthly_money[i] = finances[i][1];
}

// Highest profit month
var highest_profit_month = finances[monthly_money.indexOf(Math.max(...monthly_money))];
var highest_profit_month_array = "Highest profit month: " + highest_profit_month[0] + " ($" + highest_profit_month[1] + ")";

// Highest loss month
var highest_loss_month = finances[monthly_money.indexOf(Math.min(...monthly_money))];
var highest_loss_month_array = "Highest loss month: " + highest_loss_month[0] + " ($" + highest_loss_month[1] + ")";

// change in monthly_money between months
// initialise chng_in_monthly_money
var chng_in_monthly_money = [];

// calculate array of monthly change - from month to month
// initialise from second month onwards
for (i = 1; i < monthly_money.length; i++) {
    chng_in_monthly_money[i - 1] = monthly_money[i] - monthly_money[i - 1];
}


// avg change over whole period but given as a per month value - using for loop to meet acceptance criteria maybe
var ttl_chng_in_monthly_money = 0;
var avg_chng_in_monthly_money = 0;

for (i = 0; i < chng_in_monthly_money.length; i++) {
    ttl_chng_in_monthly_money += chng_in_monthly_money[i];
}

avg_chng_in_monthly_money = ttl_chng_in_monthly_money / (monthly_money.length - 1);
// below is commented out simple way of calculating the avg_chng_in_monthly_money
// var avg_chng_in_monthly_money = (finances[finances.length - 1][1] - finances[0][1]) / (total_months - 1);
// appropriate rounding of currency
avg_chng_in_monthly_money = Math.round(avg_chng_in_monthly_money * 100) / 100;
// array for console
var change_in_period_per_month_array = "Overall change in profit over entire period (given as per month figure): ($" + avg_chng_in_monthly_money + ")";


// avg change (fluctuations) between months
var monthly_money_fluc = 0;
for (i = 0; i < chng_in_monthly_money.length; i++) {
    monthly_money_fluc += Math.abs(chng_in_monthly_money[i]);
}

var avg_monthly_money_fluc = monthly_money_fluc / (monthly_money.length - 1);
avg_monthly_money_fluc = Math.round(avg_monthly_money_fluc * 100) / 100;
var avg_monthly_money_fluc_array = "Average fluctuations in profit between months during whole period (absolute value): ($" + avg_monthly_money_fluc + ")";


// Greatest profit (increase in profit)
var great_profit_inc = Math.max(...chng_in_monthly_money);
// Find the index of greatest profit
var profit_i = chng_in_monthly_money.indexOf(great_profit_inc) + 1;
// find array with greatest profit in finances data
var profit_array = "Greatest increase in Profits between months:  " + finances[profit_i][0] + " ($" + great_profit_inc + ")";

// Greatest profit (greatest decrease in profit)
var great_profit_dec = Math.min(...chng_in_monthly_money);
// Find the index of greatest loss
var loss_i = chng_in_monthly_money.indexOf(great_profit_dec) + 1;
// find array with greatest loss in finances data
var loss_array = "Greatest decrease in Profits between months:  " + finances[loss_i][0] + " ($" + great_profit_dec + ")";


// printing analysis to console
var finances_analysis =
    `Financial Analysis
---------------------------------
` + total_months_array + `
` + net_total_money_array + `
` + highest_profit_month_array + `
` + highest_loss_month_array + `
` + avg_monthly_net_array + `
` + change_in_period_per_month_array + `
` + avg_monthly_money_fluc_array + `
` + profit_array + `
` + loss_array
    ;


console.log(finances_analysis)