var expect = require('chai').expect;
var assert = require('chai').assert;
var CommonUtils = require('../dist/x-date-core.js').CommonUtils;

describe("CommonUtils tests", function () {

    it("is module an object", function () {
        expect(CommonUtils).to.be.a('object');
        expect(Object.getPrototypeOf(CommonUtils)).to.be.a('object');
    });

    describe("isValidNumber", function () {
        it("is number", function() {
            assert.isTrue(CommonUtils.isValidNumber(1));
        });

        it("is string", function() {
            assert.isFalse(CommonUtils.isValidNumber('some'));
        });

        it("is string number", function() {
            assert.isTrue(CommonUtils.isValidNumber('1'));
        });

        it("is empty string", function() {
            assert.isFalse(CommonUtils.isValidNumber(''));
        });

        it("is string with ine space", function() {
            assert.isFalse(CommonUtils.isValidNumber(' '));
        });

        it("is boolean", function() {
            assert.isFalse(CommonUtils.isValidNumber(false));
        });

        it("is null", function() {
            assert.isFalse(CommonUtils.isValidNumber(null));
        });

        it("is empty", function() {
            assert.isFalse(CommonUtils.isValidNumber());
        });

        it("is infinity", function() {
            assert.isFalse(CommonUtils.isValidNumber(Infinity));
        });

    });
});