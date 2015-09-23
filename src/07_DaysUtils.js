exports.DaysUtils = (function (LimitsModel, DateUtils, CommonUtils, Config) {
    'use strict';

    var exports = {
        getDaysList: function (startDt, endDt, year, month) {
            var result;
            var START_DAY = 1;
            var lastDayInMonth = DateUtils.getDaysInMonth(month, year);

            //TODO (S.Panfilov)  check
            if (startDt || endDt) {
                var isYearOfLowerLimit = (startDt) ? LimitsModel.start.y === year : false;
                var isYearOfUpperLimit = (endDt) ? LimitsModel.end.y === year : false;
                var isMonthOfLowerLimit = (startDt) ? LimitsModel.start.m === month : false;
                var isMonthOfUpperLimit = (endDt) ? LimitsModel.end.m === month : false;

                var isLowerLimit = (isYearOfLowerLimit && isMonthOfLowerLimit);
                var isUpperLimit = (isYearOfUpperLimit && isMonthOfUpperLimit);

                var start = (startDt) ? LimitsModel.start.d : START_DAY;
                var end = (endDt) ? LimitsModel.end.d : lastDayInMonth;

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

            return CommonUtils.intArraySort(result, Config.daysDirection);
        }
    };

    return exports;
})(exports.LimitsModel, exports.DateUtils, exports.CommonUtils, exports.Config);