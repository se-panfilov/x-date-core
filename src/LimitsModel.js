/*START.DEV_ONLY*/
'use strict';
/*END.DEV_ONLY*/

/*START.TESTS_ONLY*/
exports.LimitsModel = /*END.TESTS_ONLY*/ function LimitsModel(start, end) {

  var exports = {
    _start: {},
    get start() {
      return exports._start;
    },
    set start(dt) {
      exports._start.d = x.DateUtils.getDay(dt);
      exports._start.m = x.DateUtils.getMonth(dt);
      exports._start.y = x.DateUtils.getYear(dt);
      exports._start.dt = +dt;
    },
    _end: {},
    get end() {
      return exports._end;
    },
    set end(dt) {
      exports._end.d = x.DateUtils.getDay(dt);
      exports._end.m = x.DateUtils.getMonth(dt);
      exports._end.y = x.DateUtils.getYear(dt);
      exports._end.dt = +dt;
    },
    now: {
      d: x.DateUtils.getDay(dt),
      m: x.DateUtils.getMonth(dt),
      y: x.DateUtils.getYear(dt),
      dt: +(new Date())
    }
  };

  return exports;
}
/*START.TESTS_ONLY*/
;return exports;
/*END.TESTS_ONLY*/