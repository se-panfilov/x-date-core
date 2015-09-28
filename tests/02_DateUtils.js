var expect = require('chai').expect;
var assert = require('chai').assert;
var sinon = require('sinon');
var DateUtils = require('../dist/x-date-core.js').DateUtils;
var config = require('../dist/x-date-core.js').Config;

describe("Date Utils", function () {

    it("is module an object", function () {
        expect(DateUtils).to.be.a('object');
        expect(Object.getPrototypeOf(DateUtils)).to.be.a('object');
    });

    describe("Check UTC functions", function () {
        var isUtcBuffer = config.isUtc;
        var date = new Date(2015, 1,1).getTime();

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
                //assert.equal(DateUtils.getDay('asdsad'), Number.NaN);
            });
        });

    });
});