var YearsUtils = (function (LimitsModel, DateUtils, CommonUtils) {
    'use strict';

    var exports = {
        getYearsList: function (startDateTime, endDateTime) {
            var result = [];
            var DEFAULT_YEARS_COUNT = 10;

            var start = LimitsModel.startDate.year;
            var end = LimitsModel.endDate.year;
            var now = LimitsModel.nowDate.year;
            var selectedYear = DateUtils.getYear(this.selected.datetime);
            var latestPossibleYear = (selectedYear > now) ? selectedYear : now;
            var firstPossibleYear = (selectedYear < now) ? selectedYear : now;
            latestPossibleYear = latestPossibleYear + (DEFAULT_YEARS_COUNT - 1);
            firstPossibleYear = firstPossibleYear - (DEFAULT_YEARS_COUNT - 1);

            //start = 2011, end = 2014
            if ((startDateTime && endDateTime) && (startDateTime < endDateTime)) {
                result = CommonUtils.getArrayOfNumbers(start, end);
            }

            //start = 2014, end = 2011
            else if ((startDateTime && endDateTime) && (startDateTime > endDateTime)) {
                result = CommonUtils.getArrayOfNumbers(end, start);
            }

            //start = 2011, end = 2011
            else if ((startDateTime && endDateTime) && (startDateTime === endDateTime)) {
                result = CommonUtils.getArrayOfNumbers(start, end);
            }

            //start = 2014, end = null
            else if (startDateTime && !endDateTime) {
                result = CommonUtils.getArrayOfNumbers(start, latestPossibleYear);
            }

            //start = null, end = 2014
            else if (!startDateTime && endDateTime) {
                //now = 2013 (or 2014),  end = 2014
                if (LimitsModel.endDate.year >= LimitsModel.nowDate.year) {

                    if ((firstPossibleYear - DEFAULT_YEARS_COUNT) > (end - DEFAULT_YEARS_COUNT)) {
                        result = CommonUtils.getArrayOfNumbers(firstPossibleYear, end);
                    } else {
                        result = CommonUtils.getArrayOfNumbers(end - (DEFAULT_YEARS_COUNT - 1), end);
                    }

                }
                //now = 2015,  end = 2014
                else if (LimitsModel.endDate.year > LimitsModel.nowDate.year) {
                    result = CommonUtils.getArrayOfNumbers(end - (DEFAULT_YEARS_COUNT - 1), end);
                }

            }

            //start = null, end = null
            else if (!startDateTime && !endDateTime) {
                result = CommonUtils.getArrayOfNumbers(firstPossibleYear, latestPossibleYear);
            }

            return CommonUtils.intArraySort(result, Settings.yearsListDirection);
        }
    };

    return exports;
})(LimitsModel, DateUtils, CommonUtils);