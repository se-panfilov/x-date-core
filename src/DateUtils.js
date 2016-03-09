/*START.DEV_ONLY*/
'use strict';
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
      //TODO (S.Panfilov) should be a const
      if ((!dt && dt !== 0) || Number.isNaN(+dt) || Number.isNaN(+start)) throw 'NaN or null';
      //TODO (S.Panfilov) may be (+dt >= +end)
      return (+dt > +start);
    },
    isDateLowerEndLimit: function (dt, end) {
      if (!end) return true;
      //TODO (S.Panfilov) should be a const
      if (Number.isNaN(+dt) || Number.isNaN(+end)) throw 'NaN or null';
      //TODO (S.Panfilov) may be (+dt <= +end)
      return (+dt < +end);
    },
    isDateBetweenLimits: function (dt, start, end) {
      //TODO (S.Panfilov) lowerAndEqual and UpperAndEqual?
      return (exports.isDateUpperStartLimit(dt, start) && exports.isDateLowerEndLimit(dt, end));
    },
    makeDmyModel: function (dt) {
      return {
        d: exports.getDay(dt),
        m: exports.getMonth(dt),
        y: exports.getYear(dt),
        dt: +dt
      };
    }
  };

  /*START.TESTS_ONLY*/
  exports._private = {};
  exports._private.getVal = getVal;
  /*END.TESTS_ONLY*/

  return exports;
})()/*START.TESTS_ONLY*/;
return exports;
/*END.TESTS_ONLY*/