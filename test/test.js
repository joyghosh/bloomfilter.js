var expect = require("chai").expect;
var bloom = require("../index.js");

var filter = new bloom(1000);

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
