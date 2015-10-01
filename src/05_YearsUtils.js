exports.YearsUtils = (function (CommonUtils, Config) {
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

    function _getRangeValues(selectedYear, startYear, endYear, nowYear, yearsCount) {

        var YEARS_COUNT = Config.defaultYearsCount;
        var latestPossibleYear = _getLatestPossibleYear(YEARS_COUNT, selectedYear, nowYear);
        var firstPossibleYear = _getFirstPossibleYear(YEARS_COUNT, selectedYear, nowYear);

        var isBoth = startYear && endYear;
        var isOnlyStart = startYear && !endYear;
        var isOnlyEnd = !startYear && endYear;
        var isStartLower = startYear < endYear;
        var isEndLower = startYear > endYear;
        var isStartEqualEnd = startYear === endYear;
        var isEndUpperNow = endYear > nowYear;
        var isEndEqualNow = endYear === nowYear;

        //start = 2011, end = 2014
        if (isBoth && isStartLower) {
            return {from: startYear, to: endYear};
        }

        //start = 2014, end = 2011
        if (isBoth && isEndLower) {
            return {from: endYear, to: startYear};
        }

        //start = 2011, end = 2011
        if (isBoth && isStartEqualEnd) {
            return {from: startYear, to: endYear};
        }

        //start = 2014, end = null
        if (isOnlyStart) {
            return {from: startYear, to: latestPossibleYear};
        }

        //start = null, now = 2013 (or 2014), end = 2014
        if (isOnlyEnd && (isEndUpperNow || isEndEqualNow)) {
            //TODO (S.Panfilov) wtf? I cannot remember wtf this statement check
            if ((firstPossibleYear - yearsCount) > (endYear - yearsCount)) {
                return {from: firstPossibleYear, to: endYear};
            } else {
                return {from: endYear - (yearsCount - 1), to: endYear};
            }
        }

        //now = 2015,  end = 2014
        if (isOnlyEnd && isEndUpperNow) {
            return {from: endYear - (yearsCount - 1), to: endYear};
        }

        //start = null, end = null
        if (isOnlyStart) {
            return {from: firstPossibleYear, to: latestPossibleYear};
        }
    }

    var exports = {
        getYearsList: function (selectedYear, startYear, endYear, nowYear, model) {
            var range = _getRangeValues(selectedYear, startYear, endYear, nowYear);
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
})(exports.CommonUtils, exports.Config);