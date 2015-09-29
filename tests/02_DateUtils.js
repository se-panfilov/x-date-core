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

        describe("getDayOfWeek", function () {

            it("common case", function () {
                expect(DateUtils.getDayOfWeek(date)).to.be.equal(new Date(date).getUTCDay());
            });

            it("NaN arg", function () {
                return expect(DateUtils.getDayOfWeek('random text')).to.be.NaN;
            });

            it("string num arg", function () {
                expect(DateUtils.getDayOfWeek(date.toString())).to.be.equal(new Date(date).getUTCDay());
            });

            it("infinity case", function () {
                return expect(DateUtils.getDayOfWeek(Infinity)).to.be.NaN;
            });

            it("no args case", function () {
                return expect(DateUtils.getDayOfWeek()).to.be.NaN;
            });
        });

        describe("getYear", function () {

            it("common case", function () {
                expect(DateUtils.getYear(date)).to.be.equal(new Date(date).getUTCFullYear());
            });

            it("NaN arg", function () {
                return expect(DateUtils.getYear('random text')).to.be.NaN;
            });

            it("string num arg", function () {
                expect(DateUtils.getYear(date.toString())).to.be.equal(new Date(date).getUTCFullYear());
            });

            it("infinity case", function () {
                return expect(DateUtils.getYear(Infinity)).to.be.NaN;
            });

            it("no args case", function () {
                return expect(DateUtils.getYear()).to.be.NaN;
            });
        });

        describe("getMonth", function () {

            it("common case", function () {
                expect(DateUtils.getMonth(date)).to.be.equal(new Date(date).getUTCMonth());
            });

            it("NaN arg", function () {
                return expect(DateUtils.getMonth('random text')).to.be.NaN;
            });

            it("string num arg", function () {
                expect(DateUtils.getMonth(date.toString())).to.be.equal(new Date(date).getUTCMonth());
            });

            it("infinity case", function () {
                return expect(DateUtils.getMonth(Infinity)).to.be.NaN;
            });

            it("no args case", function () {
                return expect(DateUtils.getMonth()).to.be.NaN;
            });
        });

        describe("getDaysInMonth", function () {

            it("common case", function () {
                var year = 2015;
                var month = 1;
                var resultDate = new Date(year, month + 1, 0);
                expect(DateUtils.getDaysInMonth(month, year)).to.be.equal(resultDate.getUTCDate());
            });

            it("NaN arg", function () {
                return expect(DateUtils.getDaysInMonth('random text')).to.be.NaN;
            });

            it("string num arg", function () {
                var year = 2015;
                var month = 1;
                var resultDate = new Date(year, month + 1, 0);
                expect(DateUtils.getDaysInMonth(month.toString(), year.toString())).to.be.equal(resultDate.getUTCDate());
            });

            it("infinity case", function () {
                return expect(DateUtils.getDaysInMonth(Infinity)).to.be.NaN;
            });

            it("no args case", function () {
                return expect(DateUtils.getDaysInMonth()).to.be.NaN;
            });
        });

    });

    describe("Check non-UTC functions", function () {
        var isUtcBuffer = config.isUtc;
        var date = new Date(2015, 1, 1).getTime();

        beforeEach(function () {
            config.isUtc = false;
        });

        afterEach(function () {
            config.isUtc = isUtcBuffer;
        });

        describe("getDay", function () {

            it("common case", function () {
                expect(DateUtils.getDay(date)).to.be.equal(new Date(date).getDate());
            });

            it("NaN arg", function () {
                return expect(DateUtils.getDay('random text')).to.be.NaN;
            });

            it("string num arg", function () {
                expect(DateUtils.getDay(date.toString())).to.be.equal(new Date(date).getDate());
            });

            it("infinity case", function () {
                return expect(DateUtils.getDay(Infinity)).to.be.NaN;
            });

            it("no args case", function () {
                return expect(DateUtils.getDay()).to.be.NaN;
            });
        });

        describe("getDayOfWeek", function () {

            it("common case", function () {
                expect(DateUtils.getDayOfWeek(date)).to.be.equal(new Date(date).getDay());
            });

            it("NaN arg", function () {
                return expect(DateUtils.getDayOfWeek('random text')).to.be.NaN;
            });

            it("string num arg", function () {
                expect(DateUtils.getDayOfWeek(date.toString())).to.be.equal(new Date(date).getDay());
            });

            it("infinity case", function () {
                return expect(DateUtils.getDayOfWeek(Infinity)).to.be.NaN;
            });

            it("no args case", function () {
                return expect(DateUtils.getDayOfWeek()).to.be.NaN;
            });
        });

        describe("getYear", function () {

            it("common case", function () {
                expect(DateUtils.getYear(date)).to.be.equal(new Date(date).getFullYear());
            });

            it("NaN arg", function () {
                return expect(DateUtils.getYear('random text')).to.be.NaN;
            });

            it("string num arg", function () {
                expect(DateUtils.getYear(date.toString())).to.be.equal(new Date(date).getFullYear());
            });

            it("infinity case", function () {
                return expect(DateUtils.getYear(Infinity)).to.be.NaN;
            });

            it("no args case", function () {
                return expect(DateUtils.getYear()).to.be.NaN;
            });
        });

        describe("getMonth", function () {

            it("common case", function () {
                expect(DateUtils.getMonth(date)).to.be.equal(new Date(date).getMonth());
            });

            it("NaN arg", function () {
                return expect(DateUtils.getMonth('random text')).to.be.NaN;
            });

            it("string num arg", function () {
                expect(DateUtils.getMonth(date.toString())).to.be.equal(new Date(date).getMonth());
            });

            it("infinity case", function () {
                return expect(DateUtils.getMonth(Infinity)).to.be.NaN;
            });

            it("no args case", function () {
                return expect(DateUtils.getMonth()).to.be.NaN;
            });
        });

        describe("getDaysInMonth", function () {

            it("common case", function () {
                var year = 2015;
                var month = 1;
                var resultDate = new Date(year, month + 1, 0);
                expect(DateUtils.getDaysInMonth(month, year)).to.be.equal(resultDate.getDate());
            });

            it("NaN arg", function () {
                return expect(DateUtils.getDaysInMonth('random text')).to.be.NaN;
            });

            it("string num arg", function () {
                var year = 2015;
                var month = 1;
                var resultDate = new Date(year, month + 1, 0);
                expect(DateUtils.getDaysInMonth(month.toString(), year.toString())).to.be.equal(resultDate.getDate());
            });

            it("infinity case", function () {
                return expect(DateUtils.getDaysInMonth(Infinity)).to.be.NaN;
            });

            it("no args case", function () {
                return expect(DateUtils.getDaysInMonth()).to.be.NaN;
            });
        });

    });

    describe("isValidModel", function () {

        it("common case", function () {
            var model = {dt: 1};
            return expect(DateUtils.isValidModel(model)).to.be.true;
        });

        it("empty model", function () {
            var model = {};
            return expect(DateUtils.isValidModel(model)).to.be.false;
        });

        it("null model", function () {
            var model = null;
            return expect(DateUtils.isValidModel(model)).to.be.false;
        });

        it("array model", function () {
            var model = [];
            return expect(DateUtils.isValidModel(model)).to.be.false;
        });

        it("primitive model", function () {
            var model = 123;
            return expect(DateUtils.isValidModel(model)).to.be.false;
        });

        it("null datetime in model", function () {
            var model = {dt: null};
            return expect(DateUtils.isValidModel(model)).to.be.false;
        });

        it("infinity datetime", function () {
            var model = {dt: Infinity};
            return expect(DateUtils.isValidModel(model)).to.be.false;
        });

        it("string number datetime model", function () {
            var model = {dt: "123"};
            return expect(DateUtils.isValidModel(model)).to.be.true;
        });

        it("string datetime model", function () {
            var model = {dt: "some"};
            return expect(DateUtils.isValidModel(model)).to.be.false;
        });

        it("model dt is 0", function () {
            var model = {dt: 0};
            return expect(DateUtils.isValidModel(model)).to.be.true;
        });

    });

    describe("isDateUpperStartLimit", function () {

        it("datetime > start limit", function () {
            var dt = new Date(2015, 1, 2).getTime();
            var start = new Date(2015, 1, 1).getTime();

            return expect(DateUtils.isDateUpperStartLimit(dt, start)).to.be.true;
        });

        it("datetime < start limit", function () {
            var dt = new Date(2015, 1, 1).getTime();
            var start = new Date(2015, 1, 2).getTime();

            return expect(DateUtils.isDateUpperStartLimit(dt, start)).to.be.false;
        });

        it("datetime equal start limit", function () {
            var dt = new Date(2015, 1, 1).getTime();
            var start = new Date(2015, 1, 1).getTime();

            return expect(DateUtils.isDateUpperStartLimit(dt, start)).to.be.false;
        });

        it("no datetime", function () {
            var start = new Date(2015, 1, 1).getTime();

            //var spy = sinon.spy(DateUtils, 'isDateUpperStartLimit');
            return expect(function () {
                DateUtils.isDateUpperStartLimit(undefined, start);
            }).to.throw('NaN or null'); //TODO (S.Panfilov) should be a const
            //DateUtils.isDateUpperStartLimit.restore();
        });

        it("no start limit", function () {
            var dt = new Date(2015, 1, 1).getTime();
            return expect(DateUtils.isDateUpperStartLimit(dt, undefined)).to.be.true;
        });

        it("no args", function () {
            return expect(DateUtils.isDateUpperStartLimit()).to.be.true;
        });

        it("string args and datetime < start limit", function () {
            var dt = new Date(2015, 1, 1).getTime().toString();
            var start = new Date(2015, 1, 2).getTime().toString();

            return expect(DateUtils.isDateUpperStartLimit(dt, start)).to.be.false;
        });

        it("string args and datetime > start limit", function () {
            var dt = new Date(2015, 1, 2).getTime().toString();
            var start = new Date(2015, 1, 1).getTime().toString();

            return expect(DateUtils.isDateUpperStartLimit(dt, start)).to.be.true;
        });

        it("string args and datetime equal to start limit", function () {
            var dt = new Date(2015, 1, 1).getTime().toString();
            var start = new Date(2015, 1, 1).getTime().toString();

            return expect(DateUtils.isDateUpperStartLimit(dt, start)).to.be.false;
        });

        it("Infinity start", function () {
            var dt = new Date(2015, 1, 1).getTime();
            var start = Infinity;

            return expect(DateUtils.isDateUpperStartLimit(dt, start)).to.be.false;
        });

        it("Infinity datetime", function () {
            var dt = Infinity;
            var start = new Date(2015, 1, 1).getTime();

            return expect(DateUtils.isDateUpperStartLimit(dt, start)).to.be.true;
        });

        it("NaN datetime", function () {
            var dt = 'Adasdsd';
            var start = new Date(2015, 1, 1).getTime();

            //var spy = sinon.spy(DateUtils, 'isDateUpperStartLimit');
            return expect(function () {
                DateUtils.isDateUpperStartLimit(dt, start);
            }).to.throw('NaN or null'); //TODO (S.Panfilov) should be a const
            //DateUtils.isDateUpperStartLimit.restore();

        });

    });

    describe("isDateLowerEndLimit", function () {

        it("datetime > end limit", function () {
            var dt = new Date(2015, 1, 2).getTime();
            var end = new Date(2015, 1, 1).getTime();

            return expect(DateUtils.isDateLowerEndLimit(dt, end)).to.be.false;
        });

        it("datetime < end limit", function () {
            var dt = new Date(2015, 1, 1).getTime();
            var end = new Date(2015, 1, 2).getTime();

            return expect(DateUtils.isDateLowerEndLimit(dt, end)).to.be.true;
        });

        it("datetime equal end limit", function () {
            var dt = new Date(2015, 1, 1).getTime();
            var end = new Date(2015, 1, 1).getTime();

            return expect(DateUtils.isDateLowerEndLimit(dt, end)).to.be.false;
        });

        it("no datetime", function () {
            var end = new Date(2015, 1, 1).getTime();

            //var spy = sinon.spy(DateUtils, 'isDateLowerEndLimit');
            return expect(function () {
                DateUtils.isDateLowerEndLimit(undefined, end);
            }).to.throw('NaN or null'); //TODO (S.Panfilov) should be a const
            //DateUtils.isDateLowerEndLimit.restore();
        });

        it("no end limit", function () {
            var dt = new Date(2015, 1, 1).getTime();
            return expect(DateUtils.isDateLowerEndLimit(dt, undefined)).to.be.true;
        });

        it("no args", function () {
            return expect(DateUtils.isDateLowerEndLimit()).to.be.true;
        });

        it("string args and datetime < end limit", function () {
            var dt = new Date(2015, 1, 1).getTime().toString();
            var end = new Date(2015, 1, 2).getTime().toString();

            return expect(DateUtils.isDateLowerEndLimit(dt, end)).to.be.true;
        });

        it("string args and datetime > end limit", function () {
            var dt = new Date(2015, 1, 2).getTime().toString();
            var end = new Date(2015, 1, 1).getTime().toString();

            return expect(DateUtils.isDateLowerEndLimit(dt, end)).to.be.false;
        });

        it("string args and datetime equal to end limit", function () {
            var dt = new Date(2015, 1, 1).getTime().toString();
            var end = new Date(2015, 1, 1).getTime().toString();

            return expect(DateUtils.isDateLowerEndLimit(dt, end)).to.be.false;
        });

        it("Infinity end", function () {
            var dt = new Date(2015, 1, 1).getTime();
            var end = Infinity;

            return expect(DateUtils.isDateLowerEndLimit(dt, end)).to.be.true;
        });

        it("Infinity datetime", function () {
            var dt = Infinity;
            var end = new Date(2015, 1, 1).getTime();

            return expect(DateUtils.isDateLowerEndLimit(dt, end)).to.be.false;
        });

        it("NaN datetime", function () {
            var dt = 'Adasdsd';
            var end = new Date(2015, 1, 1).getTime();

            //var spy = sinon.spy(DateUtils, 'isDateLowerEndLimit');
            return expect(function () {
                DateUtils.isDateLowerEndLimit(dt, end);
            }).to.throw('NaN or null'); //TODO (S.Panfilov) should be a const
            //DateUtils.isDateLowerEndLimit.restore();

        });

    });

    describe("isDateBetweenLimits", function () {

        it("start < datetime > end limit", function () {
            var start = new Date(2015, 1, 1).getTime();
            var dt = new Date(2015, 1, 2).getTime();
            var end = new Date(2015, 1, 3).getTime();

            return expect(DateUtils.isDateBetweenLimits(dt, start, end)).to.be.true;
        });

        it("start > datetime < end limit", function () {
            var start = new Date(2015, 1, 4).getTime();
            var dt = new Date(2015, 1, 2).getTime();
            var end = new Date(2015, 1, 3).getTime();

            return expect(DateUtils.isDateBetweenLimits(dt, start, end)).to.be.false;
        });

        it("start > datetime > end limit", function () {
            var start = new Date(2015, 1, 3).getTime();
            var dt = new Date(2015, 1, 2).getTime();
            var end = new Date(2015, 1, 1).getTime();

            return expect(DateUtils.isDateBetweenLimits(dt, start, end)).to.be.false;
        });

        it("start === datetime === end limit", function () {
            var start = new Date(2015, 1, 1).getTime();
            var dt = new Date(2015, 1, 1).getTime();
            var end = new Date(2015, 1, 1).getTime();

            return expect(DateUtils.isDateBetweenLimits(dt, start, end)).to.be.false;
        });

        it("Infinity limits", function () {
            var start = Infinity;
            var dt = new Date(2015, 1, 1).getTime();
            var end = Infinity;

            return expect(DateUtils.isDateBetweenLimits(dt, start, end)).to.be.false;
        });

        it("Infinity end limit", function () {
            var start = new Date(2015, 1, 1).getTime();
            var dt = new Date(2015, 1, 2).getTime();
            var end = Infinity;

            return expect(DateUtils.isDateBetweenLimits(dt, start, end)).to.be.true;
        });

        it("String nums", function () {
            var start = new Date(2015, 1, 1).getTime().toString();
            var dt = new Date(2015, 1, 2).getTime().toString();
            var end = new Date(2015, 1, 3).getTime().toString();

            return expect(DateUtils.isDateBetweenLimits(dt, start, end)).to.be.true;
        });

        //it("NaN limits", function () { //TODO (S.Panfilov) check this case
        //    var start = NaN;
        //    var dt = new Date(2015, 1, 2).getTime();
        //    var end = 'asdasd';
        //
        //    return expect(DateUtils.isDateBetweenLimits(dt, start, end)).to.be.true;
        //});

        it("null limits", function () {
            var dt = new Date(2015, 1, 2).getTime();
            return expect(DateUtils.isDateBetweenLimits(dt, null, null)).to.be.true;//TODO (S.Panfilov) check
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
            var expectVal = 123;
            var method = function () {
                return expectVal;
            };

            return expect(DateUtils._private.getVal(datetime, method)).to.be.equal(expectVal);
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