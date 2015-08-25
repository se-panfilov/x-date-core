angular.module("angular-pd.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("apd.html","<div class=apd_root><select ng-model=data.selected.day ng-options=\"day for day in data.list.d\" ng-init=\"data.selected.day = data.list.d[0]\" ng-change=onDaySelectChanged(data.selected.day) id={{::apdDayId}} class=\"apd_elem apd_select_day apd_select {{::apdDayClasses}}\"></select><span ng-bind=daysList[data.selected.dayOfWeek] class=\"apd_elem apd_day_of_week\"></span><select ng-model=data.selected.month ng-options=\"monthList[month] for month in data.list.m\" ng-init=\"data.selected.month = data.list.m[0]\" ng-change=onMonthSelectChanged(data.selected.month) id={{::apdMonthId}} class=\"apd_elem apd_select_month apd_select {{::apdMonthClasses}}\"></select><select ng-model=data.selected.year ng-options=\"year for year in data.list.y\" ng-init=\"data.selected.year = data.list.y[0]\" ng-change=onYearSelectChanged(data.selected.year) id={{::apdYearId}} class=\"apd_elem apd_select_year apd_select {{::apdYearClasses}}\"></select></div>");}]);
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

    function getVal(datetime, method) {
        var date = new Date(datetime);
        return method.call(date);
    }

    var exports = {
        getDay: function (datetime) {
            var method = (Config.isUTC) ? Date.prototype.getUTCDate : Date.prototype.getDate;
            return getVal(datetime, method);
        },
        getDayOfWeek: function (datetime) {
            var method = (Config.isUTC) ? Date.prototype.getUTCDay : Date.prototype.getDay;
            return getVal(datetime, method);
        },
        getYear: function (datetime) {
            var method = (Config.isUTC) ? Date.prototype.getUTCFullYear : Date.prototype.getFullYear;
            return getVal(datetime, method);
        },
        getMonth: function (datetime) {
            var method = (Config.isUTC) ? Date.prototype.getUTCMonth : Date.prototype.getMonth;
            return getVal(datetime, method);
        },
        getDaysInMonth: function (month, year) {
            return new Date(year, month + 1, 0).getDate();
        },
        isValidModel: function (model) {
            return !!model && (!!model.datetime || model.datetime === 0);
        },
        isDateUpperStartLimit: function (dt, startLimitTime) {
            if (!startLimitTime) return true;
            return (dt > startLimitTime);
        },
        isDateLowerEndLimit: function (dt, endLimitTime) {
            if (!endLimitTime) return true;
            return (dt < endLimitTime);
        },
        isDateBetweenLimits: function (dt, startLimitTime, endLimitTime) {
            return (exports.isDateUpperStartLimit(dt, startLimitTime) && exports.isDateLowerEndLimit(dt, endLimitTime));
        }
    };

    return exports;
})(Config);
var LimitsModel = (function (DateUtils) {
    'use strict';

    function LimitsModel(startDt, endDt) {

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
            return this;
        }

        function _setEnd(dt) {
            exports.end.d = DateUtils.getDay(dt);
            exports.end.m = DateUtils.getMonth(dt);
            exports.end.y = DateUtils.getYear(dt);
            exports.end.dt = dt;
            return this;
        }

        function _setNow() {
            var dt = new Date().getTime();
            exports.now.d = DateUtils.getDay(dt);
            exports.now.m = DateUtils.getMonth(dt);
            exports.now.y = DateUtils.getYear(dt);
            exports.now.dt = dt;
            return this;
        }

        _setStart(startDt);
        _setEnd(endDt);
        _setNow();
        
        return exports;
    }
    
    return LimitsModel;
})(DateUtils);
var DateModel = (function (DateUtils) {
    'use strict';

    function DateModel(datetime) {
        this.day = DateUtils.getDay(datetime);
        this.dayOfWeek = DateUtils.getDayOfWeek(datetime);
        this.month = DateUtils.getMonth(datetime);
        this.year = DateUtils.getYear(datetime);
        this.datetime = datetime;
        this.timezone = new Date(datetime).getTimezoneOffset();

        return this;
    }

    return DateModel;
})(DateUtils);
var YearsUtils = (function (DateUtils, CommonUtils, Config) {
    'use strict';

    var exports = {
        getYearsList: function (startDateTime, endDateTime, selected, limitsModel) {
            var result = [];
            var DEFAULT_YEARS_COUNT = 10;

            var start = limitsModel.start.y;
            var end = limitsModel.end.y;
            var now = limitsModel.now.y;
            var selectedYear = DateUtils.getYear(selected.dt);
            var latestPossibleYear = (selectedYear > now) ? selectedYear : now;
            var firstPossibleYear = (selectedYear < now) ? selectedYear : now;
            latestPossibleYear = latestPossibleYear + (DEFAULT_YEARS_COUNT - 1);
            firstPossibleYear = firstPossibleYear - (DEFAULT_YEARS_COUNT - 1);

            //start = 2011, end = 2014
            if ((startDateTime && endDateTime) && (startDateTime < endDateTime)) {
                result = CommonUtils.getArrayOfNumbers(start, end);
            }

            //start = 2014, end = 2011
            else if ((startDateTime && endDateTime) && (startDateTime > endDateTime)) {
                result = CommonUtils.getArrayOfNumbers(end, start);
            }

            //start = 2011, end = 2011
            else if ((startDateTime && endDateTime) && (startDateTime === endDateTime)) {
                result = CommonUtils.getArrayOfNumbers(start, end);
            }

            //start = 2014, end = null
            else if (startDateTime && !endDateTime) {
                result = CommonUtils.getArrayOfNumbers(start, latestPossibleYear);
            }

            //start = null, end = 2014
            else if (!startDateTime && endDateTime) {
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
            else if (!startDateTime && !endDateTime) {
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
        getMonthList: function (startDateTime, endDateTime, selectedYear) {
            var result;
            var START_MONTH = 0;
            var END_MONTH = 11;

            //TODO (S.Panfilov)  check
            if (startDateTime || endDateTime) {
                var isYearOfLowerLimit = (startDateTime) ? LimitsModel.start.y === selectedYear : false;
                var isYearOfUpperLimit = (endDateTime) ? LimitsModel.end.y === selectedYear : false;
                var start = (startDateTime) ? LimitsModel.start.m : START_MONTH;
                var end = (endDateTime) ? LimitsModel.end.m : END_MONTH;

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
        getDaysList: function (startDateTime, endDateTime, selectedYear, selectedMonth) {
            var result;
            var START_DAY = 1;
            var lastDayInMonth = DateUtils.getDaysInMonth(selectedMonth, selectedYear);

            //TODO (S.Panfilov)  check
            if (startDateTime || endDateTime) {
                var isYearOfLowerLimit = (startDateTime) ? LimitsModel.start.y === selectedYear : false;
                var isYearOfUpperLimit = (endDateTime) ? LimitsModel.end.y === selectedYear : false;
                var isMonthOfLowerLimit = (startDateTime) ? LimitsModel.start.m === selectedMonth : false;
                var isMonthOfUpperLimit = (endDateTime) ? LimitsModel.end.m === selectedMonth : false;

                var isLowerLimit = (isYearOfLowerLimit && isMonthOfLowerLimit);
                var isUpperLimit = (isYearOfUpperLimit && isMonthOfUpperLimit);

                var start = (startDateTime) ? LimitsModel.start.d : START_DAY;
                var end = (endDateTime) ? LimitsModel.end.d : lastDayInMonth;

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
        startDateTime = CommonUtils.isValidNumber(startDateTime) ? startDateTime : null;
        endDateTime = CommonUtils.isValidNumber(endDateTime) ? endDateTime : null;

        exports.selected = _getSelected(model, startDateTime, endDateTime);
        var selectedYear = DateUtils.getYear(exports.selected.dt);
        var selectedMonth = DateUtils.getMonth(exports.selected.dt);

        _private._limitDates = new LimitsModel(startDateTime, endDateTime);
        _private._start = startDateTime;
        _private._end = endDateTime;

        exports.list.y = YearsUtils.getYearsList(startDateTime, endDateTime, exports.selected, _private._limitDates);
        exports.list.m = MonthUtils.getMonthList(startDateTime, endDateTime, selectedYear, _private._limitDates);
        exports.list.d = DaysUtils.getDaysList(startDateTime, endDateTime, selectedYear, selectedMonth, exports.selected, _private._limitDates);

        return exports;
    }

})(DateUtils, CommonUtils, YearsUtils, MonthUtils, DaysUtils, DateModel);
var angularView = (function (DateUtils, DataClass, Config) {
    'use strict';


    angular.module('angular-pd', [
        'angular-pd.templates'
    ])

        .directive('pureDatepicker', function () {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'apd.html',
                scope: {
                    ngModel: '=',
                    apdStart: '=?',
                    apdEnd: '=?',
                    apdDayId: '@?',
                    apdMonthId: '@?',
                    apdYearId: '@?',
                    apdDayClasses: '@?',
                    apdMonthClasses: '@?',
                    apdYearClasses: '@?',
                    apdLocalization: '=?',
                    apdIsUtc: '=?'
                },
                link: function (scope) {

                    scope.apdIsUtc = scope.apdIsUtc || false;

                    //TODO (S.Panfilov) check for cross-browser support
                    //TODO (S.Panfilov) may be should add tests
                    var settings = {
                        initDateModel: null,
                        startDateTime: null,
                        endDateTime: null
                    };

                    var ngModelWatcher = {
                        handler: null,
                        start: function (callback) {
                            ngModelWatcher.handler = scope.$watch('ngModel.datetime', function (value, oldValue) {
                                if (callback) {
                                    callback(value, oldValue)
                                }

                            }, true);
                        },
                        stop: function () {
                            ngModelWatcher.handler();
                            return true;
                        }
                    };


                    function getLimitSafeDatetime(day, month, year) {

                        var datetime = new Date(year, month, day).getTime();

                        if (!DateUtils.isDateBetweenLimits(datetime, settings.startDateTime, settings.endDateTime)) {
                            if (!DateUtils.isDateUpperStartLimit(datetime, settings.startDateTime)) {
                                datetime = settings.startDateTime;
                            } else if (!DateUtils.isDateLowerEndLimit(datetime, settings.endDateTime)) {
                                datetime = settings.endDateTime;
                            }
                        }

                        return datetime;
                    }

                    function updateModel(datetime) {
                        ngModelWatcher.stop();
                        scope.data.selected = new DateModel(datetime);
                        scope.ngModel = scope.data.selected;
                        ngModelWatcher.start(onModelChange);
                    }

                    function onModelChange(datetime, oldValue) {
                        if (datetime === oldValue) {
                            return;
                        }

                        var day = DateUtils.getDay(datetime);
                        var month = DateUtils.getMonth(datetime);
                        var year = DateUtils.getYear(datetime);

                        datetime = getLimitSafeDatetime(day, month, year);
                        updateModel(datetime);

                        scope.data.reloadYearsList();
                        scope.data.reloadMonthList();
                        scope.data.reloadDaysList();
                    }

                    function getInitDateModel(model) {
                        var isInitModelValid = DateUtils.isValidModel(model);
                        var initDatetime;

                        if (isInitModelValid) {
                            initDatetime = model.datetime
                        } else {
                            initDatetime = new Date().getTime();
                        }

                        var day = DateUtils.getDay(initDatetime);
                        var month = DateUtils.getMonth(initDatetime);
                        var year = DateUtils.getYear(initDatetime);

                        var limitSafeDatetime = getLimitSafeDatetime(day, month, year);

                        return new DateModel(limitSafeDatetime);
                    }

                    function _initData(initDateModel, startDateTime, endDateTime) {
                        scope.data = new DataClass(initDateModel, startDateTime, endDateTime);
                        scope.ngModel = scope.data.selected;
                    }


                    scope.onDaySelectChanged = function (day) {
                        if (!day) return;

                        var datetime = getLimitSafeDatetime(scope.data.selected.day, scope.data.selected.month, scope.data.selected.year);
                        updateModel(datetime);
                    };

                    scope.onMonthSelectChanged = function (month) {
                        if (!month && month !== 0) return;

                        var datetime;
                        var year = scope.data.selected.year;
                        var day = scope.data.selected.day;

                        datetime = getLimitSafeDatetime(day, month, year);
                        updateModel(datetime);

                        scope.data.reloadDaysList();
                    };

                    scope.onYearSelectChanged = function (year) {
                        if (!year && year !== 0) return;

                        var month = scope.data.selected.month;
                        var day = scope.data.selected.day;

                        var datetime = getLimitSafeDatetime(day, month, year);
                        updateModel(datetime);

                        scope.data.reloadMonthList();
                        scope.data.reloadDaysList();
                    };

                    (function _init() {
                        settings.startDateTime = (scope.apdStart) ? +scope.apdStart : null;
                        settings.endDateTime = (scope.apdEnd) ? +scope.apdEnd : null;
                        settings.initDateModel = getInitDateModel(scope.ngModel);
                        _initData(settings.initDateModel, settings.startDateTime, settings.endDateTime);

                        //TODO (S.Panfilov) localization fix
                        var localization = scope.apdLocalization || null;
                        scope.daysList = Config.daysList;
                        scope.monthList = Config.monthList;

                        ngModelWatcher.start(onModelChange);
                    })();

                }
            }
        });
})(DateUtils, DataClass, Config);