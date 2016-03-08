/*START.DEV_ONLY*/
'use strict';
/*END.DEV_ONLY*/

/*START.TESTS_ONLY*/
this.DateUtils = require('../src/DateUtils.js');
this.CommonUtils = require('../src/CommonUtils.js');

exports.YearsUtils = /*END.TESTS_ONLY*/ (function (CommonUtils, Config) {

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

  function _getRangeValues(selectedYear, startYear, endYear, nowYear) {

    var YEARS_COUNT = Config.defaultYearsCount;
    var latestPossibleYear = _getLatestPossibleYear(YEARS_COUNT, selectedYear, nowYear);
    var firstPossibleYear = _getFirstPossibleYear(YEARS_COUNT, selectedYear, nowYear);

    var statement = {
      isBoth: !!(startYear && endYear),
      isBothNot: !!(!startYear && !endYear),
      isOnlyStart: !!(startYear && !endYear),
      isOnlyEnd: !!(!startYear && endYear),
      isStartLower: (startYear < endYear),
      isEndLower: (startYear > endYear),
      isStartEqualEnd: (startYear === endYear),
      isEndUpperNow: (endYear > nowYear),
      isEndEqualNow: (endYear === nowYear)
    };

    //start = 2011, end = 2014
    if (statement.isBoth && statement.isStartLower) {
      return {from: startYear, to: endYear};
    }

    //start = 2014, end = 2011
    if (statement.isBoth && statement.isEndLower) {
      return {from: endYear, to: startYear};
    }

    //start = 2011, end = 2011
    if (statement.isBoth && statement.isStartEqualEnd) {
      return {from: startYear, to: endYear};
    }

    //start = 2014, end = null
    if (statement.isOnlyStart) {
      return {from: startYear, to: latestPossibleYear};
    }

    //start = null, end = 2014
    if (statement.isOnlyEnd) {
      //start = null, now = 2013 (or 2014), end = 2014
      if (statement.isEndUpperNow || statement.isEndEqualNow) {
        //TODO (S.Panfilov) wtf? I cannot remember wtf this statement check
        if ((firstPossibleYear - YEARS_COUNT) > (endYear - YEARS_COUNT)) {
          return {from: firstPossibleYear, to: endYear};
        } else {
          return {from: endYear - (YEARS_COUNT - 1), to: endYear};
        }
      }

      //start = null, now = 2015,  end = 2014
      if (!statement.isEndUpperNow) {
        return {from: endYear - (YEARS_COUNT - 1), to: endYear};
      }
    }

    //start = null, end = null
    if (statement.isBothNot) {
      return {from: firstPossibleYear, to: latestPossibleYear};
    }
  }

  var exports = {
    getYearsList: function (selectedYear, startYear, endYear, nowYear) {
      var range = _getRangeValues(selectedYear, startYear, endYear, nowYear);
      var result = CommonUtils.getArrayOfNumbers(range.from, range.to);

      return CommonUtils.intArraySort(result, Config.yearsDirection);
    }
  };

  /*START.TESTS_ONLY*/
  exports._private = {};
  exports._private._getLatestPossibleYear = _getLatestPossibleYear;
  exports._private._getFirstPossibleYear = _getFirstPossibleYear;
  exports._private._getRangeValues = _getRangeValues;
  /*END.TESTS_ONLY*/

  return exports;
})(this.CommonUtils, this.Config)/*START.TESTS_ONLY*/;
return exports;
/*END.TESTS_ONLY*/