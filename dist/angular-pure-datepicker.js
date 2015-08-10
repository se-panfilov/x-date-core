angular.module("angular-pd.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("apd.html","<div class=apd_root><select ng-model=data.selected.day ng-options=\"day for day in data.days\" ng-init=\"data.selected.day = data.days[0]\" ng-change=onDaySelectChanged(data.selected.day) id={{::apdDayId}} class=\"apd_elem apd_select_day apd_select {{::apdDayClasses}}\"></select><span ng-bind=getDayName(data.selected.dayOfWeek) class=\"apd_elem apd_day_of_week\"></span><select ng-model=data.selected.month ng-options=\"getMonthName(month) for month in data.month\" ng-init=\"data.selected.month = data.month[0]\" ng-change=onMonthSelectChanged(data.selected.month) id={{::apdMonthId}} class=\"apd_elem apd_select_month apd_select {{::apdMonthClasses}}\"></select><select ng-model=data.selected.year ng-options=\"year for year in data.years\" ng-init=\"data.selected.year = data.years[0]\" ng-change=onYearSelectChanged(data.selected.year) id={{::apdYearId}} class=\"apd_elem apd_select_year apd_select {{::apdYearClasses}}\"></select></div>");}]);
var apd;
(function (apd) {
    var Model;
    (function (Model) {
        'use strict';
        var MessagesFactoryClass = (function () {
            function MessagesFactoryClass() {
                this.messages = {
                    wrongClassCreation: 'Class created without \'new\', wrong \'this\'',
                    wrongInstance: 'Wrong \'this\' instance',
                    invalidParams: 'Invalid params',
                    invalidDateModel: 'Invalid date model',
                    datesInverted: 'Warning! Start date > End date'
                };
            }
            MessagesFactoryClass.throwDeveloperError = function (message) {
                console.error(message);
            };
            MessagesFactoryClass.throwModelValidationMessage = function (field) {
                if (!(this instanceof MessagesFactoryClass)) {
                    console.error('Wrong \'this\' instance');
                    return false;
                }
                this.throwDeveloperError(this.messages.invalidDateModel + ': error on field \"' + field + '+\"');
            };
            MessagesFactoryClass.throwInvalidParamsMessage = function () {
                if (!(this instanceof MessagesFactoryClass)) {
                    console.error('Wrong \'this\' instance');
                    return false;
                }
                this.throwDeveloperError(this.messages.invalidParams);
            };
            MessagesFactoryClass.throwWrongClassCreationMessage = function () {
                if (!(this instanceof MessagesFactoryClass)) {
                    console.error('Wrong \'this\' instance');
                    return false;
                }
                this.throwDeveloperError(this.messages.wrongClassCreation);
            };
            MessagesFactoryClass.throwWrongInstanceMessage = function () {
                if (!(this instanceof MessagesFactoryClass)) {
                    console.error('Wrong \'this\' instance');
                    return false;
                }
                this.throwDeveloperError(this.messages.wrongInstance);
            };
            MessagesFactoryClass.throwDatesInvertedMessage = function () {
                if (!(this instanceof MessagesFactoryClass)) {
                    console.error('Wrong \'this\' instance');
                    return false;
                }
                this.throwDeveloperError(this.messages.datesInverted);
            };
            return MessagesFactoryClass;
        })();
        Model.MessagesFactoryClass = MessagesFactoryClass;
    })(Model = apd.Model || (apd.Model = {}));
})(apd || (apd = {}));

var apd;
(function (apd) {
    var Model;
    (function (Model) {
        'use strict';
        var WeekClass = (function () {
            function WeekClass(days) {
                var _this = this;
                this._setDefaultWeek = function () {
                    return new WeekClass(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
                };
                this.getDayName = function (dayNum) {
                    if (!(_this instanceof WeekClass)) {
                        apd.Model.MessagesFactoryClass.throwWrongInstanceMessage();
                        return null;
                    }
                    return _this.days[dayNum];
                };
                if (!(this instanceof WeekClass)) {
                    apd.Model.MessagesFactoryClass.throwWrongClassCreationMessage();
                    return new WeekClass(days);
                }
                if (days) {
                    this.days = days;
                    return this;
                }
                else {
                    return this._setDefaultWeek();
                }
            }
            return WeekClass;
        })();
        Model.WeekClass = WeekClass;
    })(Model = apd.Model || (apd.Model = {}));
})(apd || (apd = {}));

var apd;
(function (apd) {
    var Model;
    (function (Model) {
        'use strict';
        var LimitDatesClass = (function () {
            function LimitDatesClass(startDateTime, endDateTime, isUTC) {
                this._setStartDate = function (datetime) {
                    if (!(this instanceof LimitDatesClass)) {
                        apd.Model.MessagesFactoryClass.throwWrongInstanceMessage();
                        return false;
                    }
                    this.startDate.day = apd.Model.DateUtilsClass.getDay(datetime, this._isUTC);
                    this.startDate.month = apd.Model.DateUtilsClass.getMonth(datetime, this._isUTC);
                    this.startDate.year = apd.Model.DateUtilsClass.getYear(datetime, this._isUTC);
                    this.startDate.datetime = datetime;
                    return this;
                };
                this._setEndDate = function (datetime) {
                    if (!(this instanceof LimitDatesClass)) {
                        apd.Model.MessagesFactoryClass.throwWrongInstanceMessage();
                        return false;
                    }
                    this.endDate.day = apd.Model.DateUtilsClass.getDay(datetime, this._isUTC);
                    this.endDate.month = apd.Model.DateUtilsClass.getMonth(datetime, this._isUTC);
                    this.endDate.year = apd.Model.DateUtilsClass.getYear(datetime, this._isUTC);
                    this.endDate.datetime = datetime;
                    return this;
                };
                this._setNowDate = function () {
                    if (!(this instanceof LimitDatesClass)) {
                        apd.Model.MessagesFactoryClass.throwWrongInstanceMessage();
                        return false;
                    }
                    var datetime = new Date().getTime();
                    this.nowDate.day = apd.Model.DateUtilsClass.getDay(datetime, this._isUTC);
                    this.nowDate.month = apd.Model.DateUtilsClass.getMonth(datetime, this._isUTC);
                    this.nowDate.year = apd.Model.DateUtilsClass.getYear(datetime, this._isUTC);
                    this.nowDate.datetime = datetime;
                    return this;
                };
                if (!(this instanceof LimitDatesClass)) {
                    apd.Model.MessagesFactoryClass.throwWrongClassCreationMessage();
                    return new LimitDatesClass(startDateTime, endDateTime, isUTC);
                }
                this._isUTC = isUTC;
                this.startDate = { day: null, month: null, year: null, datetime: null };
                this.endDate = { day: null, month: null, year: null, datetime: null };
                this.nowDate = { day: null, month: null, year: null, datetime: null };
                this._setStartDate(startDateTime);
                this._setEndDate(endDateTime);
                this._setNowDate();
            }
            LimitDatesClass.isDateUpperStartLimit = function (datetime, startLimitTime) {
                if (!startLimitTime)
                    return true;
                return (datetime > startLimitTime);
            };
            LimitDatesClass.isDateLowerEndLimit = function (datetime, endLimitTime) {
                if (!endLimitTime)
                    return true;
                return (datetime < endLimitTime);
            };
            LimitDatesClass.isDateBetweenLimits = function (datetime, startLimitTime, endLimitTime) {
                return (this.isDateUpperStartLimit(datetime, startLimitTime) && this.isDateLowerEndLimit(datetime, endLimitTime));
            };
            return LimitDatesClass;
        })();
        Model.LimitDatesClass = LimitDatesClass;
    })(Model = apd.Model || (apd.Model = {}));
})(apd || (apd = {}));

var apd;
(function (apd) {
    var Model;
    (function (Model) {
        'use strict';
        var DataClass = (function () {
            function DataClass(selected, startDateTime, endDateTime, isUTC, yearsListDirection, monthListDirection, daysListDirection) {
                this.yearsListDirection = 'desc';
                this.monthListDirection = 'asc';
                this.daysListDirection = 'asc';
                this.isValidNumber = function (num) {
                    var isNumber = !isNaN(num);
                    var isNotInfinity = isFinite(num);
                    return isNumber && isNotInfinity;
                };
                this._getSelected = function (selected, startDateTime, endDateTime) {
                    var result;
                    var isBiggerThenStart = (selected.datetime > startDateTime);
                    var isEqualToStart = (selected.datetime === startDateTime);
                    var isLowerThenEnd = (selected.datetime > endDateTime);
                    var isEqualToEnd = (selected.datetime === endDateTime);
                    if ((isBiggerThenStart || isEqualToStart) || (isLowerThenEnd || isEqualToEnd)) {
                        result = new Model.DateModelClass(selected.datetime, this._isUTC);
                    }
                    else if (!isBiggerThenStart) {
                        result = new Model.DateModelClass(startDateTime, this._isUTC);
                    }
                    else if (!isBiggerThenStart) {
                        result = new Model.DateModelClass(endDateTime, this._isUTC);
                    }
                    else {
                        result = new Model.DateModelClass(new Date().getTime(), this._isUTC);
                    }
                    return result;
                };
                this._intArraySort = function (arr, direction) {
                    if (direction === void 0) { direction = 'asc'; }
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
                };
                this._getArrayOfNumbers = function (start, end) {
                    var result = [];
                    for (var i = start; i <= end; i++) {
                        result.push(i);
                    }
                    return result;
                };
                this.reloadYearsList = function () {
                    if (!(this instanceof DataClass)) {
                        apd.Model.MessagesFactoryClass.throwWrongInstanceMessage();
                        return null;
                    }
                    this.years = this._getYearsList(this._startDateTime, this._endDateTime, this._limitDates, this.yearsListDirection);
                    return this;
                };
                this._getYearsList = function (startDateTime, endDateTime, limitDates, direction) {
                    if (!(this instanceof DataClass)) {
                        apd.Model.MessagesFactoryClass.throwWrongInstanceMessage();
                        return null;
                    }
                    var result = [];
                    var DEFAULT_YEARS_COUNT = 10;
                    var start = limitDates.startDate.year;
                    var end = limitDates.endDate.year;
                    var now = limitDates.nowDate.year;
                    var selectedYear = apd.Model.DateUtilsClass.getYear(this.selected.datetime, this._isUTC);
                    var latestPossibleYear = (selectedYear > now) ? selectedYear : now;
                    var firstPossibleYear = (selectedYear < now) ? selectedYear : now;
                    latestPossibleYear = latestPossibleYear + (DEFAULT_YEARS_COUNT - 1);
                    firstPossibleYear = firstPossibleYear - (DEFAULT_YEARS_COUNT - 1);
                    if ((startDateTime && endDateTime) && (startDateTime < endDateTime)) {
                        result = this._getArrayOfNumbers(start, end);
                    }
                    else if ((startDateTime && endDateTime) && (startDateTime > endDateTime)) {
                        apd.Model.MessagesFactoryClass.throwDatesInvertedMessage();
                        result = this._getArrayOfNumbers(end, start);
                    }
                    else if ((startDateTime && endDateTime) && (startDateTime === endDateTime)) {
                        result = this._getArrayOfNumbers(start, end);
                    }
                    else if (startDateTime && !endDateTime) {
                        result = this._getArrayOfNumbers(start, latestPossibleYear);
                    }
                    else if (!startDateTime && endDateTime) {
                        if (limitDates.endDate.year >= limitDates.nowDate.year) {
                            if ((firstPossibleYear - DEFAULT_YEARS_COUNT) > (end - DEFAULT_YEARS_COUNT)) {
                                result = this._getArrayOfNumbers(firstPossibleYear, end);
                            }
                            else {
                                result = this._getArrayOfNumbers(end - (DEFAULT_YEARS_COUNT - 1), end);
                            }
                        }
                        else if (limitDates.endDate.year > limitDates.nowDate.year) {
                            result = this._getArrayOfNumbers(end - (DEFAULT_YEARS_COUNT - 1), end);
                        }
                    }
                    else if (!startDateTime && !endDateTime) {
                        result = this._getArrayOfNumbers(firstPossibleYear, latestPossibleYear);
                    }
                    return this._intArraySort(result, direction);
                };
                this.reloadMonthList = function () {
                    if (!(this instanceof DataClass)) {
                        apd.Model.MessagesFactoryClass.throwWrongInstanceMessage();
                        return null;
                    }
                    var selectedYear = apd.Model.DateUtilsClass.getYear(this.selected.datetime, this._isUTC);
                    this.month = this._getMonthList(this._startDateTime, this._endDateTime, this._limitDates, selectedYear, this.monthListDirection);
                    return this;
                };
                this._getMonthList = function (startDateTime, endDateTime, limitDates, selectedYear, direction) {
                    if (!(this instanceof DataClass)) {
                        apd.Model.MessagesFactoryClass.throwWrongInstanceMessage();
                        return null;
                    }
                    var result;
                    var START_MONTH = 0;
                    var END_MONTH = 11;
                    if (startDateTime || endDateTime) {
                        var isYearOfLowerLimit = (startDateTime) ? limitDates.startDate.year === selectedYear : false;
                        var isYearOfUpperLimit = (endDateTime) ? limitDates.endDate.year === selectedYear : false;
                        var start = (startDateTime) ? limitDates.startDate.month : START_MONTH;
                        var end = (endDateTime) ? limitDates.endDate.month : END_MONTH;
                        if (isYearOfLowerLimit && isYearOfUpperLimit) {
                            result = this._getArrayOfNumbers(start, end);
                        }
                        else if (isYearOfLowerLimit && !isYearOfUpperLimit) {
                            result = this._getArrayOfNumbers(start, END_MONTH);
                        }
                        else if (!isYearOfLowerLimit && isYearOfUpperLimit) {
                            result = this._getArrayOfNumbers(START_MONTH, end);
                        }
                        else {
                            result = this._getArrayOfNumbers(START_MONTH, END_MONTH);
                        }
                    }
                    else {
                        result = this._getArrayOfNumbers(START_MONTH, END_MONTH);
                    }
                    return this._intArraySort(result, direction);
                };
                this.reloadDaysList = function () {
                    if (!(this instanceof DataClass)) {
                        apd.Model.MessagesFactoryClass.throwWrongInstanceMessage();
                        return null;
                    }
                    var selectedYear = apd.Model.DateUtilsClass.getYear(this.selected.datetime, this._isUTC);
                    var selectedMonth = apd.Model.DateUtilsClass.getMonth(this.selected.datetime, this._isUTC);
                    this.days = this._getDaysList(this._startDateTime, this._endDateTime, this._limitDates, selectedYear, selectedMonth, this.daysListDirection);
                    return this;
                };
                this._getDaysList = function (startDateTime, endDateTime, limitDates, selectedYear, selectedMonth, direction) {
                    if (!(this instanceof DataClass)) {
                        apd.Model.MessagesFactoryClass.throwWrongInstanceMessage();
                        return null;
                    }
                    var result;
                    var START_DAY = 1;
                    var lastDayInMonth = DataClass.getDaysInMonth(selectedMonth, selectedYear);
                    if (startDateTime || endDateTime) {
                        var isYearOfLowerLimit = (startDateTime) ? limitDates.startDate.year === selectedYear : false;
                        var isYearOfUpperLimit = (endDateTime) ? limitDates.endDate.year === selectedYear : false;
                        var isMonthOfLowerLimit = (startDateTime) ? limitDates.startDate.month === selectedMonth : false;
                        var isMonthOfUpperLimit = (endDateTime) ? limitDates.endDate.month === selectedMonth : false;
                        var isLowerLimit = (isYearOfLowerLimit && isMonthOfLowerLimit);
                        var isUpperLimit = (isYearOfUpperLimit && isMonthOfUpperLimit);
                        var start = (startDateTime) ? limitDates.startDate.day : START_DAY;
                        var end = (endDateTime) ? limitDates.endDate.day : lastDayInMonth;
                        if (isLowerLimit && isUpperLimit) {
                            result = this._getArrayOfNumbers(start, end);
                        }
                        else if (isLowerLimit && !isUpperLimit) {
                            result = this._getArrayOfNumbers(start, lastDayInMonth);
                        }
                        else if (!isLowerLimit && isUpperLimit) {
                            result = this._getArrayOfNumbers(START_DAY, end);
                        }
                        else {
                            result = this._getArrayOfNumbers(START_DAY, lastDayInMonth);
                        }
                    }
                    else {
                        result = this._getArrayOfNumbers(START_DAY, lastDayInMonth);
                    }
                    return this._intArraySort(result, direction);
                };
                this._getIntArr = function (length) {
                    if (!(this instanceof DataClass)) {
                        apd.Model.MessagesFactoryClass.throwWrongInstanceMessage();
                        return null;
                    }
                    if (!length && length !== 0) {
                        apd.Model.MessagesFactoryClass.throwInvalidParamsMessage();
                        return null;
                    }
                    return length ? this._getIntArr(length - 1).concat(length) : [];
                };
                if (!(this instanceof DataClass)) {
                    apd.Model.MessagesFactoryClass.throwWrongClassCreationMessage();
                    return new DataClass(selected, startDateTime, endDateTime, isUTC, yearsListDirection, monthListDirection, daysListDirection);
                }
                var self = this;
                selected.datetime = self.isValidNumber(selected.datetime) ? selected.datetime : null;
                startDateTime = self.isValidNumber(startDateTime) ? startDateTime : null;
                endDateTime = self.isValidNumber(endDateTime) ? endDateTime : null;
                self._isUTC = isUTC;
                self.selected = self._getSelected(selected, startDateTime, endDateTime);
                var selectedYear = apd.Model.DateUtilsClass.getYear(this.selected.datetime, this._isUTC);
                var selectedMonth = apd.Model.DateUtilsClass.getMonth(this.selected.datetime, this._isUTC);
                self.yearsListDirection = yearsListDirection || self.yearsListDirection;
                self.monthListDirection = monthListDirection || self.monthListDirection;
                self.daysListDirection = daysListDirection || self.daysListDirection;
                self._limitDates = new Model.LimitDatesClass(startDateTime, endDateTime, this._isUTC);
                self._startDateTime = startDateTime;
                self._endDateTime = endDateTime;
                self.years = self._getYearsList(startDateTime, endDateTime, self._limitDates, self.yearsListDirection);
                self.month = self._getMonthList(startDateTime, endDateTime, self._limitDates, selectedYear, self.monthListDirection);
                self.days = self._getDaysList(startDateTime, endDateTime, self._limitDates, selectedYear, selectedMonth, self.daysListDirection);
                return this;
            }
            DataClass.getDaysInMonth = function (month, year) {
                return new Date(year, month + 1, 0).getDate();
            };
            return DataClass;
        })();
        Model.DataClass = DataClass;
    })(Model = apd.Model || (apd.Model = {}));
})(apd || (apd = {}));

var apd;
(function (apd) {
    var Model;
    (function (Model) {
        'use strict';
        var DateUtilsClass = (function () {
            function DateUtilsClass() {
            }
            DateUtilsClass.getMonth = function (datetime, isUTC) {
                var result;
                if (isUTC) {
                    result = new Date(datetime).getUTCMonth();
                }
                else {
                    result = new Date(datetime).getMonth();
                }
                return result;
            };
            DateUtilsClass.getYear = function (datetime, isUTC) {
                var result;
                if (isUTC) {
                    result = new Date(datetime).getUTCFullYear();
                }
                else {
                    result = new Date(datetime).getFullYear();
                }
                return result;
            };
            DateUtilsClass.getDay = function (datetime, isUTC) {
                var result;
                if (isUTC) {
                    result = new Date(datetime).getUTCDate();
                }
                else {
                    result = new Date(datetime).getDate();
                }
                return result;
            };
            DateUtilsClass.getDayOfWeek = function (datetime, isUTC) {
                var result;
                if (isUTC) {
                    result = new Date(datetime).getUTCDay();
                }
                else {
                    result = new Date(datetime).getDay();
                }
                return result;
            };
            return DateUtilsClass;
        })();
        Model.DateUtilsClass = DateUtilsClass;
    })(Model = apd.Model || (apd.Model = {}));
})(apd || (apd = {}));

var apd;
(function (apd) {
    var Model;
    (function (Model) {
        'use strict';
        var DateModelClass = (function () {
            function DateModelClass(datetime, isUTC) {
                if (!(this instanceof DateModelClass)) {
                    apd.Model.MessagesFactoryClass.throwWrongClassCreationMessage();
                    return new DateModelClass(datetime, isUTC);
                }
                this.day = apd.Model.DateUtilsClass.getDay(datetime, this._isUTC);
                this.dayOfWeek = apd.Model.DateUtilsClass.getDayOfWeek(datetime, this._isUTC);
                this.month = apd.Model.DateUtilsClass.getMonth(datetime, this._isUTC);
                this.year = apd.Model.DateUtilsClass.getYear(datetime, this._isUTC);
                this.datetime = datetime;
                this.timezone = new Date(datetime).getTimezoneOffset();
                this._isUTC = isUTC;
                return this;
            }
            DateModelClass.validate = function (model) {
                return !!(model && model.datetime);
            };
            return DateModelClass;
        })();
        Model.DateModelClass = DateModelClass;
    })(Model = apd.Model || (apd.Model = {}));
})(apd || (apd = {}));

var apd;
(function (apd) {
    var directive;
    (function (directive) {
        'use strict';
        angular.module('angular-pd', [
            'angular-pd.templates'
        ]).directive('pureDatepicker', function () {
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
                                    callback(value, oldValue);
                                }
                            }, true);
                        },
                        stop: function () {
                            if (!ngModelWatcher.handler) {
                                apd.Model.MessagesFactoryClass.throwInvalidParamsMessage();
                                return false;
                            }
                            ngModelWatcher.handler();
                            return true;
                        }
                    };
                    function getLimitSafeDatetime(day, month, year) {
                        var datetime = new Date(year, month, day).getTime();
                        if (!apd.Model.LimitDatesClass.isDateBetweenLimits(datetime, settings.startDateTime, settings.endDateTime)) {
                            if (!apd.Model.LimitDatesClass.isDateUpperStartLimit(datetime, settings.startDateTime)) {
                                datetime = settings.startDateTime;
                            }
                            else if (!apd.Model.LimitDatesClass.isDateLowerEndLimit(datetime, settings.endDateTime)) {
                                datetime = settings.endDateTime;
                            }
                        }
                        return datetime;
                    }
                    function updateModel(datetime) {
                        ngModelWatcher.stop();
                        scope.data.selected = new apd.Model.DateModelClass(datetime, scope.apdIsUtc);
                        scope.ngModel = scope.data.selected;
                        ngModelWatcher.start(onModelChange);
                    }
                    function onModelChange(datetime, oldValue) {
                        if (datetime === oldValue) {
                            return;
                        }
                        var day = apd.Model.DateUtilsClass.getDay(datetime, scope.apdIsUtc);
                        var month = apd.Model.DateUtilsClass.getMonth(datetime, scope.apdIsUtc);
                        var year = apd.Model.DateUtilsClass.getYear(datetime, scope.apdIsUtc);
                        datetime = getLimitSafeDatetime(day, month, year);
                        updateModel(datetime);
                        scope.data.reloadYearsList();
                        scope.data.reloadMonthList();
                        scope.data.reloadDaysList();
                    }
                    function getInitDateModel(model) {
                        var isInitModelValid = apd.Model.DateModelClass.validate(model);
                        var initDatetime;
                        if (isInitModelValid) {
                            initDatetime = model.datetime;
                        }
                        else {
                            initDatetime = new Date().getTime();
                        }
                        var day = apd.Model.DateUtilsClass.getDay(initDatetime, scope.apdIsUtc);
                        var month = apd.Model.DateUtilsClass.getMonth(initDatetime, scope.apdIsUtc);
                        var year = apd.Model.DateUtilsClass.getYear(initDatetime, scope.apdIsUtc);
                        var limitSafeDatetime = getLimitSafeDatetime(day, month, year);
                        return new apd.Model.DateModelClass(limitSafeDatetime, scope.apdIsUtc);
                    }
                    function _initData(initDateModel, startDateTime, endDateTime) {
                        scope.data = new apd.Model.DataClass(initDateModel, startDateTime, endDateTime, scope.apdIsUtc);
                        scope.ngModel = scope.data.selected;
                    }
                    scope.onDaySelectChanged = function (day) {
                        if (!day)
                            return;
                        var datetime = getLimitSafeDatetime(scope.data.selected.day, scope.data.selected.month, scope.data.selected.year);
                        updateModel(datetime);
                    };
                    scope.onMonthSelectChanged = function (month) {
                        if (!month && month !== 0)
                            return;
                        var datetime;
                        var year = scope.data.selected.year;
                        var day = scope.data.selected.day;
                        datetime = getLimitSafeDatetime(day, month, year);
                        updateModel(datetime);
                        scope.data.reloadDaysList();
                    };
                    scope.onYearSelectChanged = function (year) {
                        if (!year && year !== 0)
                            return;
                        var month = scope.data.selected.month;
                        var day = scope.data.selected.day;
                        var datetime = getLimitSafeDatetime(day, month, year);
                        updateModel(datetime);
                        scope.data.reloadMonthList();
                        scope.data.reloadDaysList();
                    };
                    function getDateTime(day, month, year) {
                        if (!day || (!month && month !== 0) || !year) {
                            apd.Model.MessagesFactoryClass.throwInvalidParamsMessage();
                        }
                        return new Date(year, month, day).getTime();
                    }
                    function isDayInMonth(day, month, year) {
                        var daysInMonth = apd.Model.DataClass.getDaysInMonth(month, year);
                        return day <= daysInMonth;
                    }
                    (function _init() {
                        settings.startDateTime = (scope.apdStart) ? +scope.apdStart : null;
                        settings.endDateTime = (scope.apdEnd) ? +scope.apdEnd : null;
                        settings.initDateModel = getInitDateModel(scope.ngModel);
                        _initData(settings.initDateModel, settings.startDateTime, settings.endDateTime);
                        var localization = scope.apdLocalization || null;
                        var week = new apd.Model.WeekClass(localization);
                        var year = new apd.Model.YearClass(localization);
                        scope.getDayName = week.getDayName;
                        scope.getMonthName = year.getMonthName;
                        ngModelWatcher.start(onModelChange);
                    })();
                }
            };
        });
    })(directive = apd.directive || (apd.directive = {}));
})(apd || (apd = {}));

var apd;
(function (apd) {
    var Model;
    (function (Model) {
        'use strict';
        var YearClass = (function () {
            function YearClass(month) {
                var _this = this;
                this._setDefaultYear = function () {
                    return new YearClass(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
                };
                this.getMonthName = function (monthNum) {
                    if (!(_this instanceof YearClass)) {
                        apd.Model.MessagesFactoryClass.throwWrongInstanceMessage();
                        return null;
                    }
                    return _this.month[monthNum];
                };
                if (!(this instanceof YearClass)) {
                    apd.Model.MessagesFactoryClass.throwWrongClassCreationMessage();
                    return new YearClass(month);
                }
                if (month) {
                    this.month = month;
                    return this;
                }
                else {
                    return this._setDefaultYear();
                }
            }
            return YearClass;
        })();
        Model.YearClass = YearClass;
    })(Model = apd.Model || (apd.Model = {}));
})(apd || (apd = {}));
