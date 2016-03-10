/*START.DEV_ONLY*/
'use strict';
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

    var c = {
      isStart: self.start.isExist,
      isEnd: self.end.isExist,
      isDtBeyondStart: (dt > this.start.dt),
      isDtBeyondEnd: (dt > this.end.dt)
    };


    if (c.isStart || c.isEnd) {
      if (!c.isDtBeyondStart) {//start == 1; model == 0
        result = this.start.dt;
      } else if (!c.isDtBeyondEnd){
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
    cases.isStart = true;
  },
  end: {},
  setEnd: function (dt) {
    if (!dt && dt !== 0) return;
    this.end = new x.DateModel(dt);
    cases.isEnd = true;
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