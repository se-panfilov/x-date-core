'use strict';

var Config = {
    isUtc: false,
    monthDirection: 'asc',
    daysDirection: 'asc',
    yearsDirection: 'desc',
    daysList: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    monthList: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var CommonUtils = (function () {
    'use strict';

    var exports = {
        isValidNumber: function (num) {
            var isNumber = !isNaN(num);
            var isNotInfinity = isFinite(num);
            return isNumber && isNotInfinity;
        },
        getArrayOfNumbers: function (start, end) {
            var result = [];

            for (var i = start; i <= end; i++) {
                result.push(i);
            }

            return result;
        },
        intArraySort: function (arr, direction) {
            function desc(a, b) {
                return b - a;
            }

            switch (direction) {
                default:
                    return arr.sort(function (a, b) {
                        return a - b;
                    });
                case "desc":
                    return arr.sort(desc);
            }
        },
        getIntArr: function (length) {
            if (!length && length !== 0) return;
            return length ? exports._getIntArr(length - 1).concat(length) : [];
        }
    };

    return exports;
})();
var DateUtils = (function (Config) {
    'use strict';

    function getVal(dt, method) {
        var date = new Date(dt);
        return method.call(date);
    }

    var exports = {
        getDay: function (dt) {
            var method = (Config.isUTC) ? Date.prototype.getUTCDate : Date.prototype.getDate;
            return getVal(dt, method);
        },
        getDayOfWeek: function (dt) {
            var method = (Config.isUTC) ? Date.prototype.getUTCDay : Date.prototype.getDay;
            return getVal(dt, method);
        },
        getYear: function (dt) {
            var method = (Config.isUTC) ? Date.prototype.getUTCFullYear : Date.prototype.getFullYear;
            return getVal(dt, method);
        },
        getMonth: function (dt) {
            var method = (Config.isUTC) ? Date.prototype.getUTCMonth : Date.prototype.getMonth;
            return getVal(dt, method);
        },
        getDaysInMonth: function (month, year) {
            var method = (Config.isUTC) ? Date.prototype.getUTCDate : Date.prototype.getDate;
            return method.call(new Date(year, month + 1, 0));
        },
        isValidModel: function (model) {
            return !!model && (!!model.dt || model.dt === 0);
        },
        isDateUpperStartLimit: function (dt, start) {
            if (!start) return true;
            return (dt > start);
        },
        isDateLowerEndLimit: function (dt, end) {
            if (!end) return true;
            return (dt < end);
        },
        isDateBetweenLimits: function (dt, start, end) {
            return (exports.isDateUpperStartLimit(dt, start) && exports.isDateLowerEndLimit(dt, end));
        }
    };

    return exports;
})(Config);
var LimitsModel = (function (DateUtils) {
    'use strict';

    function LimitsModel(start, end) {

        var exports = {
            start: {},
            end: {},
            now: {}
        };

        function _setStart(dt) {
            exports.start.d = DateUtils.getDay(dt);
            exports.start.m = DateUtils.getMonth(dt);
            exports.start.y = DateUtils.getYear(dt);
            exports.start.dt = dt;
            return this;//TODO (S.Panfilov) Possible strict violation
        }

        function _setEnd(dt) {
            exports.end.d = DateUtils.getDay(dt);
            exports.end.m = DateUtils.getMonth(dt);
            exports.end.y = DateUtils.getYear(dt);
            exports.end.dt = dt;
            return this;//TODO (S.Panfilov) Possible strict violation
        }

        function _setNow() {
            var dt = new Date().getTime();
            exports.now.d = DateUtils.getDay(dt);
            exports.now.m = DateUtils.getMonth(dt);
            exports.now.y = DateUtils.getYear(dt);
            exports.now.dt = dt;
            return this;//TODO (S.Panfilov) Possible strict violation
        }

        _setStart(start);
        _setEnd(end);
        _setNow();
        
        return exports;
    }
    
    return LimitsModel;
})(DateUtils);
var DateModel = (function (DateUtils) {
    'use strict';

    function DateModel(dt) {
        this.d = DateUtils.getDay(dt);
        this.dow = DateUtils.getDayOfWeek(dt);
        this.m = DateUtils.getMonth(dt);
        this.y = DateUtils.getYear(dt);
        this.dt = dt;
        this.tz = new Date(dt).getTimezoneOffset();

        return this;
    }

    return DateModel;
})(DateUtils);
var YearsUtils = (function (DateUtils, CommonUtils, Config) {
    'use strict';

    var exports = {
        getYearsList: function (startDt, endDt, model, limitsModel) {
            var result = [];
            var DEFAULT_YEARS_COUNT = 10;

            var start = limitsModel.start.y;
            var end = limitsModel.end.y;
            var now = limitsModel.now.y;
            var selectedYear = DateUtils.getYear(model.dt);
            var latestPossibleYear = (selectedYear > now) ? selectedYear : now;
            var firstPossibleYear = (selectedYear < now) ? selectedYear : now;
            latestPossibleYear = latestPossibleYear + (DEFAULT_YEARS_COUNT - 1);
            firstPossibleYear = firstPossibleYear - (DEFAULT_YEARS_COUNT - 1);

            //start = 2011, end = 2014
            if ((startDt && endDt) && (startDt < endDt)) {
                result = CommonUtils.getArrayOfNumbers(start, end);
            }

            //start = 2014, end = 2011
            else if ((startDt && endDt) && (startDt > endDt)) {
                result = CommonUtils.getArrayOfNumbers(end, start);
            }

            //start = 2011, end = 2011
            else if ((startDt && endDt) && (startDt === endDt)) {
                result = CommonUtils.getArrayOfNumbers(start, end);
            }

            //start = 2014, end = null
            else if (startDt && !endDt) {
                result = CommonUtils.getArrayOfNumbers(start, latestPossibleYear);
            }

            //start = null, end = 2014
            else if (!startDt && endDt) {
                //now = 2013 (or 2014),  end = 2014
                if (limitsModel.end.y >= limitsModel.now.y) {

                    if ((firstPossibleYear - DEFAULT_YEARS_COUNT) > (end - DEFAULT_YEARS_COUNT)) {
                        result = CommonUtils.getArrayOfNumbers(firstPossibleYear, end);
                    } else {
                        result = CommonUtils.getArrayOfNumbers(end - (DEFAULT_YEARS_COUNT - 1), end);
                    }

                }
                //now = 2015,  end = 2014
                else if (limitsModel.end.y > limitsModel.now.y) {
                    result = CommonUtils.getArrayOfNumbers(end - (DEFAULT_YEARS_COUNT - 1), end);
                }

            }

            //start = null, end = null
            else if (!startDt && !endDt) {
                result = CommonUtils.getArrayOfNumbers(firstPossibleYear, latestPossibleYear);
            }

            return CommonUtils.intArraySort(result, Config.yearsListDirection);
        }
    };

    return exports;
})(DateUtils, CommonUtils, Config);
var MonthUtils = (function (LimitsModel, DateUtils, CommonUtils, Config) {
    'use strict';

    var exports = {
        getMonthList: function (startDt, endDt, selectedYear) {
            var result;
            var START_MONTH = 0;
            var END_MONTH = 11;

            //TODO (S.Panfilov)  check
            if (startDt || endDt) {
                var isYearOfLowerLimit = (startDt) ? LimitsModel.start.y === selectedYear : false;
                var isYearOfUpperLimit = (endDt) ? LimitsModel.end.y === selectedYear : false;
                var start = (startDt) ? LimitsModel.start.m : START_MONTH;
                var end = (endDt) ? LimitsModel.end.m : END_MONTH;

                // startYear == 2015, nowYear == 2015, endYear == 2015
                if (isYearOfLowerLimit && isYearOfUpperLimit) {
                    result = CommonUtils.getArrayOfNumbers(start, end);
                }
                // startYear == 2015, nowYear == 2015, endYear == 2016 (or null)
                else if (isYearOfLowerLimit && !isYearOfUpperLimit) {
                    result = CommonUtils.getArrayOfNumbers(start, END_MONTH);
                }
                // startYear == 2014 (or null), nowYear == 2015, endYear == 2015
                else if (!isYearOfLowerLimit && isYearOfUpperLimit) {
                    result = CommonUtils.getArrayOfNumbers(START_MONTH, end);
                }
                else {
                    // in all other cases return array of 12 month
                    result = CommonUtils.getArrayOfNumbers(START_MONTH, END_MONTH);
                }
            } else {
                // in all other cases return array of 12 month
                result = CommonUtils.getArrayOfNumbers(START_MONTH, END_MONTH);
            }

            return CommonUtils.intArraySort(result, Config.monthListDirection);
        }
    };

    return exports;
})(LimitsModel, DateUtils, CommonUtils, Config);
var DaysUtils = (function (LimitsModel, DateUtils, CommonUtils, Config) {
    'use strict';

    var exports = {
        getDaysList: function (startDt, endDt, year, month) {
            var result;
            var START_DAY = 1;
            var lastDayInMonth = DateUtils.getDaysInMonth(month, year);

            //TODO (S.Panfilov)  check
            if (startDt || endDt) {
                var isYearOfLowerLimit = (startDt) ? LimitsModel.start.y === year : false;
                var isYearOfUpperLimit = (endDt) ? LimitsModel.end.y === year : false;
                var isMonthOfLowerLimit = (startDt) ? LimitsModel.start.m === month : false;
                var isMonthOfUpperLimit = (endDt) ? LimitsModel.end.m === month : false;

                var isLowerLimit = (isYearOfLowerLimit && isMonthOfLowerLimit);
                var isUpperLimit = (isYearOfUpperLimit && isMonthOfUpperLimit);

                var start = (startDt) ? LimitsModel.start.d : START_DAY;
                var end = (endDt) ? LimitsModel.end.d : lastDayInMonth;

                if (isLowerLimit && isUpperLimit) {
                    result = CommonUtils.getArrayOfNumbers(start, end);
                } else if (isLowerLimit && !isUpperLimit) {
                    result = CommonUtils.getArrayOfNumbers(start, lastDayInMonth);
                } else if (!isLowerLimit && isUpperLimit) {
                    result = CommonUtils.getArrayOfNumbers(START_DAY, end);
                } else {
                    // in all other cases return array of 12 month
                    result = CommonUtils.getArrayOfNumbers(START_DAY, lastDayInMonth);
                }
            } else {
                // in all other cases return array of 12 month
                result = CommonUtils.getArrayOfNumbers(START_DAY, lastDayInMonth);
            }

            return CommonUtils.intArraySort(result, Config.daysListDirection);
        }
    };

    return exports;
})(LimitsModel, DateUtils, CommonUtils, Config);
var DataClass = (function (DateUtils, CommonUtils, YearsUtils, MonthUtils, DaysUtils, DateModel) {
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
        } else
        //start == 1; model == 0
        if (!isUpperStart) {
            result = new DateModel(start);
        } else
        //model == 4; end == 3;
        if (!isUpperStart) {
            result = new DateModel(end);
        }
        //paranoid case
        else {
            result = new DateModel(new Date().getTime());
        }

        return result;
    }

    return function (model, start, end) {

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

        model.dt = CommonUtils.isValidNumber(model.dt) ? model.dt : null;
        start = CommonUtils.isValidNumber(start) ? start : null;
        end = CommonUtils.isValidNumber(end) ? end : null;

        exports.selected = _getSelected(model, start, end);
        var selectedYear = DateUtils.getYear(exports.selected.dt);
        var selectedMonth = DateUtils.getMonth(exports.selected.dt);

        _private._limitDates = new LimitsModel(start, end);
        _private._start = start;
        _private._end = end;

        exports.list.y = YearsUtils.getYearsList(start, end, exports.selected, _private._limitDates);
        exports.list.m = MonthUtils.getMonthList(start, end, selectedYear, _private._limitDates);
        exports.list.d = DaysUtils.getDaysList(start, end, selectedYear, selectedMonth, exports.selected, _private._limitDates);

        return exports;
    };

})(DateUtils, CommonUtils, YearsUtils, MonthUtils, DaysUtils, DateModel);