var expect = require('chai').expect;

var some = require('../../src/core/00_Config.js');

describe("Module", function() {

    it("is module an object", function() {
        expect(some).to.be.a('object');
    });

    it("is module not empty", function() {
        expect(Object.keys(some)).to.have.length.greaterThan(0);
    });

});