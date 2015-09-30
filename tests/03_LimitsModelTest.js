var expect = require('chai').expect;
var LimitsModel = require('../dist/x-date-core.test_only.js').LimitsModel;

describe("LimitsModel", function () {

    it("is module a function", function () {
        expect(LimitsModel).to.be.a('function');
    });

    it("is model values are objects", function () {
        var limitsModel = new LimitsModel();

        expect(limitsModel.start).to.be.a('object');
        expect(Object.getPrototypeOf(limitsModel.start)).to.be.a('object');

        expect(limitsModel.end).to.be.a('object');
        expect(Object.getPrototypeOf(limitsModel.end)).to.be.a('object');

        expect(limitsModel.now).to.be.a('object');
        expect(Object.getPrototypeOf(limitsModel.now)).to.be.a('object');
    });

    it("Common Case check start", function () {
        var year = 2015;
        var month = 2;
        var day = 3;
        var start = new Date(year, month, day).getTime();
        var end = new Date(year, month, day + 1).getTime();
        var limitsModel = new LimitsModel(start, end);

        expect(limitsModel.start.d).to.be.equal(day);
        expect(limitsModel.start.m).to.be.equal(month);
        expect(limitsModel.start.y).to.be.equal(year);
        expect(limitsModel.start.dt).to.be.equal(start);
    });

    it("Common Case check end", function () {
        var year = 2015;
        var month = 2;
        var day = 3;
        var start = new Date(year, month, day).getTime();
        var end = new Date(year, month, day + 1).getTime();
        var limitsModel = new LimitsModel(start, end);

        expect(limitsModel.end.d).to.be.equal(day + 1);
        expect(limitsModel.end.m).to.be.equal(month);
        expect(limitsModel.end.y).to.be.equal(year);
        expect(limitsModel.end.dt).to.be.equal(end);
    });

    it("Common Case check now", function () {
        var start = new Date(2015, 2, 3).getTime();
        var end = new Date(2016, 4, 5).getTime();
        var expectedNow = new Date();
        var limitsModel = new LimitsModel(start, end);

        expect(limitsModel.now.d).to.be.equal(expectedNow.getDate());
        expect(limitsModel.now.m).to.be.equal(expectedNow.getMonth());
        expect(limitsModel.now.y).to.be.equal(expectedNow.getFullYear());
        expect(limitsModel.now.dt).to.be.a('Number');
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