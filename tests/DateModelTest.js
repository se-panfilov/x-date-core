var expect = require('chai').expect;
var DateModel = require('../src/DateModel.js').DateModel;
var DateUtils = require('../src/DateUtils.js').DateUtils;

describe("DateModel", function () {
    'use strict';

    it("is module a function", function () {
        //TODO (S.Panfilov) didn't sure, may be it should be an object
        expect(DateModel).to.be.a('function');
    });

    describe("DateModel object creation tests", function () {

        var dateTime;

        beforeEach(function () {
            dateTime = new Date().getTime();
        });

        describe("Check day", function () {

            it("Common case", function () {
                var dateModel = new DateModel(dateTime);
                var expectedResult = DateUtils.getDay(dateTime);
                expect(dateModel.d).to.be.equal(expectedResult);
            });

            it("String num", function () {
                var dateModel = new DateModel(dateTime.toString());
                var expectedResult = DateUtils.getDay(dateTime);
                expect(dateModel.d).to.be.equal(expectedResult);
            });

        });

        describe("Check day of week", function () {

            it("Common case", function () {
                var dateModel = new DateModel(dateTime);
                var expectedResult = DateUtils.getDayOfWeek(dateTime);
                expect(dateModel.dow).to.be.equal(expectedResult);
            });

            it("String num", function () {
                var dateModel = new DateModel(dateTime.toString());
                var expectedResult = DateUtils.getDayOfWeek(dateTime);
                expect(dateModel.dow).to.be.equal(expectedResult);
            });

        });

        describe("Check month", function () {

            it("Common case", function () {
                var dateModel = new DateModel(dateTime);
                var expectedResult = DateUtils.getMonth(dateTime);
                expect(dateModel.m).to.be.equal(expectedResult);
            });

            it("String num", function () {
                var dateModel = new DateModel(dateTime.toString());
                var expectedResult = DateUtils.getMonth(dateTime);
                expect(dateModel.m).to.be.equal(expectedResult);
            });

        });

        describe("Check year", function () {

            it("Common case", function () {
                var dateModel = new DateModel(dateTime);
                var expectedResult = DateUtils.getYear(dateTime);
                expect(dateModel.y).to.be.equal(expectedResult);
            });

            it("String num", function () {
                var dateModel = new DateModel(dateTime.toString());
                var expectedResult = DateUtils.getYear(dateTime);
                expect(dateModel.y).to.be.equal(expectedResult);
            });

        });

        describe("Check datetime", function () {

            it("Common case", function () {
                var dateModel = new DateModel(dateTime);
                expect(dateModel.dt).to.be.equal(dateTime);
            });

            it("String num", function () {
                var dateModel = new DateModel(dateTime.toString());
                expect(dateModel.dt).to.be.equal(dateTime);
            });

        });

        describe("Check timezone", function () {

            it("Common case", function () {
                var dateModel = new DateModel(dateTime);
                var expectedResult = new Date(dateTime).getTimezoneOffset();
                expect(dateModel.tz).to.be.equal(expectedResult);
            });

            it("String num", function () {
                var dateModel = new DateModel(dateTime.toString());
                var expectedResult = new Date(dateTime).getTimezoneOffset();
                expect(dateModel.tz).to.be.equal(expectedResult);
            });

        });

        describe("Check Day of week", function () {

            it("Common case", function () {
                var dateTime = new Date().getTime();
                var dateModel = new DateModel(dateTime);
                var expectedResult = DateUtils.getDay(dateTime);
                expect(dateModel.d).to.be.equal(expectedResult);
            });

            it("String num", function () {
                var dateTime = new Date().getTime();
                var dateModel = new DateModel(dateTime.toString());
                var expectedResult = DateUtils.getDay(dateTime);
                expect(dateModel.d).to.be.equal(expectedResult);
            });

        });

    });

    it("NaN", function () {
        return expect(function () {
            var dateModel = new DateModel('random string');
            //TODO (S.Panfilov) NaN or null should be a const
        }).to.throw('NaN or null');
    });

    it("No args", function () {
        return expect(function () {
            var dateModel = new DateModel();
            //TODO (S.Panfilov) NaN or null should be a const
        }).to.throw('NaN or null');
    });

});