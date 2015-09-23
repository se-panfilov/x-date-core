exports.YearsUtils = (function (DateUtils, CommonUtils, Config) {
    'use strict';

    return {
        getYearsList: function (startDt, endDt, model, limitsModel) {
            var result = [];
            var DEFAULT_YEARS_COUNT = Config.defaultYearsCount;

            var start = (limitsModel) ? limitsModel.start.y : null;
            var end = (limitsModel) ? limitsModel.end.y : null;
            var now = (limitsModel) ? limitsModel.now.y : null;
            var selectedYear = DateUtils.getYear(model.dt);
            var latestPossibleYear = (selectedYear > now) ? selectedYear : now;
            var firstPossibleYear = (selectedYear < now) ? selectedYear : now;
            latestPossibleYear += (DEFAULT_YEARS_COUNT - 1);
            firstPossibleYear -= (DEFAULT_YEARS_COUNT - 1);

            //TODO (S.Panfilov) why we use here limitModel's start but not startDt?
            //TODO (S.Panfilov) Cur work point
            if ((startDt && endDt) && (startDt < endDt)) { //start = 2011, end = 2014
                result = CommonUtils.getArrayOfNumbers(start, end);
            } else if ((startDt && endDt) && (startDt > endDt)) { //start = 2014, end = 2011
                result = CommonUtils.getArrayOfNumbers(end, start);
            } else if ((startDt && endDt) && (startDt === endDt)) { //start = 2011, end = 2011
                result = CommonUtils.getArrayOfNumbers(start, end);
            } else if (startDt && !endDt) {  //start = 2014, end = null
                result = CommonUtils.getArrayOfNumbers(start, latestPossibleYear);
            } else if (!startDt && endDt) {  //start = null, end = 2014
                if (limitsModel.end.y >= limitsModel.now.y) {  //now = 2013 (or 2014),  end = 2014
                    if ((firstPossibleYear - DEFAULT_YEARS_COUNT) > (end - DEFAULT_YEARS_COUNT)) {
                        result = CommonUtils.getArrayOfNumbers(firstPossibleYear, end);
                    } else {
                        result = CommonUtils.getArrayOfNumbers(end - (DEFAULT_YEARS_COUNT - 1), end);
                    }
                } else if (limitsModel.end.y > limitsModel.now.y) {  //now = 2015,  end = 2014
                    result = CommonUtils.getArrayOfNumbers(end - (DEFAULT_YEARS_COUNT - 1), end);
                }
            } else if (!startDt && !endDt) {  //start = null, end = null
                result = CommonUtils.getArrayOfNumbers(firstPossibleYear, latestPossibleYear);
            }

            return CommonUtils.intArraySort(result, Config.yearsDirection);
        }
    };
})(exports.DateUtils, exports.CommonUtils, exports.Config);