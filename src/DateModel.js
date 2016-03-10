/*START.DEV_ONLY*/
'use strict';
var x = {};
/*END.DEV_ONLY*/

/*START.TESTS_ONLY*/
exports.DateModel = /*END.TESTS_ONLY*/ (function () {
  return function DateModel(dt) {
    if (!dt || Number.isNaN(+dt) || !Number.isFinite(+dt)) throw 'NaN or null';
    this.d = x.DateUtils.getDay(+dt);
    this.dow = x.DateUtils.getDayOfWeek(+dt);
    this.m = x.DateUtils.getMonth(+dt);
    this.y = x.DateUtils.getYear(+dt);
    this.dt = +dt;
    this.tz = new Date(+dt).getTimezoneOffset();

    return this;
  };
})()/*START.TESTS_ONLY*/;
return exports;
/*END.TESTS_ONLY*/