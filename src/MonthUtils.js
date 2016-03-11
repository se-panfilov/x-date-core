/*START.DEV_ONLY*/
'use strict';
var x = {};
/*END.DEV_ONLY*/

/*START.TESTS_ONLY*/
exports.MonthUtils = /*END.TESTS_ONLY*/ (function () {

  function getArrFromAndTo(start, end) {
    var isYearEqualStart = x.DateUtils.isYearEqualStart(x.State.selected.y);
    var isYearEqualEnd = x.DateUtils.isYearEqualEnd(x.State.selected.y);

    var from = x.Config.START_MONTH;
    var to = x.Config.END_MONTH;

    // startYear == 2015, nowYear == 2015, endYear == 2015
    if (isYearEqualStart && isYearEqualEnd) {
      from = start;
      to = end;
    } else if (isYearEqualStart && !isYearEqualEnd) { // startYear == 2015, nowYear == 2015, endYear == 2016 (or null)
      from = start;
      to = x.Config.END_MONTH;
    } else if (!isYearEqualStart && isYearEqualEnd) { // startYear == 2014 (or null), nowYear == 2015, endYear == 2015
      from = x.Config.START_MONTH;
      to = end;
    }

    return {from: from, to: to};
  }

  return {
    getMonthList: function () {
      var result = {};
      var isStart = x.State.start.isExist;
      var isEnd = x.State.end.isExist;

      if (isStart || isEnd) {
        var start = (isStart) ? x.State.start.m : x.Config.START_MONTH;
        var end = (isEnd) ? x.State.end.m : x.Config.END_MONTH;
        result = getArrFromAndTo(start, end);
      } else {  // in all other cases return array of 12 month
        result = {from: x.Config.START_MONTH, to: x.Config.END_MONTH};
      }

      return x.CommonUtils.intArraySort(x.CommonUtils.getArrayOfNumbers(result.from, result.to), x.Config.direction.m);
    }
  };
})()/*START.TESTS_ONLY*/;
return exports;
/*END.TESTS_ONLY*/