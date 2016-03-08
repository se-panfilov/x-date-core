/*START.DEV_ONLY*/
'use strict';
/*END.DEV_ONLY*/

/*START.TESTS_ONLY*/
this.DateUtils = require('../src/DateUtils.js');
this.CommonUtils = require('../src/CommonUtils.js');
this.Config = require('../src/Config.js');

exports.DaysUtils = /*END.TESTS_ONLY*/ (function (DateUtils, CommonUtils, Config) {
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
})(this.DateUtils, this.CommonUtils, this.Config)/*START.TESTS_ONLY*/;
return exports;
/*END.TESTS_ONLY*/