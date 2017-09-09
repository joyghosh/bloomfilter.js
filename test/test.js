var expect = require("chai").expect;
var bloom = require("../index.js");

var filter = new bloom(1000);

// filter.add("test-data 1");
// filter.add("test-data 2");
// filter.add("tkksdjlkdjs");
// filter.add("dslkjdsldshsdkhj");
// filter.add("Joydnsbnmbsnmsba");
// filter.add("tesak");
// filter.add("1223262738");
// filter.add("asjdlsad,9ads02");
//
// console.log(filter.test("test-data 1"));
// console.log(filter.test("test-data 2"));
//
// var s = filter.serialize();
// console.log(s);
// var d = bloom.deserialize(s);
// console.log(d);
// console.log(d.test("test-data 1"));
// console.log(d.test("test-data 4"));
// d.add("test-data 4");
// console.log(d.test("test-data 4"));
// console.log(d.test("tkksdjlkdjs"));
// console.log(d.test("Joydnsbnmbsnmsba"));
// console.log(d.test("asjdlsad,9ads02"));

// var deserialized = JSON.parse(serialized);

// console.log(filter.serialize());
// var str = Array.prototype.join.call(filter.view(), ",");
// console.log(str);

// var arr = str.split(",")
//       , view = new Uint8Array( arr );
// console.log(view.buffer);

describe("BloomFilter tests", function(){
  //add and test.
  describe("add and test", function(){
    it("returns true on calling test function against added value", function(){
       filter.add("Some value");
       expect(filter.test("Some value")).to.equal(true);
    });
  });

  //test without add.
  describe("test without add", function(){
    it("returns false when test function is called against a value which is not added", function(){
        expect(filter.test("Some other value")).to.equal(false);
    });
  });

  //serialization test.
  describe("serialization and deserialization", function(){
    it("filter should function properly upon serialization and deserialization", function(){
        var serialized = filter.serialize();
        var deserialized = bloom.deserialize(serialized);
        expect(deserialized.test("Some value")).to.equal(true);

        expect(deserialized.test("Some other value")).to.equal(false);

        deserialized.add("Some other value");
        expect(deserialized.test("Some other value")).to.equal(true);

        expect(deserialized.test("Yet another value")).to.equal(false);
        // console.log(JSON.stringify(deserialized).length);
    });
  });
});
