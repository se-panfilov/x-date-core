/*START.DEV_ONLY*/
'use strict';
/*END.DEV_ONLY*/

/*START.TESTS_ONLY*/
exports.State = /*END.TESTS_ONLY*/ {
  selected: {},//TODO (S.Panfilov) refactor selected
  setSelected: function (dt) {
    var result;

    var isUpperStart = (dt > this.start.dt);
    var isEqualStart = (dt === this.start.dt);
    var isLowerEnd = (dt > this.end.dt);
    var isEqualEnd = (dt === this.end.dt);

    //start == 1; model == 1 or 2 or 3; end == 3;
    if ((isUpperStart || isEqualStart) || (isLowerEnd || isEqualEnd)) {
      result = new x.DateModel(dt);
    } else if (!isUpperStart) { //start == 1; model == 0
      result = new x.DateModel(this.start);
    } else if (!isUpperStart) { //model == 4; end == 3;
      result = new x.DateModel(this.end.dt);
    } else {//paranoid case
      result = new x.DateModel(+(new Date()));
    }
    
    this.selected = result;
  },
  start: {},
  setStart: function (dt) {
    this.start = new x.DateModel(dt);
    this.start.isExist = true;
  },
  end: {},
  setEnd: function (dt) {
    this.end = new x.DateModel(dt);
    this.end.isExist = true;
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