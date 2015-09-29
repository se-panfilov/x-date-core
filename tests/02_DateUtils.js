var expect = require('chai').expect;
var assert = require('chai').assert;
var sinon = require('sinon');
var DateUtils = require('../dist/x-date-core.test_only.js').DateUtils;
var config = require('../dist/x-date-core.test_only.js').Config;

describe("Date Utils", function () {

    it("is module an object", function () {
        expect(DateUtils).to.be.a('object');
        expect(Object.getPrototypeOf(DateUtils)).to.be.a('object');
    });

    describe("Check UTC functions", function () {
        var isUtcBuffer = config.isUtc;
        var date = new Date(2015, 1, 1).getTime();

        beforeEach(function () {
            config.isUtc = true;
        });

        afterEach(function () {
            config.isUtc = isUtcBuffer;
        });

        describe("getDay", function () {

            it("common case", function () {
                assert.equal(DateUtils.getDay(date), new Date(date).getUTCDate());
            });

            it("NaN arg", function () {
                assert.isTrue(Number.isNaN(DateUtils.getDay('random text')));
            });

            it("string num arg", function () {
                assert.equal(DateUtils.getDay(date.toString()), new Date(date).getUTCDate());
            });

            it("infinity case", function () {
                assert.deepEqual(DateUtils.getDay(Infinity), Number.NaN);
            });

            it("no args case", function () {
                assert.deepEqual(DateUtils.getDay(), Number.NaN);
            });
        });

        describe("getVal", function () {

            it("common case", function () {
                var datetime = new Date(2015, 1, 1).getTime();
                var method = Date.prototype.getDate;
                var result = new Date(datetime).getDate();

                assert.equal(DateUtils._private.getVal(datetime, method), result);
            });


        });
    });
});