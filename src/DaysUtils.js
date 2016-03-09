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
      var isYearOfLowerLimit = (startDt) ? x.Limits.start.y === year : false;
      var isYearOfUpperLimit = (endDt) ? x.Limits.end.y === year : false;
      var isMonthOfLowerLimit = (startDt) ? x.Limits.start.m === month : false;
      var isMonthOfUpperLimit = (endDt) ? x.Limits.end.m === month : false;

      var isLowerLimit = (isYearOfLowerLimit && isMonthOfLowerLimit);
      var isUpperLimit = (isYearOfUpperLimit && isMonthOfUpperLimit);

      var start = (startDt) ? x.Limits.start.d : START_DAY;
      var end = (endDt) ? x.Limits.end.d : lastDayInMonth;

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

    return x.CommonUtils.intArraySort(result, x.Config.daysDirection);
  }
}/*START.TESTS_ONLY*/;
return exports;
/*END.TESTS_ONLY*/