/*START.DEV_ONLY*/
'use strict';
/*END.DEV_ONLY*/

/*START.TESTS_ONLY*/
exports.DataClass = /*END.TESTS_ONLY*/ function (model, start, end) {
  var exports = {
    list: {
      y: null,
      m: null,
      d: null
    },
    reloadYearsList: function () {
      exports.list.y = x.YearsUtils.getYearsList();
    },
    reloadMonthList: function () {
      exports.list.m = x.MonthUtils.getMonthList();
    },
    reloadDaysList: function () {
      exports.list.d = x.DaysUtils.getDaysList();
    }
  };

  model.dt = x.CommonUtils.isValidNumber(model.dt) ? model.dt : null;
  start = x.CommonUtils.isValidNumber(start) ? start : null;
  end = x.CommonUtils.isValidNumber(end) ? end : null;

  x.State.setLimits(start, end);
  x.State.setSelected(model.dt);

  exports.list.y = x.YearsUtils.getYearsList();
  exports.list.m = x.MonthUtils.getMonthList();
  exports.list.d = x.DaysUtils.getDaysList();

  //TODO (S.Panfilov) perhaps we should watch model and limits value here and update them

  return exports;
}/*START.TESTS_ONLY*/;
return exports;
/*END.TESTS_ONLY*/