/*START.DEV_ONLY*/
var module = {
  /*END.DEV_ONLY*/

  MonthUtils: function (DateUtils, CommonUtils, Config) {
    /*START.DEV_ONLY*/
    'use strict';
    /*END.DEV_ONLY*/

    return {
      getMonthList: function (startDt, endDt, selectedYear, limitsModel) {
        var result;
        var START_MONTH = 0;
        var END_MONTH = 11;

        if (startDt || endDt) {
          var isYearOfLowerLimit = (startDt) ? limitsModel.start.y === selectedYear : false;
          var isYearOfUpperLimit = (endDt) ? limitsModel.end.y === selectedYear : false;
          var start = (startDt) ? limitsModel.start.m : START_MONTH;
          var end = (endDt) ? limitsModel.end.m : END_MONTH;

          // startYear == 2015, nowYear == 2015, endYear == 2015
          if (isYearOfLowerLimit && isYearOfUpperLimit) {
            result = CommonUtils.getArrayOfNumbers(start, end);
          } else if (isYearOfLowerLimit && !isYearOfUpperLimit) {  // startYear == 2015, nowYear == 2015, endYear == 2016 (or null)
            result = CommonUtils.getArrayOfNumbers(start, END_MONTH);
          } else if (!isYearOfLowerLimit && isYearOfUpperLimit) {  // startYear == 2014 (or null), nowYear == 2015, endYear == 2015
            result = CommonUtils.getArrayOfNumbers(START_MONTH, end);
          } else {  // in all other cases return array of 12 month
            result = CommonUtils.getArrayOfNumbers(START_MONTH, END_MONTH);
          }
        } else {  // in all other cases return array of 12 month
          result = CommonUtils.getArrayOfNumbers(START_MONTH, END_MONTH);
        }

        return CommonUtils.intArraySort(result, Config.monthDirection);
      }
    };
  },

  /*START.DEV_ONLY*/
  dev: null
};
/*END.DEV_ONLY*/