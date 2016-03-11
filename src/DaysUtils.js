/*START.DEV_ONLY*/
'use strict';
var x = {};
/*END.DEV_ONLY*/

/*START.TESTS_ONLY*/
exports.DaysUtils = /*END.TESTS_ONLY*/ (function () {

  function getLimits() {
    var isYearEqualStart = x.DateUtils.isYearEqualStart(x.State.selected.y);
    var isYearEqualEnd = x.DateUtils.isYearEqualEnd(x.State.selected.y);
    var isMonthEqualStart = x.DateUtils.isMonthEqualStart(x.State.selected.m);
    var isMonthEqualEnd = x.DateUtils.isMonthEqualEnd(x.State.selected.m);

    return {
      isLower: (isYearEqualStart && isMonthEqualStart),
      isUpper: (isYearEqualEnd && isMonthEqualEnd)
    }
  }

  function getArrFromAndTo(aStart, aEnd, lastDayInMonth) {
    var from = x.Config.startDay;
    var to = lastDayInMonth;
    var limit = getLimits();

    if (limit.isLower && limit.isUpper) {
      from = aStart;
      to = aEnd;
    } else if (limit.isLower && !limit.isUpper) {
      from = aStart;
      to = lastDayInMonth;
    } else if (!limit.isLower && limit.isUpper) {
      from = x.Config.startDay;
      to = aEnd;
    }

    return {from: from, to: to};
  }

  return {
    getDaysList: function () {
      var result;
      var lastDayInMonth = x.DateUtils.getDaysInMonth(x.State.selected.y, x.State.selected.y);
      var isStart = x.State.start.isExist;
      var isEnd = x.State.end.isExist;

      if (isStart || isEnd) {
        var start = (isStart) ? x.State.start.d : x.Config.startDay;
        var end = (isEnd) ? x.State.end.d : lastDayInMonth;
        result = getArrFromAndTo(start, end, lastDayInMonth);
      } else {  // in all other cases return array of 12 month
        result = {from: x.Config.startDay, to: lastDayInMonth};
      }

      return x.CommonUtils.intArraySort(x.CommonUtils.getArrayOfNumbers(result.from, result.to), x.Config.direction.d);
    }
  }
})()/*START.TESTS_ONLY*/;
return exports;
/*END.TESTS_ONLY*/