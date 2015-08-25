var MonthUtils = (function (LimitsModel, DateUtils, CommonUtils, Config) {
    'use strict';

    var exports = {
        getMonthList: function (startDateTime, endDateTime, selectedYear) {
            var result;
            var START_MONTH = 0;
            var END_MONTH = 11;

            //TODO (S.Panfilov)  check
            if (startDateTime || endDateTime) {
                var isYearOfLowerLimit = (startDateTime) ? LimitsModel.start.y === selectedYear : false;
                var isYearOfUpperLimit = (endDateTime) ? LimitsModel.end.y === selectedYear : false;
                var start = (startDateTime) ? LimitsModel.start.m : START_MONTH;
                var end = (endDateTime) ? LimitsModel.end.m : END_MONTH;

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

            return CommonUtils.intArraySort(result, Config.monthListDirection);
        }
    };

    return exports;
})(LimitsModel, DateUtils, CommonUtils, Config);