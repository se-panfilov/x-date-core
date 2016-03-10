/*START.DEV_ONLY*/
'use strict';
var x = {};
/*END.DEV_ONLY*/

/*START.TESTS_ONLY*/
exports.YearsUtils = /*END.TESTS_ONLY*/ (function () {

  function _getLatestPossibleYear(yearsCount, selectedY, nowY) {
    var result = (selectedY > nowY) ? selectedY : nowY;
    result += (yearsCount - 1);
    return result;
  }

  function _getFirstPossibleYear(yearsCount, selectedY, nowY) {
    var result = (selectedY < nowY) ? selectedY : nowY;
    result -= (yearsCount - 1);
    return result;
  }

  function _getRangeValues(selectedY, startY, endY, nowY) {

    var YEARS_COUNT = x.Config.defaultYearsCount;
    var latestPossibleYear = _getLatestPossibleYear(YEARS_COUNT, selectedY, nowY);
    var firstPossibleYear = _getFirstPossibleYear(YEARS_COUNT, selectedY, nowY);

    var statement = {
      isBoth: !!(startY && endY),
      isBothNot: !!(!startY && !endY),
      isOnlyStart: !!(startY && !endY),
      isOnlyEnd: !!(!startY && endY),
      isStartLower: (startY < endY),
      isEndLower: (startY > endY),
      isStartEqualEnd: (startY === endY),
      isEndUpperNow: (endY > nowY),
      isEndEqualNow: (endY === nowY)
    };

    //start = 2011, end = 2014
    if (statement.isBoth && statement.isStartLower) {
      return {from: startY, to: endY};
    }

    //start = 2014, end = 2011
    if (statement.isBoth && statement.isEndLower) {
      return {from: endY, to: startY};
    }

    //start = 2011, end = 2011
    if (statement.isBoth && statement.isStartEqualEnd) {
      return {from: startY, to: endY};
    }

    //start = 2014, end = null
    if (statement.isOnlyStart) {
      return {from: startY, to: latestPossibleYear};
    }

    //start = null, end = 2014
    if (statement.isOnlyEnd) {
      //start = null, now = 2013 (or 2014), end = 2014
      if (statement.isEndUpperNow || statement.isEndEqualNow) {
        //TODO (S.Panfilov) wtf? I cannot remember wtf this statement check
        if ((firstPossibleYear - YEARS_COUNT) > (endY - YEARS_COUNT)) {
          return {from: firstPossibleYear, to: endY};
        } else {
          return {from: endY - (YEARS_COUNT - 1), to: endY};
        }
      }

      //start = null, now = 2015,  end = 2014
      if (!statement.isEndUpperNow) {
        return {from: endY - (YEARS_COUNT - 1), to: endY};
      }
    }

    //start = null, end = null
    if (statement.isBothNot) {
      return {from: firstPossibleYear, to: latestPossibleYear};
    }
  }

  var exports = {
    getYearsList: function () {
      var range = _getRangeValues(x.State.selected.y, x.State.start.y, x.State.end.y, x.State.now.y);
      var result = x.CommonUtils.getArrayOfNumbers(range.from, range.to);

      return x.CommonUtils.intArraySort(result, x.Config.direction.y);
    }
  };

  /*START.TESTS_ONLY*/
  exports._private = {};
  exports._private._getLatestPossibleYear = _getLatestPossibleYear;
  exports._private._getFirstPossibleYear = _getFirstPossibleYear;
  exports._private._getRangeValues = _getRangeValues;
  /*END.TESTS_ONLY*/

  return exports;
})()/*START.TESTS_ONLY*/;
return exports;
/*END.TESTS_ONLY*/