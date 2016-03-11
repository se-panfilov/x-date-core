/*START.DEV_ONLY*/
'use strict';
var x = {};
/*END.DEV_ONLY*/

/*START.TESTS_ONLY*/
exports.DateUtils = /*END.TESTS_ONLY*/ (function () {

  function isDtUndefined(dt) {
    return (!dt && dt !== 0);
  }

  function executeMethod(methodName) {
    if (isDtUndefined(dt)) return null;
    var str = (x.Config.isUtc) ? 'UTC' : '';
    return (new Date(+dt))['get' + str + methodName]();
  }

  function isYearEqualLimit(limitName, unit, val) {
    return (x.State[limitName].isExist) ? x.State[limitName][unit] === +val : false;
  }

  function isValidNum(num) {
    return !Number.isNaN(+num) && Number.isFinite(+num);
  }

  var exports = {
    getDay: function (dt) {
      return executeMethod(dt, 'Date');
    },
    getDayOfWeek: function (dt) {
      return executeMethod(dt, 'Day');
    },
    getYear: function (dt) {
      return executeMethod(dt, 'FullYear');
    },
    getMonth: function (dt) {
      return executeMethod(dt, 'Month');
    },
    getDaysInMonth: function (month, year) {
      var method = (x.Config.isUtc) ? Date.prototype.getUTCDate : Date.prototype.getDate;
      return method.call(new Date(+year, (+month) + 1, 0));
    },
    isValidModel: function (model) {
      return !!model && (!!model.dt || model.dt === 0) && !isValidNum(model.dt);
    },
    isDateUpperStartLimit: function (dt, start) {
      if (!start) return true;
      if (isDtUndefined(dt) || !isValidNum(dt) || !isValidNum(start)) throw 'NaN or null';
      return (+dt > +start);
    },
    isDateLowerEndLimit: function (dt, end) {
      if (!end) return true;
      if (!isValidNum(dt) || !isValidNum(end)) throw 'NaN or null';
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

  /*START.TESTS_ONLY*/
  exports._private = {};
  /*END.TESTS_ONLY*/

  return exports;
})()/*START.TESTS_ONLY*/;
return exports;
/*END.TESTS_ONLY*/