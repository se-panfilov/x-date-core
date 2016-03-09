/*START.DEV_ONLY*/
'use strict';
/*END.DEV_ONLY*/

/*START.TESTS_ONLY*/
exports.ListsState = /*END.TESTS_ONLY*/ {
  list: {},
  reloadDaysList: function () {
    this.list.d = x.DaysUtils.getDaysList();
  },
  reloadMonthList: function () {
    this.list.m = x.MonthUtils.getMonthList();
  },
  reloadYearsList: function () {
    this.list.y = x.YearsUtils.getYearsList();
  },
  initList: function () {
    this.reloadDaysList();
    this.reloadMonthList();
    this.reloadYearsList();
  }
}/*START.TESTS_ONLY*/;
return exports;
/*END.TESTS_ONLY*/