var expect = require('chai').expect;

var some = require('../src/00_Config.js');



describe("Module", function() {
    console.log(some);
    it("is module an object", function() {
        expect(some).to.be.a('object');
    });

    it("is module not empty", function() {
        expect(Object.keys(some)).to.have.length.greaterThan(0);
    });

});