var expect = require('chai').expect;
var assert = require('chai').assert;
var CommonUtils = require('../dist/x-date-core.js').CommonUtils;

describe("CommonUtils tests", function () {

    it("is module an object", function () {
        expect(CommonUtils).to.be.a('object');
        expect(Object.getPrototypeOf(CommonUtils)).to.be.a('object');
    });

    describe("isValidNumber", function () {

        it("is number", function () {
            assert.isTrue(CommonUtils.isValidNumber(1));
        });

        it("is string", function () {
            assert.isFalse(CommonUtils.isValidNumber('some'));
        });

        it("is string number", function () {
            assert.isTrue(CommonUtils.isValidNumber('1'));
        });

        it("is empty string", function () {
            assert.isFalse(CommonUtils.isValidNumber(''));
        });

        it("is string with ine space", function () {
            assert.isFalse(CommonUtils.isValidNumber(' '));
        });

        it("is boolean", function () {
            assert.isFalse(CommonUtils.isValidNumber(false));
        });

        it("is null", function () {
            assert.isFalse(CommonUtils.isValidNumber(null));
        });

        it("is empty", function () {
            assert.isFalse(CommonUtils.isValidNumber());
        });

        it("is infinity", function () {
            assert.isFalse(CommonUtils.isValidNumber(Infinity));
        });
    });

    describe("getArrayOfNumbers", function () {

        it("common case", function () {
            assert.deepEqual(CommonUtils.getArrayOfNumbers(0, 2), [0, 1, 2]);
        });

        it("same numbers", function () {
            assert.deepEqual(CommonUtils.getArrayOfNumbers(2, 2), [2]);
        });

        it("start lower then end", function () {
            assert.deepEqual(CommonUtils.getArrayOfNumbers(2, 0), [2, 1, 0]);
        });

        it("start is string number", function () {
            assert.deepEqual(CommonUtils.getArrayOfNumbers('2', 0), [2, 1, 0]);
        });

        it("end is string number", function () {
            assert.deepEqual(CommonUtils.getArrayOfNumbers(0, "2"), [0, 1, 2]);
        });

        it("start is infinity", function () {
            assert.deepEqual(CommonUtils.getArrayOfNumbers(Infinity, 2), []);
        });

        it("end is infinity", function () {
            assert.deepEqual(CommonUtils.getArrayOfNumbers(2, Infinity), []);
        });

        it("start is string", function () {
            assert.deepEqual(CommonUtils.getArrayOfNumbers('sadsad', 2), []);
        });

        it("null case", function () {
            assert.deepEqual(CommonUtils.getArrayOfNumbers(null, 2), []);
        });

        it("boolean case", function () {
            assert.deepEqual(CommonUtils.getArrayOfNumbers(false, true), []);
        });
    });

    describe("intArraySort", function () {

        it("default sort", function () {
            assert.deepEqual(CommonUtils.intArraySort([2, 1, 0]), [0, 1, 2]);
        });

        it("ASC nothing to sort", function () {
            assert.deepEqual(CommonUtils.intArraySort([0, 1, 2], 'asc'), [0, 1, 2]);
        });

        it("ASC sort", function () {
            assert.deepEqual(CommonUtils.intArraySort([2, 1, 0], 'asc'), [0, 1, 2]);
        });

        it("DESC nothing to sort", function () {
            assert.deepEqual(CommonUtils.intArraySort([2, 1, 0], 'desc'), [2, 1, 0]);
        });

        it("DESC sort", function () {
            assert.deepEqual(CommonUtils.intArraySort([2, 1, 0], 'desc'), [2, 1, 0]);
        });

    });


});