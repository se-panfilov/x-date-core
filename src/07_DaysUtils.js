/*START.DEV_ONLY*/
var module = {
  /*END.DEV_ONLY*/
  //==============================================

  DaysUtils: function (DateUtils, CommonUtils, Config) {
    'use strict';

    return {
      getDaysList: function (startDt, endDt, year, month, limitsModel) {
        var result;
        var START_DAY = 1;
        var lastDayInMonth = DateUtils.getDaysInMonth(month, year);

        if (startDt || endDt) {
          var isYearOfLowerLimit = (startDt) ? limitsModel.start.y === year : false;
          var isYearOfUpperLimit = (endDt) ? limitsModel.end.y === year : false;
          var isMonthOfLowerLimit = (startDt) ? limitsModel.start.m === month : false;
          var isMonthOfUpperLimit = (endDt) ? limitsModel.end.m === month : false;

          var isLowerLimit = (isYearOfLowerLimit && isMonthOfLowerLimit);
          var isUpperLimit = (isYearOfUpperLimit && isMonthOfUpperLimit);

          var start = (startDt) ? limitsModel.start.d : START_DAY;
          var end = (endDt) ? limitsModel.end.d : lastDayInMonth;

          if (isLowerLimit && isUpperLimit) {
            result = CommonUtils.getArrayOfNumbers(start, end);
          } else if (isLowerLimit && !isUpperLimit) {
            result = CommonUtils.getArrayOfNumbers(start, lastDayInMonth);
          } else if (!isLowerLimit && isUpperLimit) {
            result = CommonUtils.getArrayOfNumbers(START_DAY, end);
          } else {  // in all other cases return array of 12 month
            result = CommonUtils.getArrayOfNumbers(START_DAY, lastDayInMonth);
          }
        } else {  // in all other cases return array of 12 month
          result = CommonUtils.getArrayOfNumbers(START_DAY, lastDayInMonth);
        }

        return CommonUtils.intArraySort(result, Config.daysDirection);
      }
    };
  },

//==============================================
  /*START.DEV_ONLY*/
  dev: null
};
/*END.DEV_ONLY*/