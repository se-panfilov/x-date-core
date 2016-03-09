/*START.DEV_ONLY*/
'use strict';
/*END.DEV_ONLY*/

/*START.TESTS_ONLY*/
exports.DaysUtils = /*END.TESTS_ONLY*/ {
  getDaysList: function () {
    var result;
    var START_DAY = 1;

    var lastDayInMonth = x.DateUtils.getDaysInMonth(x.State.selected.y, x.State.selected.y);

    var isStart = x.State.start.isExist;
    var isEnd = x.State.end.isExist;

    if (isStart || isEnd) {
      var isYearOfLowerLimit = (isStart) ? x.State.start.y === x.State.selected.y : false;
      var isYearOfUpperLimit = (isEnd) ? x.State.end.y === x.State.selected.y : false;
      var isMonthOfLowerLimit = (isStart) ? x.State.start.m === x.State.selected.y : false;
      var isMonthOfUpperLimit = (isEnd) ? x.State.end.m === x.State.selected.y : false;

      var isLowerLimit = (isYearOfLowerLimit && isMonthOfLowerLimit);
      var isUpperLimit = (isYearOfUpperLimit && isMonthOfUpperLimit);

      var start = (isStart) ? x.State.start.d : START_DAY;
      var end = (isEnd) ? x.State.end.d : lastDayInMonth;

      if (isLowerLimit && isUpperLimit) {
        result = x.CommonUtils.getArrayOfNumbers(start, end);
      } else if (isLowerLimit && !isUpperLimit) {
        result = x.CommonUtils.getArrayOfNumbers(start, lastDayInMonth);
      } else if (!isLowerLimit && isUpperLimit) {
        result = x.CommonUtils.getArrayOfNumbers(START_DAY, end);
      } else {  // in all other cases return array of 12 month
        result = x.CommonUtils.getArrayOfNumbers(START_DAY, lastDayInMonth);
      }
    } else {  // in all other cases return array of 12 month
      result = x.CommonUtils.getArrayOfNumbers(START_DAY, lastDayInMonth);
    }

    return x.CommonUtils.intArraySort(result, x.Config.direction.d);
  }
}/*START.TESTS_ONLY*/;
return exports;
/*END.TESTS_ONLY*/