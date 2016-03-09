/*START.DEV_ONLY*/
'use strict';
/*END.DEV_ONLY*/

/*START.TESTS_ONLY*/
exports.State = /*END.TESTS_ONLY*/ {
  selected: {},
  setSelected: function (dt) {
    this.selected = x.DateUtils.makeDmyModel(dt);
  },
  start: {},
  setStart: function (dt) {
    this.start = x.DateUtils.makeDmyModel(dt);
  },
  end: {},
  setEnd: function (dt) {
    this.end = x.DateUtils.makeDmyModel(dt);
  },
  setLimits: function (start, end) {
    this.setStart(start);
    this.setEnd(end);
  },
  resetNow: function () {
    this.now = x.DateUtils.makeDmyModel(+(new Date()));
    return this.now;
  },
  now: this.resetNow()
}
  /*START.TESTS_ONLY*/;
return exports;
/*END.TESTS_ONLY*/