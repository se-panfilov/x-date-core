/*START.DEV_ONLY*/
'use strict';
/*END.DEV_ONLY*/

/*START.TESTS_ONLY*/
exports.MonthUtils = /*END.TESTS_ONLY*/ (function () {
  return {
    getMonthList: function (startDt, endDt, selectedYear) {
      var result;
      var START_MONTH = 0;
      var END_MONTH = 11;

      if (startDt || endDt) {
        var isYearOfLowerLimit = (startDt) ? x.Limits.start.y === selectedYear : false;
        var isYearOfUpperLimit = (endDt) ? x.Limits.end.y === selectedYear : false;
        var start = (startDt) ? x.Limits.start.m : START_MONTH;
        var end = (endDt) ? x.Limits.end.m : END_MONTH;

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

      return x.CommonUtils.intArraySort(result, x.Config.monthDirection);
    }
  };
})()/*START.TESTS_ONLY*/;
return exports;
/*END.TESTS_ONLY*/