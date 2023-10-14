const { Given, Then } = require('cucumber');

let x;

Given('I buy drilling tool worth ${int}', function (amount) {
  x = amount;
});

Given('I buy the plant worth ${int}', function (amount) {
  x = x + amount;
});

Then('Total due amount is ${int}', function (amount) {
  console.log('haha', x);
});