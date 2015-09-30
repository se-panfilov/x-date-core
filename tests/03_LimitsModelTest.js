var expect = require('chai').expect;
var LimitsModel = require('../dist/x-date-core.test_only.js').LimitsModel;

describe("LimitsModel", function () {
    'use strict';

    it("is module a function", function () {
        //TODO (S.Panfilov) didn't sure, may be it should be an object
        expect(LimitsModel).to.be.a('function');
    });

    it("is model values are objects", function () {
        var emptyLimitsModel = new LimitsModel();

        expect(emptyLimitsModel.start).to.be.a('object');
        expect(Object.getPrototypeOf(emptyLimitsModel.start)).to.be.a('object');

        expect(emptyLimitsModel.end).to.be.a('object');
        expect(Object.getPrototypeOf(emptyLimitsModel.end)).to.be.a('object');

        expect(emptyLimitsModel.now).to.be.a('object');
        expect(Object.getPrototypeOf(emptyLimitsModel.now)).to.be.a('object');

        var start = new Date(2015, 2, 3).getTime();
        var end = new Date(2016, 4, 5).getTime();
        var limitsModel = new LimitsModel(start, end);

        expect(limitsModel.start).to.be.a('object');
        expect(Object.getPrototypeOf(limitsModel.start)).to.be.a('object');

        expect(limitsModel.end).to.be.a('object');
        expect(Object.getPrototypeOf(limitsModel.end)).to.be.a('object');

        expect(limitsModel.now).to.be.a('object');
        expect(Object.getPrototypeOf(limitsModel.now)).to.be.a('object');
    });

    function checkStart(start, dateStorage) {
        expect(start.d).to.be.equal(dateStorage.day);
        expect(start.m).to.be.equal(dateStorage.month);
        expect(start.y).to.be.equal(dateStorage.year);
        expect(start.dt).to.be.equal(dateStorage.start);
    }

    function checkEnd(end, dateStorage) {
        expect(end.d).to.be.equal(dateStorage.day + 1);
        expect(end.m).to.be.equal(dateStorage.month + 1);
        expect(end.y).to.be.equal(dateStorage.year + 1);
        expect(end.dt).to.be.equal(dateStorage.end);
    }

    function checkNow(now) {
        var expectedNow = new Date();

        expect(now.d).to.be.equal(expectedNow.getDate());
        expect(now.m).to.be.equal(expectedNow.getMonth());
        expect(now.y).to.be.equal(expectedNow.getFullYear());
        expect(now.dt).to.be.a('Number');
    }

    describe("limitsModel object creation tests", function () {
        var dateStorage = {};
        var limitsModel;

        beforeEach(function () {
            dateStorage.year = 2015;
            dateStorage.month = 2;
            dateStorage.day = 3;
            dateStorage.start = new Date(dateStorage.year, dateStorage.month, dateStorage.day).getTime();
            dateStorage.end = new Date(dateStorage.year + 1, dateStorage.month + 1, dateStorage.day + 1).getTime();
            limitsModel = new LimitsModel(dateStorage.start, dateStorage.end);
        });

        afterEach(function () {
            dateStorage.year = null;
            dateStorage.month = null;
            dateStorage.day = null;
            dateStorage.start = null;
            dateStorage.end = null;
            limitsModel = null;
        });

        describe("Common Case", function () {

            beforeEach(function () {
                limitsModel = new LimitsModel(dateStorage.start, dateStorage.end);
            });

            afterEach(function () {
                limitsModel = null;
            });

            it("Common Case check start", function () {
                checkStart(limitsModel.start, dateStorage);
            });

            it("Common Case check end", function () {
                checkEnd(limitsModel.end, dateStorage);
            });

            it("Common Case check now", function () {
                checkNow(limitsModel.now);
            });
        });

        describe("No `new` keyword case", function () {

            beforeEach(function () {
                limitsModel = LimitsModel(dateStorage.start, dateStorage.end);
            });

            afterEach(function () {
                limitsModel = null;
            });

            it("no `new` keyword check start", function () {
                checkStart(limitsModel.start, dateStorage);
            });

            it("no `new` keyword check end", function () {
                checkEnd(limitsModel.end, dateStorage);
            });

            it("no `new` keyword check now", function () {
                checkNow(limitsModel.now);
            });
        });

        describe("String number case", function () {

            beforeEach(function () {
                limitsModel = LimitsModel(dateStorage.start.toString(), dateStorage.end.toString());
            });

            afterEach(function () {
                limitsModel = null;
            });

            it("no `new` keyword check start", function () {
                checkStart(limitsModel.start, dateStorage);
            });

            it("no `new` keyword check end", function () {
                checkEnd(limitsModel.end, dateStorage);
            });

            it("no `new` keyword check now", function () {
                checkNow(limitsModel.now);
            });
        });

        it("Common Case length check", function () {
            var start = new Date(2015, 1, 1).getTime();
            var end = new Date(2015, 1, 2).getTime();
            var limitsModel = new LimitsModel(start, end);

            var startLength = Object.keys(limitsModel.start).length;
            var endLength = Object.keys(limitsModel.end).length;
            var nowLength = Object.keys(limitsModel.now).length;

            expect(limitsModel.start).to.be.a('object');
            expect(startLength).to.be.greaterThan(0);
            expect(endLength).to.be.greaterThan(0);
            expect(nowLength).to.be.greaterThan(0);
        });

        it("No args", function () {
            var limitsModel = new LimitsModel();
            var startLength = Object.keys(limitsModel.start).length;
            var endLength = Object.keys(limitsModel.end).length;
            var nowLength = Object.keys(limitsModel.now).length;

            expect(limitsModel.start).to.be.a('object');
            expect(startLength).equal(0);

            expect(limitsModel.end).to.be.a('object');
            expect(endLength).equal(0);

            expect(limitsModel.now).to.be.a('object');
            expect(nowLength).to.be.greaterThan(0);
        });
    });

    describe("test privates", function () {

        var limitModel;
        var startYear;
        var startMonth;
        var startDay;
        var endYear;
        var endMonth;
        var endDay;
        var start;
        var end;

        beforeEach(function () {
            startYear = 2015;
            startMonth = 2;
            startDay = 3;
            endYear = 2016;
            endMonth = 4;
            endDay = 5;
            start = new Date(startYear, startMonth, startDay).getTime();
            end = new Date(endYear, endMonth, endDay).getTime();

            limitModel = new LimitsModel(start, end);
        });

        afterEach(function () {
            limitModel = null;
        });

        describe("setStart", function () {
            it("Check start changed", function () {
                var expectedDay = startDay + 5;
                var expectedMonth = startMonth + 5;
                var expectedYear = startYear + 5;
                var date = new Date(expectedYear, expectedMonth, expectedDay);
                var expectedDT = date.getTime();

                expect(limitModel.start.dt).to.be.equal(start);
                expect(limitModel.start.d).to.be.equal(startDay);
                expect(limitModel.start.m).to.be.equal(startMonth);
                expect(limitModel.start.y).to.be.equal(startYear);

                limitModel._private._setStart(expectedDT);

                expect(limitModel.start.dt).to.be.equal(expectedDT);
                expect(limitModel.start.d).to.be.equal(expectedDay);
                expect(limitModel.start.m).to.be.equal(expectedMonth);
                expect(limitModel.start.y).to.be.equal(expectedYear)
            });

            it("Check end NOT changed", function () {
                expect(limitModel.end.dt).to.be.equal(end);
                expect(limitModel.end.d).to.be.equal(endDay);
                expect(limitModel.end.m).to.be.equal(endMonth);
                expect(limitModel.end.y).to.be.equal(endYear);

                limitModel._private._setStart(123);

                expect(limitModel.end.dt).to.be.equal(end);
                expect(limitModel.end.d).to.be.equal(endDay);
                expect(limitModel.end.m).to.be.equal(endMonth);
                expect(limitModel.end.y).to.be.equal(endYear);
            });

            it("Check now NOT changed", function () {

                var nowDate = new Date();
                var nowDay = nowDate.getDate();
                var nowMonth = nowDate.getMonth();
                var nowYear = nowDate.getFullYear();
                var nowDateTime = limitModel.now.dt;

                expect(limitModel.now.d).to.be.equal(nowDay);
                expect(limitModel.now.m).to.be.equal(nowMonth);
                expect(limitModel.now.y).to.be.equal(nowYear);

                limitModel._private._setStart(123);

                expect(limitModel.now.dt).to.be.equal(nowDateTime);
                expect(limitModel.now.d).to.be.equal(nowDay);
                expect(limitModel.now.m).to.be.equal(nowMonth);
                expect(limitModel.now.y).to.be.equal(nowYear);
            });


        });

        describe("setEnd", function () {

            it("Check end changed", function () {
                var expectedDay = endDay + 5;
                var expectedMonth = endMonth + 5;
                var expectedYear = endYear + 5;
                var date = new Date(expectedYear, expectedMonth, expectedDay);
                var expectedDT = date.getTime();

                expect(limitModel.end.dt).to.be.equal(end);
                expect(limitModel.end.d).to.be.equal(endDay);
                expect(limitModel.end.m).to.be.equal(endMonth);
                expect(limitModel.end.y).to.be.equal(endYear);

                limitModel._private._setEnd(expectedDT);

                expect(limitModel.end.dt).to.be.equal(expectedDT);
                expect(limitModel.end.d).to.be.equal(expectedDay);
                expect(limitModel.end.m).to.be.equal(expectedMonth);
                expect(limitModel.end.y).to.be.equal(expectedYear)
            });

            it("Check start NOT changed", function () {
                expect(limitModel.start.dt).to.be.equal(start);
                expect(limitModel.start.d).to.be.equal(startDay);
                expect(limitModel.start.m).to.be.equal(startMonth);
                expect(limitModel.start.y).to.be.equal(startYear);

                limitModel._private._setEnd(123);

                expect(limitModel.start.dt).to.be.equal(start);
                expect(limitModel.start.d).to.be.equal(startDay);
                expect(limitModel.start.m).to.be.equal(startMonth);
                expect(limitModel.start.y).to.be.equal(startYear);
            });

            it("Check now NOT changed", function () {

                var nowDate = new Date();
                var nowDay = nowDate.getDate();
                var nowMonth = nowDate.getMonth();
                var nowYear = nowDate.getFullYear();
                var nowDateTime = limitModel.now.dt;

                expect(limitModel.now.d).to.be.equal(nowDay);
                expect(limitModel.now.m).to.be.equal(nowMonth);
                expect(limitModel.now.y).to.be.equal(nowYear);

                limitModel._private._setEnd(123);

                expect(limitModel.now.dt).to.be.equal(nowDateTime);
                expect(limitModel.now.d).to.be.equal(nowDay);
                expect(limitModel.now.m).to.be.equal(nowMonth);
                expect(limitModel.now.y).to.be.equal(nowYear);
            });

            describe("setEnd", function () {

                it("Check end NOT changed", function () {
                    expect(limitModel.end.dt).to.be.equal(end);
                    expect(limitModel.end.d).to.be.equal(endDay);
                    expect(limitModel.end.m).to.be.equal(endMonth);
                    expect(limitModel.end.y).to.be.equal(endYear);

                    limitModel._private._setStart(123);

                    expect(limitModel.end.dt).to.be.equal(end);
                    expect(limitModel.end.d).to.be.equal(endDay);
                    expect(limitModel.end.m).to.be.equal(endMonth);
                    expect(limitModel.end.y).to.be.equal(endYear);
                });

                it("Check start NOT changed", function () {
                    expect(limitModel.start.dt).to.be.equal(start);
                    expect(limitModel.start.d).to.be.equal(startDay);
                    expect(limitModel.start.m).to.be.equal(startMonth);
                    expect(limitModel.start.y).to.be.equal(startYear);

                    limitModel._private._setEnd(123);

                    expect(limitModel.start.dt).to.be.equal(start);
                    expect(limitModel.start.d).to.be.equal(startDay);
                    expect(limitModel.start.m).to.be.equal(startMonth);
                    expect(limitModel.start.y).to.be.equal(startYear);
                });

                it("Check now changed", function () {
                    var nowDateTime = limitModel.now.dt;

                    expect(limitModel.now.dt).to.be.equal(nowDateTime);

                    setTimeout(function () {
                        limitModel._private._setNow();

                        expect(limitModel.now.dt).to.be.above(nowDateTime);
                    }, 100);

                });


            });
        });
    });
});