var expect = require('chai').expect;
var Config = require('../src/Config.js');

describe("Config", function () {

  it("is module an object", function () {
    expect(Config).to.be.a('object');
    expect(Object.getPrototypeOf(Config)).to.be.a('object');
  });


  it("is module not empty", function () {
    expect(Object.keys(Config)).to.have.length.greaterThan(0);
  });

});