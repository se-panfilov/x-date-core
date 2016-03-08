/*START.DEV_ONLY*/
'use strict';
/*END.DEV_ONLY*/

/*START.TESTS_ONLY*/
this.DateUtils = require('../src/DateUtils.js').DateUtils;

exports.DateModel = /*END.TESTS_ONLY*/ (function (DateUtils) {
  return function DateModel(dt) {
    if (!dt || Number.isNaN(+dt) || !Number.isFinite(+dt)) throw 'NaN or null';
    this.d = DateUtils.getDay(+dt);
    this.dow = DateUtils.getDayOfWeek(+dt);
    this.m = DateUtils.getMonth(+dt);
    this.y = DateUtils.getYear(+dt);
    this.dt = +dt;
    this.tz = new Date(+dt).getTimezoneOffset();

    return this;
  };
})(this.DateUtils)

/*START.TESTS_ONLY*/; return exports;/*END.TESTS_ONLY*/