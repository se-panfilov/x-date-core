/*START.DEV_ONLY*/
var module = {
  /*END.DEV_ONLY*/
  //==============================================

  DataClass: function (DateUtils, CommonUtils, YearsUtils, MonthUtils, DaysUtils, DateModel, LimitsModel) {
    'use strict';

    function _getSelected(model, start, end) {
      var result;

      var isUpperStart = (model.dt > start);
      var isEqualStart = (model.dt === start);
      var isLowerEnd = (model.dt > end);
      var isEqualEnd = (model.dt === end);

      //start == 1; model == 1 or 2 or 3; end == 3;
      if ((isUpperStart || isEqualStart) || (isLowerEnd || isEqualEnd)) {
        result = new DateModel(model.dt);
      } else if (!isUpperStart) { //start == 1; model == 0
        result = new DateModel(start);
      } else if (!isUpperStart) { //model == 4; end == 3;
        result = new DateModel(end);
      } else {//paranoid case
        result = new DateModel(new Date().getTime());
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
          var selectedYear = DateUtils.getYear(exports.selected.dt);
          var startYear = DateUtils.getYear(_data._start);
          var endYear = DateUtils.getYear(_data._end);
          //exports.list.y = YearsUtils.getYearsList(selectedYear, _data._start, _data._end, _data.limitsModel.now.y);
          exports.list.y = YearsUtils.getYearsList(selectedYear, startYear, endYear, _data.limitsModel.now.y);
          return this;
        },
        reloadMonthList: function () {
          var selectedYear = DateUtils.getYear(exports.selected.dt);
          var startMonth = DateUtils.getMonth(_data._start);
          var endMonth = DateUtils.getMonth(_data._end);
          exports.list.m = MonthUtils.getMonthList(startMonth, endMonth, selectedYear, _data.limitsModel);
          return this;
        },
        reloadDaysList: function () {
          var selectedYear = DateUtils.getYear(exports.selected.dt);
          var selectedMonth = DateUtils.getMonth(exports.selected.dt);
          exports.list.d = DaysUtils.getDaysList(_data._start, _data._end, selectedYear, selectedMonth, _data.limitsModel);
          return this;
        }
      };

      model.dt = CommonUtils.isValidNumber(model.dt) ? model.dt : null;
      start = CommonUtils.isValidNumber(start) ? start : null;
      end = CommonUtils.isValidNumber(end) ? end : null;

      exports.selected = _getSelected(model, start, end);
      var selectedYear = DateUtils.getYear(exports.selected.dt);
      var selectedMonth = DateUtils.getMonth(exports.selected.dt);

      _data.limitsModel = new LimitsModel(start, end);
      _data._start = start;
      _data._end = end;

      exports.list.y = YearsUtils.getYearsList(selectedYear, _data.limitsModel.start.y, _data.limitsModel.end.y, _data.limitsModel.now.y);
      exports.list.m = MonthUtils.getMonthList(start, end, selectedYear, _data.limitsModel);
      exports.list.d = DaysUtils.getDaysList(start, end, selectedYear, selectedMonth, _data.limitsModel);

      return exports;
    };
  }

//==============================================
  /*START.DEV_ONLY*/
};
/*END.DEV_ONLY*/