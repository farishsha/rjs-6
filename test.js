const assert = require("assert");

const sum = require("./index");

const expected = 150;

assert.strictEqual(
    sum,
    expected,
    "Incorrect sum. Use reduce() to calculate the total."
);

console.log("All tests passed!");