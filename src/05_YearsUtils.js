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

    function _getRangeValues(startDt, endDt, firstPossibleYear, latestPossibleYear, limitsModel, yearsCount, nowDate) {
        var start = _getValue(limitsModel, 'start');
        var end = _getValue(limitsModel, 'end');

        var isBothLimits = startDt && endDt;
        var isOnlyStartLimit = startDt && !endDt;
        var isOnlyEndLimit = !startDt && endDt;
        var isStartLowerThanEnd = startDt < endDt;
        var isStartUpperThanEnd = startDt > endDt;
        var isStartEqualToEnd = startDt === endDt;

        //start = 2011, end = 2014
        if (isBothLimits && isStartLowerThanEnd) {
            return {from: start, to: end};
        }

        //start = 2014, end = 2011
        if (isBothLimits && isStartUpperThanEnd) {
            return {from: end, to: start};
        }

        //start = 2011, end = 2011
        if (isBothLimits && isStartEqualToEnd) {
            return {from: start, to: end};
        }

        //start = 2014, end = null
        if (isOnlyStartLimit) {
            return {from: start, to: latestPossibleYear};
        }

        //start = null, end = 2014
        if (isOnlyEndLimit) {

            //TODO (S.Panfilov) why we use here limitModel's start but not startDt?
            //TODO (S.Panfilov) Cur work point
            //now = 2013 (or 2014),  end = 2014
            if (limitsModel.end.y >= limitsModel.now.y) {
                if ((firstPossibleYear - yearsCount) > (end - yearsCount)) {
                    return {from: firstPossibleYear, to: end};
                } else {
                    return {from: end - (yearsCount - 1), to: end};
                }
            }

            //now = 2015,  end = 2014
            if (limitsModel.end.y > limitsModel.now.y) {
                return {from: end - (yearsCount - 1), to: end};
            }
        }

        //start = null, end = null
        if (isOnlyStartLimit) {
            return {from: firstPossibleYear, to: latestPossibleYear};
        }
    }

    var exports = {
        getYearsList: function (startDt, endDt, model, limitsModel) {
            var YEARS_COUNT = Config.defaultYearsCount;
            var now = _getValue(limitsModel, 'now');

            var selectedYear = DateUtils.getYear(model.dt);
            var latestPossibleYear = _getLatestPossibleYear(YEARS_COUNT, selectedYear, now);
            var firstPossibleYear = _getFirstPossibleYear(YEARS_COUNT, selectedYear, now);
            var range = _getRangeValues(startDt, endDt, firstPossibleYear, latestPossibleYear, limitsModel, YEARS_COUNT, now);
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