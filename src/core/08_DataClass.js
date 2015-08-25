var DataClass = (function (DateUtils, CommonUtils, YearsUtils, MonthUtils, DaysUtils, DateModel) {
    'use strict';

    function _getSelected(model, startDateTime, endDateTime) {
        var result;

        var isBiggerThenStart = (model.datetime > startDateTime);
        var isEqualToStart = (model.datetime === startDateTime);
        var isLowerThenEnd = (model.datetime > endDateTime);
        var isEqualToEnd = (model.datetime === endDateTime);

        //start == 1; model == 1 or 2 or 3; end == 3;
        if ((isBiggerThenStart || isEqualToStart) || (isLowerThenEnd || isEqualToEnd)) {
            result = new DateModel(model.datetime);
        } else
        //start == 1; model == 0
        if (!isBiggerThenStart) {
            result = new DateModel(startDateTime);
        } else
        //model == 4; end == 3;
        if (!isBiggerThenStart) {
            result = new DateModel(endDateTime);
        }
        //paranoid case
        else {
            result = new DateModel(new Date().getTime());
        }

        return result;
    }

    return function (model, startDateTime, endDateTime) {

        var _private = {
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
                exports.list.y = YearsUtils.getYearsList(_private._start, _private._end);
                return this;
            },
            reloadMonthList: function () {
                var selectedYear = DateUtils.getYear(exports.selected.dt);
                exports.list.m = MonthUtils.getMonthList(_private._start, _private._end, selectedYear);
                return this;
            },
            reloadDaysList: function () {
                var selectedYear = DateUtils.getYear(exports.selected.dt);
                var selectedMonth = DateUtils.getMonth(exports.selected.dt);
                exports.list.d = DaysUtils.getDaysList(_private._start, _private._end, selectedYear, selectedMonth);
                return this;
            }
        };

        model.datetime = CommonUtils.isValidNumber(model.datetime) ? model.datetime : null;
        startDateTime = CommonUtils.isValidNumber(startDateTime) ? startDateTime : null;
        endDateTime = CommonUtils.isValidNumber(endDateTime) ? endDateTime : null;

        exports.selected = _getSelected(model, startDateTime, endDateTime);
        var selectedYear = DateUtils.getYear(exports.selected.datetime);
        var selectedMonth = DateUtils.getMonth(exports.selected.datetime);

        _private._limitDates = new LimitsModel(startDateTime, endDateTime);
        _private._start = startDateTime;
        _private._end = endDateTime;

        exports.list.y = YearsUtils.getYearsList(startDateTime, endDateTime, exports.selected, _private._limitDates);
        exports.list.m = MonthUtils.getMonthList(startDateTime, endDateTime, selectedYear, _private._limitDates);
        exports.list.d = DaysUtils.getDaysList(startDateTime, endDateTime, selectedYear, selectedMonth, exports.selected, _private._limitDates);

        return exports;
    }

})(DateUtils, CommonUtils, YearsUtils, MonthUtils, DaysUtils, DateModel);