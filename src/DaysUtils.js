/*START.DEV_ONLY*/
'use strict';
/*END.DEV_ONLY*/

/*START.TESTS_ONLY*/
exports.DaysUtils = /*END.TESTS_ONLY*/ {
  getDaysList: function (startDt, endDt, year, month) {
    var result;
    var START_DAY = 1;
    var lastDayInMonth = x.DateUtils.getDaysInMonth(month, year);

    if (startDt || endDt) {
      var isYearOfLowerLimit = (startDt) ? x.State.start.y === year : false;
      var isYearOfUpperLimit = (endDt) ? x.State.end.y === year : false;
      var isMonthOfLowerLimit = (startDt) ? x.State.start.m === month : false;
      var isMonthOfUpperLimit = (endDt) ? x.State.end.m === month : false;

      var isLowerLimit = (isYearOfLowerLimit && isMonthOfLowerLimit);
      var isUpperLimit = (isYearOfUpperLimit && isMonthOfUpperLimit);

      var start = (startDt) ? x.State.start.d : START_DAY;
      var end = (endDt) ? x.State.end.d : lastDayInMonth;

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