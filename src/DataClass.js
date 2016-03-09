/*START.DEV_ONLY*/
'use strict';
/*END.DEV_ONLY*/

/*START.TESTS_ONLY*/
exports.DataClass = /*END.TESTS_ONLY*/ (function () {

  function _getSelected(model, start, end) {
    var result;

    var isUpperStart = (model.dt > start);
    var isEqualStart = (model.dt === start);
    var isLowerEnd = (model.dt > end);
    var isEqualEnd = (model.dt === end);

    //start == 1; model == 1 or 2 or 3; end == 3;
    if ((isUpperStart || isEqualStart) || (isLowerEnd || isEqualEnd)) {
      result = new x.DateModel(model.dt);
    } else if (!isUpperStart) { //start == 1; model == 0
      result = new x.DateModel(start);
    } else if (!isUpperStart) { //model == 4; end == 3;
      result = new x.DateModel(end);
    } else {//paranoid case
      result = new x.DateModel(new Date().getTime());
    }

    return result;
  }

  return function (model, start, end) {

    var _data = {
      _start: null,
      _end: null,
      _limitDates: null
    };

    var exports = {
      selected: {},
      list: {
        y: null,
        m: null,
        d: null
      },
      reloadYearsList: function () {
        var selectedYear = x.DateUtils.getYear(exports.selected.dt);
        var startYear = x.DateUtils.getYear(_data._start);
        var endYear = x.DateUtils.getYear(_data._end);
        //exports.list.y = x.YearsUtils.getYearsList(selectedYear, _data._start, _data._end, _data.LimitsModel.now.y);
        exports.list.y = x.YearsUtils.getYearsList(selectedYear, startYear, endYear, _data.LimitsModel.now.y);
        return this;
      },
      reloadMonthList: function () {
        var selectedYear = x.DateUtils.getYear(exports.selected.dt);
        var startMonth = x.DateUtils.getMonth(_data._start);
        var endMonth = x.DateUtils.getMonth(_data._end);
        exports.list.m = x.MonthUtils.getMonthList(startMonth, endMonth, selectedYear, _data.LimitsModel);
        return this;
      },
      reloadDaysList: function () {
        var selectedYear = x.DateUtils.getYear(exports.selected.dt);
        var selectedMonth = x.DateUtils.getMonth(exports.selected.dt);
        exports.list.d = x.DaysUtils.getDaysList(_data._start, _data._end, selectedYear, selectedMonth, _data.LimitsModel);
        return this;
      }
    };

    model.dt = x.CommonUtils.isValidNumber(model.dt) ? model.dt : null;
    start = x.CommonUtils.isValidNumber(start) ? start : null;
    end = x.CommonUtils.isValidNumber(end) ? end : null;

    exports.selected = _getSelected(model, start, end);
    var selectedYear = x.DateUtils.getYear(exports.selected.dt);
    var selectedMonth = x.DateUtils.getMonth(exports.selected.dt);

    _data.LimitsModel = new x.LimitsModel(start, end);
    _data._start = start;
    _data._end = end;

    exports.list.y = x.YearsUtils.getYearsList(selectedYear, _data.LimitsModel.start.y, _data.LimitsModel.end.y, _data.LimitsModel.now.y);
    exports.list.m = x.MonthUtils.getMonthList(start, end, selectedYear, _data.LimitsModel);
    exports.list.d = x.DaysUtils.getDaysList(start, end, selectedYear, selectedMonth, _data.LimitsModel);

    return exports;
  }
})()/*START.TESTS_ONLY*/;
return exports;
/*END.TESTS_ONLY*/