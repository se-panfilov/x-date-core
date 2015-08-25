var DaysUtils = (function (LimitsModel, DateUtils, CommonUtils) {
    'use strict';

    var exports = {
        getDaysList: function (startDateTime, endDateTime, selectedYear, selectedMonth) {
            var result;
            var START_DAY = 1;
            var lastDayInMonth = DataClass.getDaysInMonth(selectedMonth, selectedYear);

            //TODO (S.Panfilov)  check
            if (startDateTime || endDateTime) {
                var isYearOfLowerLimit = (startDateTime) ? LimitsModel.startDate.year === selectedYear : false;
                var isYearOfUpperLimit = (endDateTime) ? LimitsModel.endDate.year === selectedYear : false;
                var isMonthOfLowerLimit = (startDateTime) ? LimitsModel.startDate.month === selectedMonth : false;
                var isMonthOfUpperLimit = (endDateTime) ? LimitsModel.endDate.month === selectedMonth : false;

                var isLowerLimit = (isYearOfLowerLimit && isMonthOfLowerLimit);
                var isUpperLimit = (isYearOfUpperLimit && isMonthOfUpperLimit);

                var start = (startDateTime) ? LimitsModel.startDate.day : START_DAY;
                var end = (endDateTime) ? LimitsModel.endDate.day : lastDayInMonth;

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
})(LimitsModel, DateUtils, CommonUtils);