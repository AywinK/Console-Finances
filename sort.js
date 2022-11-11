

// sort monthly

// var sorted_num = monthly_money.sort();
// console.log(sorted_num);

// sort finances
// reference link - https://stackoverflow.com/questions/50415200/sort-an-array-of-arrays-in-javascript
finances.sort(([a, b], [c, d]) => b - d);
console.log(finances);