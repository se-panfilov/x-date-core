/*START.DEV_ONLY*/
'use strict';
var x = {};
/*END.DEV_ONLY*/

/*START.TESTS_ONLY*/
exports.DateUtils = /*END.TESTS_ONLY*/ (function () {

  function getVal(dt, method) {
    var date = new Date(+dt);
    return (date && method) ? method.call(date) : null;
  }

  var exports = {
    getDay: function (dt) {
      if (!dt && dt !== 0) return null;
      var method = (x.Config.isUtc) ? Date.prototype.getUTCDate : Date.prototype.getDate;
      return getVal(dt, method);
    },
    getDayOfWeek: function (dt) {
      if (!dt && dt !== 0) return null;
      var method = (x.Config.isUtc) ? Date.prototype.getUTCDay : Date.prototype.getDay;
      return getVal(dt, method);
    },
    getYear: function (dt) {
      if (!dt && dt !== 0) return null;
      var method = (x.Config.isUtc) ? Date.prototype.getUTCFullYear : Date.prototype.getFullYear;
      return getVal(dt, method);
    },
    getMonth: function (dt) {
      if (!dt && dt !== 0) return null;
      var method = (x.Config.isUtc) ? Date.prototype.getUTCMonth : Date.prototype.getMonth;
      return getVal(dt, method);
    },
    getDaysInMonth: function (month, year) {
      var method = (x.Config.isUtc) ? Date.prototype.getUTCDate : Date.prototype.getDate;
      return method.call(new Date(+year, (+month) + 1, 0));
    },
    isValidModel: function (model) {
      return !!model && (!!model.dt || model.dt === 0) && !Number.isNaN(+model.dt) && Number.isFinite(+model.dt);
    },
    isDateUpperStartLimit: function (dt, start) {
      if (!start) return true;
      if ((!dt && dt !== 0) || Number.isNaN(+dt) || Number.isNaN(+start)) throw 'NaN or null';
      return (+dt > +start);
    },
    isDateLowerEndLimit: function (dt, end) {
      if (!end) return true;
      if (Number.isNaN(+dt) || Number.isNaN(+end)) throw 'NaN or null';
      return (+dt < +end);
    },
    isDateBetweenLimits: function (dt, start, end) {
      return (exports.isDateUpperStartLimit(dt, start) && exports.isDateLowerEndLimit(dt, end));
    },
    isYearEqualStart: function (year) {
      return isYearEqualLimit('start', ['y'], year);
    },
    isYearEqualEnd: function (year) {
      return isYearEqualLimit('end', ['y'], year);
    },
    isMonthEqualStart: function (month) {
      return isYearEqualLimit('start', ['m'], month);
    },
    isMonthEqualEnd: function (month) {
      return isYearEqualLimit('end', ['m'], month);
    }
  };

  function isYearEqualLimit(limitName, unit, val) {
    return (x.State[limitName].isExist) ? x.State[limitName][unit] === +val : false;
  }

  /*START.TESTS_ONLY*/
  exports._private = {};
  exports._private.getVal = getVal;
  /*END.TESTS_ONLY*/

  return exports;
})()/*START.TESTS_ONLY*/;
return exports;
/*END.TESTS_ONLY*/