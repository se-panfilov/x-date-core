exports.YearsUtils = (function (DateUtils, CommonUtils, Config) {
    'use strict';

    function _getValue(model, field) {
        return (model) ? model[field].y : null;
    }

    function _getLatestPossibleYear(yearsCount, selectedYear, now) {
        var result = (selectedYear > now) ? selectedYear : now;
        result += (yearsCount - 1);
        return result;
    }

    function _getFirstPossibleYear(yearsCount, selectedYear, now) {
        var result = (selectedYear < now) ? selectedYear : now;
        result -= (yearsCount - 1);
        return result;
    }

    return {
        getYearsList: function (startDt, endDt, model, limitsModel) {
            var result = [];
            var YEARS_COUNT = Config.defaultYearsCount;

            var start = _getValue(limitsModel, 'start');
            var end = _getValue(limitsModel, 'end');
            var now = _getValue(limitsModel, 'now');

            var selectedYear = DateUtils.getYear(model.dt);
            var latestPossibleYear = _getLatestPossibleYear(YEARS_COUNT, selectedYear, now);
            var firstPossibleYear = _getFirstPossibleYear(YEARS_COUNT, selectedYear, now);

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
                    if ((firstPossibleYear - YEARS_COUNT) > (end - YEARS_COUNT)) {
                        result = CommonUtils.getArrayOfNumbers(firstPossibleYear, end);
                    } else {
                        result = CommonUtils.getArrayOfNumbers(end - (YEARS_COUNT - 1), end);
                    }
                } else if (limitsModel.end.y > limitsModel.now.y) {  //now = 2015,  end = 2014
                    result = CommonUtils.getArrayOfNumbers(end - (YEARS_COUNT - 1), end);
                }
            } else if (!startDt && !endDt) {  //start = null, end = null
                result = CommonUtils.getArrayOfNumbers(firstPossibleYear, latestPossibleYear);
            }

            return CommonUtils.intArraySort(result, Config.yearsDirection);
        }
    };
})(exports.DateUtils, exports.CommonUtils, exports.Config);