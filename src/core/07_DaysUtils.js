var DaysUtils = (function (LimitsModel, DateUtils, CommonUtils, Settings) {
    'use strict';

    var exports = {
        getDaysList: function (startDateTime, endDateTime, selectedYear, selectedMonth) {
            var result;
            var START_DAY = 1;
            var lastDayInMonth = DateUtils.getDaysInMonth(selectedMonth, selectedYear);

            //TODO (S.Panfilov)  check
            if (startDateTime || endDateTime) {
                var isYearOfLowerLimit = (startDateTime) ? LimitsModel.start.y === selectedYear : false;
                var isYearOfUpperLimit = (endDateTime) ? LimitsModel.end.y === selectedYear : false;
                var isMonthOfLowerLimit = (startDateTime) ? LimitsModel.start.m === selectedMonth : false;
                var isMonthOfUpperLimit = (endDateTime) ? LimitsModel.end.m === selectedMonth : false;

                var isLowerLimit = (isYearOfLowerLimit && isMonthOfLowerLimit);
                var isUpperLimit = (isYearOfUpperLimit && isMonthOfUpperLimit);

                var start = (startDateTime) ? LimitsModel.start.d : START_DAY;
                var end = (endDateTime) ? LimitsModel.end.d : lastDayInMonth;

                if (isLowerLimit && isUpperLimit) {
                    result = CommonUtils.getArrayOfNumbers(start, end);
                } else if (isLowerLimit && !isUpperLimit) {
                    result = CommonUtils.getArrayOfNumbers(start, lastDayInMonth);
                } else if (!isLowerLimit && isUpperLimit) {
                    result = CommonUtils.getArrayOfNumbers(START_DAY, end);
                } else {
                    // in all other cases return array of 12 month
                    result = CommonUtils.getArrayOfNumbers(START_DAY, lastDayInMonth);
                }
            } else {
                // in all other cases return array of 12 month
                result = CommonUtils.getArrayOfNumbers(START_DAY, lastDayInMonth);
            }

            return CommonUtils.intArraySort(result, Settings.daysListDirection);
        }
    };

    return exports;
})(LimitsModel, DateUtils, CommonUtils, Settings);