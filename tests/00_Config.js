var expect = require('chai').expect;

var config = require('../dist/x-date-core.js').Config;



describe("Module", function() {
    console.log(config);
    it("is module an object", function() {
        expect(config).to.be.a('object');
    });

    it("is module not empty", function() {
        expect(Object.keys(config)).to.have.length.greaterThan(0);
    });

});