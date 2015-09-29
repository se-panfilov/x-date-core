var expect = require('chai').expect;
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
                expect(DateUtils.getDay(date)).to.be.equal(new Date(date).getUTCDate());
            });

            it("NaN arg", function () {
                return expect(DateUtils.getDay('random text')).to.be.NaN;
            });

            it("string num arg", function () {
                expect(DateUtils.getDay(date.toString())).to.be.equal(new Date(date).getUTCDate());
            });

            it("infinity case", function () {
                return expect(DateUtils.getDay(Infinity)).to.be.NaN;
            });

            it("no args case", function () {
                return expect(DateUtils.getDay()).to.be.NaN;
            });
        });


    });

    describe("getVal", function () {

        it("common case", function () {
            var datetime = new Date(2015, 1, 1).getTime();
            var method = Date.prototype.getDate;
            var result = new Date(datetime).getDate();

            expect(DateUtils._private.getVal(datetime, method)).to.be.equal(result);
        });

        it("not date method", function () {
            var datetime = new Date(2015, 1, 1).getTime();
            var method = function () {
                console.log('some');
            };

            return expect(DateUtils._private.getVal(datetime, method)).to.be.undefined;
        });

        it("no method", function () {
            var datetime = new Date(2015, 1, 1).getTime();
            return expect(DateUtils._private.getVal(datetime)).to.be.null;
        });

        it("no date", function () {
            var method = Date.prototype.getDate;
            return expect(DateUtils._private.getVal(undefined, method)).to.be.NaN;
        });

        it("string num datetime", function () {
            var datetime = new Date(2015, 1, 1).getTime();
            var method = Date.prototype.getDate;
            var result = new Date(datetime).getDate();

            expect(DateUtils._private.getVal(datetime.toString(), method)).to.be.equal(result);
        });

        it("string datetime", function () {
            var method = Date.prototype.getDate;

            return expect(DateUtils._private.getVal(undefined, method)).to.be.NaN;
        });

        it("no args", function () {
            return expect(DateUtils._private.getVal()).to.be.null;
        });

    });
});