/*START.DEV_ONLY*/
'use strict';
/*END.DEV_ONLY*/

/*START.TESTS_ONLY*/
exports.limits = /*END.TESTS_ONLY*/ {
  _start: {},
  get start() {
    return this._start;
  },
  set start(dt) {
    this._start.d = x.DateUtils.getDay(dt);
    this._start.m = x.DateUtils.getMonth(dt);
    this._start.y = x.DateUtils.getYear(dt);
    this._start.dt = +dt;
  },
  _end: {},
  get end() {
    return this._end;
  },
  set end(dt) {
    this._end.d = x.DateUtils.getDay(dt);
    this._end.m = x.DateUtils.getMonth(dt);
    this._end.y = x.DateUtils.getYear(dt);
    this._end.dt = +dt;
  },
  now: {
    d: x.DateUtils.getDay(dt),
    m: x.DateUtils.getMonth(dt),
    y: x.DateUtils.getYear(dt),
    dt: +(new Date())
  }
}
  /*START.TESTS_ONLY*/;
return exports;
/*END.TESTS_ONLY*/