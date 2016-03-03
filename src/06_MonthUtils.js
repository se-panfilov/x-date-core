exports.MonthUtils = (function (DateUtils, CommonUtils, Config) {
    'use strict';

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
}(exports.DateUtils, exports.CommonUtils, exports.Config));