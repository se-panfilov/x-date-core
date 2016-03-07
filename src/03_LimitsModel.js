/*START.DEV_ONLY*/
var module = {
  /*END.DEV_ONLY*/
  //==============================================

  LimitsModel: function (DateUtils) {
    'use strict';

    function LimitsModel(start, end) {

      var exports = {
        start: {},
        end: {},
        now: {}
      };

      function _setStart(dt) {
        exports.start.d = DateUtils.getDay(+dt);
        exports.start.m = DateUtils.getMonth(+dt);
        exports.start.y = DateUtils.getYear(+dt);
        exports.start.dt = +dt;
        //TODO (S.Panfilov) Possible strict violation
        return this;
      }

      function _setEnd(dt) {
        exports.end.d = DateUtils.getDay(+dt);
        exports.end.m = DateUtils.getMonth(+dt);
        exports.end.y = DateUtils.getYear(+dt);
        exports.end.dt = +dt;
        //TODO (S.Panfilov) Possible strict violation
        return this;
      }

      function _setNow() {
        var dt = new Date().getTime();
        exports.now.d = DateUtils.getDay(dt);
        exports.now.m = DateUtils.getMonth(dt);
        exports.now.y = DateUtils.getYear(dt);
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
    }

    return LimitsModel;
  },
  /*START.DEV_ONLY*/
  dev: null
}
/*END.DEV_ONLY*/