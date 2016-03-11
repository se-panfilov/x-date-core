/*START.DEV_ONLY*/
'use strict';
var x = {};
/*END.DEV_ONLY*/

/*START.TESTS_ONLY*/
exports.YearsUtils = /*END.TESTS_ONLY*/ (function () {

  function _getLatestPossibleYear(selectedY, nowY) {
    var result = (selectedY > nowY) ? selectedY : nowY;
    result += (x.Config.YEARS_COUNT - 1);
    return result;
  }

  function _getFirstPossibleYear(selectedY, nowY) {
    var result = (selectedY < nowY) ? selectedY : nowY;
    result -= (x.Config.YEARS_COUNT - 1);
    return result;
  }

  function getCases(startY, endY, nowY) {
    return {
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
  }

  function _getRangeIfBothLimits(cases, startY, endY, latestPossibleYear) {
    //start = 2011, end = 2014
    if (cases.isStartLower) {
      return {from: startY, to: endY};
    }

    //start = 2014, end = 2011
    if (cases.isEndLower) {
      return {from: endY, to: startY};
    }

    //start = 2011, end = 2011
    if (cases.isStartEqualEnd) {
      return {from: startY, to: endY};
    }

    //start = 2014, end = null
    if (cases.isOnlyStart) {
      return {from: startY, to: latestPossibleYear};
    }
  }

  function _getRangeIfOnlyEndLimits(cases, endY, firstPossibleYear) {
    //start = null, now = 2013 (or 2014), end = 2014
    if (cases.isEndUpperNow || cases.isEndEqualNow) {
      //TODO (S.Panfilov) wtf? I cannot remember wtf this case check
      if ((firstPossibleYear - x.Config.YEARS_COUNT) > (endY - x.Config.YEARS_COUNT)) {
        return {from: firstPossibleYear, to: endY};
      } else {
        return {from: endY - (x.Config.YEARS_COUNT - 1), to: endY};
      }
    }

    //start = null, now = 2015,  end = 2014
    if (!cases.isEndUpperNow) {
      return {from: endY - (x.Config.YEARS_COUNT - 1), to: endY};
    }
  }

  function _getRangeValues(selectedY, startY, endY, nowY) {

    var latestPossibleYear = _getLatestPossibleYear(selectedY, nowY);
    var firstPossibleYear = _getFirstPossibleYear(selectedY, nowY);

    var cases = getCases(startY, endY, nowY);

    if (cases.isBoth) {
      return _getRangeIfBothLimits(cases, startY, endY, latestPossibleYear);
    }

    //start = null, end = 2014
    if (cases.isOnlyEnd) {
      return _getRangeIfOnlyEndLimits(cases, endY, firstPossibleYear);
    }

    //start = null, end = null
    if (cases.isBothNot) {
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