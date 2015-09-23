var MonthUtils = (function (LimitsModel, DateUtils, CommonUtils, Config) {
    'use strict';

    var exports = {
        getMonthList: function (startDt, endDt, selectedYear) {
            var result;
            var START_MONTH = 0;
            var END_MONTH = 11;

            //TODO (S.Panfilov)  check
            if (startDt || endDt) {
                var isYearOfLowerLimit = (startDt) ? LimitsModel.start.y === selectedYear : false;
                var isYearOfUpperLimit = (endDt) ? LimitsModel.end.y === selectedYear : false;
                var start = (startDt) ? LimitsModel.start.m : START_MONTH;
                var end = (endDt) ? LimitsModel.end.m : END_MONTH;

                // startYear == 2015, nowYear == 2015, endYear == 2015
                if (isYearOfLowerLimit && isYearOfUpperLimit) {
                    result = CommonUtils.getArrayOfNumbers(start, end);
                }
                // startYear == 2015, nowYear == 2015, endYear == 2016 (or null)
                else if (isYearOfLowerLimit && !isYearOfUpperLimit) {
                    result = CommonUtils.getArrayOfNumbers(start, END_MONTH);
                }
                // startYear == 2014 (or null), nowYear == 2015, endYear == 2015
                else if (!isYearOfLowerLimit && isYearOfUpperLimit) {
                    result = CommonUtils.getArrayOfNumbers(START_MONTH, end);
                }
                else {
                    // in all other cases return array of 12 month
                    result = CommonUtils.getArrayOfNumbers(START_MONTH, END_MONTH);
                }
            } else {
                // in all other cases return array of 12 month
                result = CommonUtils.getArrayOfNumbers(START_MONTH, END_MONTH);
            }

            return CommonUtils.intArraySort(result, Config.monthDirection);
        }
    };

    return exports;
})(LimitsModel, DateUtils, CommonUtils, Config);