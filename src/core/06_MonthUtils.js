var MonthUtils = (function (LimitsModel, DateUtils, CommonUtils) {
    'use strict';

    var exports = {
        getMonthList: function (startDateTime, endDateTime, selectedYear) {
            var result;
            var START_MONTH = 0;
            var END_MONTH = 11;

            //TODO (S.Panfilov)  check
            if (startDateTime || endDateTime) {
                var isYearOfLowerLimit = (startDateTime) ? LimitsModel.startDate.year === selectedYear : false;
                var isYearOfUpperLimit = (endDateTime) ? LimitsModel.endDate.year === selectedYear : false;
                var start = (startDateTime) ? LimitsModel.startDate.month : START_MONTH;
                var end = (endDateTime) ? LimitsModel.endDate.month : END_MONTH;

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

            return CommonUtils.intArraySort(result, Settings.monthListDirection);
        }
    };

    return exports;
})(LimitsModel, DateUtils, CommonUtils);