/*START.DEV_ONLY*/
'use strict';
/*END.DEV_ONLY*/

/*START.TESTS_ONLY*/
exports.DataClass = /*END.TESTS_ONLY*/ (function () {

  function _getSelected(model, start, end) {
    var result;

    var isUpperStart = (model.dt > start);
    var isEqualStart = (model.dt === start);
    var isLowerEnd = (model.dt > end);
    var isEqualEnd = (model.dt === end);

    //start == 1; model == 1 or 2 or 3; end == 3;
    if ((isUpperStart || isEqualStart) || (isLowerEnd || isEqualEnd)) {
      result = new x.DateModel(model.dt);
    } else if (!isUpperStart) { //start == 1; model == 0
      result = new x.DateModel(start);
    } else if (!isUpperStart) { //model == 4; end == 3;
      result = new x.DateModel(end);
    } else {//paranoid case
      result = new x.DateModel(new Date().getTime());
    }

    return result;
  }

  return function (model, start, end) {

    var _data = {
      _start: null,
      _end: null
    };

    var exports = {
      selected: {},
      list: {
        y: null,
        m: null,
        d: null
      },
      reloadYearsList: function () {
        exports.list.y = x.YearsUtils.getYearsList();
        return this;
      },
      reloadMonthList: function () {
        exports.list.m = x.MonthUtils.getMonthList();
        return this;
      },
      reloadDaysList: function () {
        exports.list.d = x.DaysUtils.getDaysList();
        return this;
      }
    };

    model.dt = x.CommonUtils.isValidNumber(model.dt) ? model.dt : null;
    start = x.CommonUtils.isValidNumber(start) ? start : null;
    end = x.CommonUtils.isValidNumber(end) ? end : null;

    exports.selected = _getSelected(model, start, end);

    x.State.setLimits(start, end);
    _data._start = start;
    _data._end = end;

    exports.list.y = x.YearsUtils.getYearsList();
    exports.list.m = x.MonthUtils.getMonthList();
    exports.list.d = x.DaysUtils.getDaysList();

    return exports;
  }
})()/*START.TESTS_ONLY*/;
return exports;
/*END.TESTS_ONLY*/