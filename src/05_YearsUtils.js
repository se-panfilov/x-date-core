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

    function _getRangeValues(startDt, endDt, firstPossibleYear, latestPossibleYear, limitsModel, yearsCount) {
        var result = {};
        var start = _getValue(limitsModel, 'start');
        var end = _getValue(limitsModel, 'end');

        //TODO (S.Panfilov) why we use here limitModel's start but not startDt?
        //TODO (S.Panfilov) Cur work point

        //start = 2011, end = 2014
        if ((startDt && endDt) && (startDt < endDt)) {
            result.from = start;
            result.to = end;
            //start = 2014, end = 2011
        } else if ((startDt && endDt) && (startDt > endDt)) {
            result.from = end;
            result.to = start;
            //start = 2011, end = 2011
        } else if ((startDt && endDt) && (startDt === endDt)) {
            result.from = start;
            result.to = end;
            //start = 2014, end = null
        } else if (startDt && !endDt) {
            result.from = start;
            result.to = latestPossibleYear;
            //start = null, end = 2014
        } else if (!startDt && endDt) {
            //now = 2013 (or 2014),  end = 2014
            if (limitsModel.end.y >= limitsModel.now.y) {
                if ((firstPossibleYear - yearsCount) > (end - yearsCount)) {
                    result.from = firstPossibleYear;
                    result.to = end;
                } else {
                    result.from = (end - (yearsCount - 1));
                    result.to = end;
                }
                //now = 2015,  end = 2014
            } else if (limitsModel.end.y > limitsModel.now.y) {
                result.from = (end - (yearsCount - 1));
                result.to = end;
            }
            //start = null, end = null
        } else if (!startDt && !endDt) {
            result.from = firstPossibleYear;
            result.to = latestPossibleYear;
        }

        return result;
    }

    var exports = {
        getYearsList: function (startDt, endDt, model, limitsModel) {
            var YEARS_COUNT = Config.defaultYearsCount;
            var now = _getValue(limitsModel, 'now');

            var selectedYear = DateUtils.getYear(model.dt);
            var latestPossibleYear = _getLatestPossibleYear(YEARS_COUNT, selectedYear, now);
            var firstPossibleYear = _getFirstPossibleYear(YEARS_COUNT, selectedYear, now);
            var range = _getRangeValues(startDt, endDt, firstPossibleYear, latestPossibleYear, limitsModel, YEARS_COUNT);
            var result = CommonUtils.getArrayOfNumbers(range.from, range.to);

            return CommonUtils.intArraySort(result, Config.yearsDirection);
        }
    };

    /*START.TESTS_ONLY*/
    exports._private = {};
    exports._private._getValue = _getValue;
    exports._private._getLatestPossibleYear = _getLatestPossibleYear;
    exports._private._getFirstPossibleYear = _getFirstPossibleYear;
    exports._private._getRangeValues = _getRangeValues;
    /*END.TESTS_ONLY*/

    return exports;
})(exports.DateUtils, exports.CommonUtils, exports.Config);