/*START.DEV_ONLY*/
'use strict';
/*END.DEV_ONLY*/

/*START.TESTS_ONLY*/
exports.LimitsModel = /*END.TESTS_ONLY*/ (function () {
  return function LimitsModel(start, end) {

    var exports = {
      start: {},
      end: {},
      now: {}
    };

    function _setStart(dt) {
      exports.start.d = x.DateUtils.getDay(+dt);
      exports.start.m = x.DateUtils.getMonth(+dt);
      exports.start.y = x.DateUtils.getYear(+dt);
      exports.start.dt = +dt;
      //TODO (S.Panfilov) Possible strict violation
      return this;
    }

    function _setEnd(dt) {
      exports.end.d = x.DateUtils.getDay(+dt);
      exports.end.m = x.DateUtils.getMonth(+dt);
      exports.end.y = x.DateUtils.getYear(+dt);
      exports.end.dt = +dt;
      //TODO (S.Panfilov) Possible strict violation
      return this;
    }

    function _setNow() {
      var dt = new Date().getTime();
      exports.now.d = x.DateUtils.getDay(dt);
      exports.now.m = x.DateUtils.getMonth(dt);
      exports.now.y = x.DateUtils.getYear(dt);
      exports.now.dt = dt;
      //TODO (S.Panfilov) Possible strict violation
      return this;
    }

    if (start) _setStart(start);
    if (end) _setEnd(end);
    _setNow();

    /*START.TESTS_ONLY*/
    exports._private = {};
    exports._private._setStart = _setStart;
    exports._private._setEnd = _setEnd;
    exports._private._setNow = _setNow;
    /*END.TESTS_ONLY*/

    return exports;
  };
})()/*START.TESTS_ONLY*/;
return exports;
/*END.TESTS_ONLY*/