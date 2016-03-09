/*START.DEV_ONLY*/
'use strict';
/*END.DEV_ONLY*/

/*START.TESTS_ONLY*/
exports.ListsState = /*END.TESTS_ONLY*/ function () {
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

  exports.list.y = x.YearsUtils.getYearsList();
  exports.list.m = x.MonthUtils.getMonthList();
  exports.list.d = x.DaysUtils.getDaysList();

  //TODO (S.Panfilov) perhaps we should watch model and limits value here and update them

  return exports;
}/*START.TESTS_ONLY*/;
return exports;
/*END.TESTS_ONLY*/