/*START.DEV_ONLY*/
'use strict';
var x = {};
/*END.DEV_ONLY*/

/*START.TESTS_ONLY*/
exports.State = /*END.TESTS_ONLY*/ {
  selected: {},//TODO (S.Panfilov) refactor selected
  setSelected: function (dt, isForce) {
    var result;
    var self = this;

    if (isForce) {
      this.selected = new x.DateModel(dt);
      return;
    }

    var isStart = self.start.isExist;
    var isEnd = self.end.isExist;
    var isDtBeyondStart = (dt > this.start.dt);
    var isDtBeyondEnd = (dt > this.end.dt);


    if (isStart || isEnd) {
      if (!isDtBeyondStart) {
        result = this.start.dt;
      } else if (!isDtBeyondEnd) {
        result = this.end.dt;
      }
    } else {
      result = dt;
    }

    this.selected = new x.DateModel(result);
  },
  start: {},
  setStart: function (dt) {
    if (!dt && dt !== 0) return;
    this.start = new x.DateModel(dt);
    this.start.isStart = true;
  },
  end: {},
  setEnd: function (dt) {
    if (!dt && dt !== 0) return;
    this.end = new x.DateModel(dt);
    this.start.isEnd = true;
  },
  setLimits: function (start, end) {
    this.setStart(start);
    this.setEnd(end);
  },
  resetNow: function () {
    this.now = new x.DateModel(+(new Date()));
  },
  now: null// new x.DateModel(+(new Date())) //TODO (S.Panfilov) FIX it - x is undefined
}
  /*START.TESTS_ONLY*/;
return exports;
/*END.TESTS_ONLY*/