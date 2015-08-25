var DataClass = (function (DateUtils, CommonUtils, YearsUtils, MonthUtils, DaysUtils, DateModel) {
    'use strict';

    function _getSelected(selected, startDateTime, endDateTime) {
        var result;

        var isBiggerThenStart = (selected.dt > startDateTime);
        var isEqualToStart = (selected.dt === startDateTime);
        var isLowerThenEnd = (selected.dt > endDateTime);
        var isEqualToEnd = (selected.dt === endDateTime);

        //start == 1; selected == 1 or 2 or 3; end == 3;
        if ((isBiggerThenStart || isEqualToStart) || (isLowerThenEnd || isEqualToEnd)) {
            result = new DateModel(selected.dt);
        } else
        //start == 1; selected == 0
        if (!isBiggerThenStart) {
            result = new DateModel(startDateTime);
        } else
        //selected == 4; end == 3;
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
            current: {
                y: null,
                m: null,
                d: null
            },
            reloadYearsList: function () {
                exports.current.y = YearsUtils.getYearsList(_private._start, _private._end);
                return this;
            },
            reloadMonthList: function () {
                var selectedYear = DateUtils.getYear(exports.selected.dt);
                exports.current.m = MonthUtils.getMonthList(_private._start, _private._end, selectedYear);
                return this;
            },
            reloadDaysList: function () {
                var selectedYear = DateUtils.getYear(exports.selected.dt);
                var selectedMonth = DateUtils.getMonth(exports.selected.dt);
                exports.current.d = DaysUtils.getDaysList(_private._start, _private._end, selectedYear, selectedMonth);
                return this;
            }
        };

        model.dt = CommonUtils.isValidNumber(model.dt) ? model.dt : null;
        startDateTime = CommonUtils.isValidNumber(startDateTime) ? startDateTime : null;
        endDateTime = CommonUtils.isValidNumber(endDateTime) ? endDateTime : null;

        exports.selected = _getSelected(model, startDateTime, endDateTime);
        var selectedYear = DateUtils.getYear(exports.selected.dt);
        var selectedMonth = DateUtils.getMonth(exports.selected.dt);

        _private._limitDates = new LimitsModel(startDateTime, endDateTime);
        _private._start = startDateTime;
        _private._end = endDateTime;
        exports.current.y = YearsUtils.getYearsList(startDateTime, endDateTime, exports.selected, _private._limitDates);
        exports.current.m = MonthUtils.getMonthList(startDateTime, endDateTime, selectedYear, _private._limitDates);
        exports.current.d = DaysUtils.getDaysList(startDateTime, endDateTime, selectedYear, selectedMonth, exports.selected, _private._limitDates);

        return exports;
    }

})(DateUtils, CommonUtils, YearsUtils, MonthUtils, DaysUtils, DateModel);