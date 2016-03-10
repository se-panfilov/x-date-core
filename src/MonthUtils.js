/*START.DEV_ONLY*/
'use strict';
var x = {};
var exports = {};
/*END.DEV_ONLY*/

/*START.TESTS_ONLY*/
exports.MonthUtils = /*END.TESTS_ONLY*/ {
  getMonthList: function () {
    var result;
    var START_MONTH = 0;
    var END_MONTH = 11;

    var isStart = x.State.start.isExist;
    var isEnd = x.State.end.isExist;

    if (isStart || isEnd) {
      var isYearOfLowerLimit = (isStart) ? x.State.start.y === x.State.selected.y : false;
      var isYearOfUpperLimit = (isEnd) ? x.State.end.y === x.State.selected.y : false;
      var start = (isStart) ? x.State.start.m : START_MONTH;
      var end = (isEnd) ? x.State.end.m : END_MONTH;

      // startYear == 2015, nowYear == 2015, endYear == 2015
      if (isYearOfLowerLimit && isYearOfUpperLimit) {
        result = x.CommonUtils.getArrayOfNumbers(start, end);
      } else if (isYearOfLowerLimit && !isYearOfUpperLimit) {  // startYear == 2015, nowYear == 2015, endYear == 2016 (or null)
        result = x.CommonUtils.getArrayOfNumbers(start, END_MONTH);
      } else if (!isYearOfLowerLimit && isYearOfUpperLimit) {  // startYear == 2014 (or null), nowYear == 2015, endYear == 2015
        result = x.CommonUtils.getArrayOfNumbers(START_MONTH, end);
      } else {  // in all other cases return array of 12 month
        result = x.CommonUtils.getArrayOfNumbers(START_MONTH, END_MONTH);
      }
    } else {  // in all other cases return array of 12 month
      result = x.CommonUtils.getArrayOfNumbers(START_MONTH, END_MONTH);
    }

    return x.CommonUtils.intArraySort(result, x.Config.direction.m);
  }
}
  /*START.TESTS_ONLY*/;
return exports;
/*END.TESTS_ONLY*/