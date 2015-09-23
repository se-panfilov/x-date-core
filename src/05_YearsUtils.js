var YearsUtils = (function (DateUtils, CommonUtils, Config) {
    'use strict';

    var exports = {
        getYearsList: function (startDt, endDt, model, limitsModel) {
            var result = [];
            var DEFAULT_YEARS_COUNT = Config.defaultYearsCount;

            var start = limitsModel.start.y;
            var end = limitsModel.end.y;
            var now = limitsModel.now.y;
            var selectedYear = DateUtils.getYear(model.dt);
            var latestPossibleYear = (selectedYear > now) ? selectedYear : now;
            var firstPossibleYear = (selectedYear < now) ? selectedYear : now;
            latestPossibleYear += (DEFAULT_YEARS_COUNT - 1);
            firstPossibleYear -= (DEFAULT_YEARS_COUNT - 1);

            //start = 2011, end = 2014
            if ((startDt && endDt) && (startDt < endDt)) {
                result = CommonUtils.getArrayOfNumbers(start, end);
            }

            //start = 2014, end = 2011
            else if ((startDt && endDt) && (startDt > endDt)) {
                result = CommonUtils.getArrayOfNumbers(end, start);
            }

            //start = 2011, end = 2011
            else if ((startDt && endDt) && (startDt === endDt)) {
                result = CommonUtils.getArrayOfNumbers(start, end);
            }

            //start = 2014, end = null
            else if (startDt && !endDt) {
                result = CommonUtils.getArrayOfNumbers(start, latestPossibleYear);
            }

            //start = null, end = 2014
            else if (!startDt && endDt) {
                //now = 2013 (or 2014),  end = 2014
                if (limitsModel.end.y >= limitsModel.now.y) {

                    if ((firstPossibleYear - DEFAULT_YEARS_COUNT) > (end - DEFAULT_YEARS_COUNT)) {
                        result = CommonUtils.getArrayOfNumbers(firstPossibleYear, end);
                    } else {
                        result = CommonUtils.getArrayOfNumbers(end - (DEFAULT_YEARS_COUNT - 1), end);
                    }

                }
                //now = 2015,  end = 2014
                else if (limitsModel.end.y > limitsModel.now.y) {
                    result = CommonUtils.getArrayOfNumbers(end - (DEFAULT_YEARS_COUNT - 1), end);
                }

            }

            //start = null, end = null
            else if (!startDt && !endDt) {
                result = CommonUtils.getArrayOfNumbers(firstPossibleYear, latestPossibleYear);
            }

            return CommonUtils.intArraySort(result, Config.yearsDirection);
        }
    };

    return exports;
})(DateUtils, CommonUtils, Config);