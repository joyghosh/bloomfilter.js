var bloom = require("./index.js");

var filter = new bloom(1000);

filter.add("test-data 1");
filter.add("test-data 2");

console.log(filter.test("test-data 3"));
console.log(filter.test("test-data 4"));
console.log(filter.test("test-data 1"));
console.log(filter.test("test-data 2"));