/*START.DEV_ONLY*/
'use strict';
/*END.DEV_ONLY*/

/*START.TESTS_ONLY*/
exports.State = /*END.TESTS_ONLY*/ {
  selected: {},//TODO (S.Panfilov) refactor selected
  setSelected: function (dt) {
    var result;

    var cases = {
      isDtUpperStart: (dt > this.start.dt),
      isDtEqualStart: (dt === this.start.dt),
      isDtLowerEnd: (dt > this.end.dt),
      isDtEqualEnd: (dt === this.end.dt)
    };

    //if (!this.start.isExist && !this.end.isExist) { //start == null; model == 1; end == null
    //  result = dt;
    //} else if (this.start.isExist && this.end.isExist) {//Start Limit
    //  if (!cases.isDtUpperStart) { //start == 1; model == 0
    //    result = this.start.dt;
    //  } else {
    //    result = dt;//start == 1; model == 1 or 2
    //  }
    //} else if (!this.start.isExist && this.end.isExist) {//End Limit
    //  if (!cases.isDtLowerEnd) { //model == 4; end == 3;
    //    result = this.end.dt;
    //  } else {
    //    result = dt;//model == 2 or 3; end == 3;
    //  }
    //} else if (this.start.isExist && this.end.isExist) {//Both Limits
    //  if ((cases.isDtUpperStart || cases.isDtEqualStart) || (cases.isDtLowerEnd || cases.isDtEqualEnd)) {//start == 1; model == 1 or 2 or 3; end == 3;
    //    result = dt;
    //  }
    //}

    var isUpperStart = (dt > this.start.dt);
    var isEqualStart = (dt === this.start.dt);
    var isLowerEnd = (dt > this.end.dt);
    var isEqualEnd = (dt === this.end.dt);

    if ((isUpperStart || isEqualStart) || (isLowerEnd || isEqualEnd)) {
      result = dt;
    } else if (!isUpperStart && this.start.isExist) { //start == 1; model == 0
      result = this.start;
    } else if (!isLowerEnd && this.end.isExist) { //model == 4; end == 3;
      result = this.end.dt;
    } else {//paranoid case
      result = +(new Date());
    }


    this.selected = new x.DateModel(result);
  },
  start: {},
  setStart: function (dt) {
    if (!dt && dt !== 0) return;
    this.start = new x.DateModel(dt);
    this.start.isExist = true;
  },
  end: {},
  setEnd: function (dt) {
    if (!dt && dt !== 0) return;
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