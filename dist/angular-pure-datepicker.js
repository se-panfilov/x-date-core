angular.module("angular-pd.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("apd.html","<div class=apd_root><select ng-model=data.selected.day ng-options=\"day for day in data.days\" ng-init=\"data.selected.day = data.days[0]\" ng-change=onDaySelectChanged(data.selected.day) id={{::apdDayId}} class=\"apd_elem apd_select_day apd_select {{::apdDayClasses}}\"></select><span title={{getDayOfWeekName(data.selected.dayOfWeek)}} ng-bind=getDayOfWeekShortName(data.selected.dayOfWeek) class=\"apd_elem apd_day_of_week\"></span><select ng-model=data.selected.month ng-options=\"(month + 1) for month in data.month\" ng-init=\"data.selected.month = data.month[0]\" ng-change=onMonthSelectChanged(data.selected.month) id={{::apdMonthId}} class=\"apd_elem apd_select_month apd_select {{::apdMonthClasses}}\"></select><select ng-model=data.selected.year ng-options=\"year for year in data.years\" ng-init=\"data.selected.year = data.years[0]\" ng-change=onYearSelectChanged(data.selected.year) id={{::apdYearId}} class=\"apd_elem apd_select_year apd_select {{::apdYearClasses}}\"></select></div>");}]);
//module apd.main {
//    'use strict';
angular.module('angular-pd', [
    'angular-pd.datepicker',
    'angular-pd.date_utils',
    'angular-pd.messages'
]);
//} 

/// <reference path="main.ts" />
//TODO (S.Panfilov)  is this references necessary?
var apd;
(function (apd) {
    var directive;
    (function (directive) {
        'use strict';
        var DayOfWeek = (function () {
            function DayOfWeek(name, short) {
                if (!(this instanceof DayOfWeek)) {
                }
                this.name = name;
                this.short = short;
                return this;
            }
            return DayOfWeek;
        })();
        var DaysOfWeek = (function () {
            function DaysOfWeek(days) {
                var _this = this;
                this.getListOfShorts = function () {
                    var result = [];
                    for (var i = 0; i < _this.list.length; i++) {
                        var dayOfWeek = _this.list[i];
                        result.push(dayOfWeek.short);
                    }
                    return result;
                };
                this.getListOfNames = function () {
                    var result = [];
                    for (var i = 0; i < _this.list.length; i++) {
                        var dayOfWeek = _this.list[i];
                        result.push(dayOfWeek.name);
                    }
                    return result;
                };
                this.getDayOfWeekShortName = function (dayNum) {
                    return _this.shorts[dayNum];
                };
                this.getDayOfWeekName = function (dayNum) {
                    return _this.names[dayNum];
                };
                if (!(this instanceof DaysOfWeek)) {
                }
                this.list = days;
                this.shorts = this.getListOfShorts();
                this.names = this.getListOfNames();
                return this;
            }
            return DaysOfWeek;
        })();
        var daysOfWeek = new DaysOfWeek([
            new DayOfWeek('Sunday', 'Sun'),
            new DayOfWeek('Monday', 'Mon'),
            new DayOfWeek('Tuesday', 'Tue'),
            new DayOfWeek('Wednesday', 'Wed'),
            new DayOfWeek('Thursday', 'Thu'),
            new DayOfWeek('Friday', 'Fri'),
            new DayOfWeek('Saturday', 'Sat')
        ]);
        angular.module('angular-pd.datepicker', [
            'angular-pd.templates'
        ]).directive('pureDatepicker', ['DateUtilsFactory', 'MessagesFactory', function (DateUtilsFactory, MessagesFactory) {
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
                    apdYearClasses: '@?'
                },
                link: function (scope) {
                    var settings = {
                        initDateModel: null,
                        startDateTime: null,
                        endDateTime: null
                    };
                    function init() {
                        settings.initDateModel = getInitDateModel(scope.ngModel);
                        settings.startDateTime = (scope.apdStart) ? +scope.apdStart : null;
                        settings.endDateTime = (scope.apdEnd) ? +scope.apdEnd : null;
                        _initData(settings.initDateModel, settings.startDateTime, settings.endDateTime);
                        scope.getDayOfWeekShortName = daysOfWeek.getDayOfWeekShortName;
                        scope.getDayOfWeekName = daysOfWeek.getDayOfWeekName;
                    }
                    init();
                    function getInitDateModel(model) {
                        var isInitModelValid = DateUtilsFactory.validateModel(model);
                        var initDatetime;
                        if (isInitModelValid) {
                            initDatetime = model.datetime;
                        }
                        else {
                            initDatetime = new Date().getTime();
                        }
                        return new apd.dateUtils.DateModelClass(initDatetime);
                    }
                    function _initData(initDateModel, startDateTime, endDateTime) {
                        scope.data = DateUtilsFactory.getData(initDateModel, startDateTime, endDateTime);
                        scope.ngModel = scope.data.selected;
                    }
                    function updateModel(datetime) {
                        scope.data.selected = new apd.dateUtils.DateModelClass(datetime);
                        scope.ngModel = scope.data.selected;
                    }
                    //TODO (S.Panfilov) fixes for external model change
                    //scope.$watch('ngModel.datetime', function (value, oldValue) {
                    //    if (value === oldValue) {
                    //        return;
                    //    }
                    //
                    //    _initData(settings.initDateModel, settings.startDateTime, settings.endDateTime);
                    //}, true);
                    scope.onDaySelectChanged = function (day) {
                        if (!day)
                            return;
                        var datetime = getDateTime(scope.data.selected.day, scope.data.selected.month, scope.data.selected.year);
                        updateModel(datetime);
                    };
                    scope.onMonthSelectChanged = function (month) {
                        if (!month && month !== 0)
                            return;
                        var datetime;
                        var year = scope.data.selected.year;
                        var day = scope.data.selected.day;
                        if (!isCorrectDay(day, month, year)) {
                            day = scope.data.getDaysInMonth(month, year);
                        }
                        datetime = getDateTime(day, month, year);
                        updateModel(datetime);
                    };
                    scope.onYearSelectChanged = function (year) {
                        if (!year && year !== 0)
                            return;
                        var datetime;
                        var month = scope.data.selected.month;
                        var day = scope.data.selected.day;
                        if (!isCorrectDay(day, month, year)) {
                            day = scope.data.getDaysInMonth(year, year);
                        }
                        datetime = getDateTime(day, month, year);
                        updateModel(datetime);
                    };
                    function getDateTime(day, month, year) {
                        if (!day || (!month && month !== 0) || !year) {
                            MessagesFactory.throwInvalidParamsMessage();
                        }
                        return new Date(year, month, day).getTime();
                    }
                    function isCorrectDay(day, month, year) {
                        var daysInMonth = scope.data.getDaysInMonth(month, year);
                        return day <= daysInMonth;
                    }
                }
            };
        }]);
    })(directive = apd.directive || (apd.directive = {}));
})(apd || (apd = {}));

var apd;
(function (apd) {
    var messages;
    (function (messages) {
        'use strict';
        var MessagesFactoryClass = (function () {
            function MessagesFactoryClass() {
                this.messages = {
                    wrongInstance: 'Class created without \'new\', wrong \'this\'',
                    invalidParams: 'Invalid params',
                    invalidDateModel: 'Invalid date model'
                };
                this.throwDeveloperError = function (message) {
                    console.error(message);
                };
            }
            MessagesFactoryClass.prototype.throwModelValidationMessage = function (field) {
                //TODO (S.Panfilov) possibly problems with this
                this.throwDeveloperError(this.messages.invalidDateModel + ': error on field \"' + field + '+\"');
            };
            MessagesFactoryClass.prototype.throwInvalidParamsMessage = function () {
                //TODO (S.Panfilov) possibly problems with this
                this.throwDeveloperError(this.messages.invalidParams);
            };
            MessagesFactoryClass.prototype.throwWrongInstanceMessage = function () {
                //TODO (S.Panfilov) possibly problems with this
                this.throwDeveloperError(this.messages.wrongInstance);
            };
            return MessagesFactoryClass;
        })();
        angular.module('angular-pd.messages', []).factory('MessagesFactory', function () {
            return new MessagesFactoryClass();
        });
    })(messages = apd.messages || (apd.messages = {}));
})(apd || (apd = {}));

/// <reference path="messages.ts" />
var apd;
(function (apd) {
    var dateUtils;
    (function (dateUtils) {
        'use strict';
        var DateModelClass = (function () {
            function DateModelClass(datetime) {
                if (!(this instanceof DateModelClass)) {
                }
                var date = new Date(datetime);
                this.day = date.getDate();
                this.dayOfWeek = date.getDay();
                this.month = date.getMonth();
                this.year = date.getFullYear();
                this.datetime = datetime;
                this.timezone = date.getTimezoneOffset();
                return this;
            }
            return DateModelClass;
        })();
        dateUtils.DateModelClass = DateModelClass;
        var DataClass = (function () {
            function DataClass(selected, startDateTime, endDateTime) {
                this._getSelected = function (selected, startDateTime, endDateTime) {
                    var result;
                    var isBiggerThenStart = (selected.datetime > startDateTime);
                    var isEqualToStart = (selected.datetime === startDateTime);
                    var isLowerThenEnd = (selected.datetime > endDateTime);
                    var isEqualToEnd = (selected.datetime === endDateTime);
                    //start == 1; selected == 1 or 2 or 3; end == 3;
                    if ((isBiggerThenStart || isEqualToStart) && (isLowerThenEnd || isEqualToEnd)) {
                        result = new DateModelClass(selected.datetime);
                    }
                    else 
                    //start == 1; selected == 0
                    if (!isBiggerThenStart) {
                        result = new DateModelClass(startDateTime);
                    }
                    //selected == 4; end == 3;
                    if (!isBiggerThenStart) {
                        result = new DateModelClass(endDateTime);
                    }
                    else {
                        result = new DateModelClass(new Date().getTime());
                    }
                    return result;
                };
                this._getDefaultDaysList = function (month, year) {
                    var daysCount = this.getDaysInMonth(month, year);
                    return this._getIntArr(daysCount);
                };
                this._getDefaultMonthList = function () {
                    return this._getArrayOfNumbers(0, 11);
                };
                this._getDefaultYearsList = function () {
                    var yearsCount = 20;
                    var curYear = new Date().getFullYear();
                    var direction = 'desc';
                    return this._intArraySort(this._getArrayOfNumbers(curYear - (yearsCount - 1), curYear), direction);
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
                this._getFullYear = function (date) {
                    return date.getFullYear();
                };
                this._getMonth = function (date) {
                    return date.getMonth();
                };
                this._getDay = function (date) {
                    return date.getDate();
                };
                //TODO (S.Panfilov) not any, but functions types
                this._getNumList = function (startDateTime, endDateTime, timeFunc, callback) {
                    var result = [];
                    var start;
                    var end;
                    //start = 2011, end = 2014
                    if ((startDateTime && endDateTime) && (startDateTime < endDateTime)) {
                        start = timeFunc(new Date(startDateTime));
                        end = timeFunc(new Date(endDateTime));
                        result = this._getArrayOfNumbers(start, end);
                    }
                    else if ((startDateTime && endDateTime) && (startDateTime > endDateTime)) {
                        start = timeFunc(new Date(endDateTime));
                        end = timeFunc(new Date(startDateTime));
                        //TODO (S.Panfilov) throw warning here, that dates inverted
                        //apd.messages.MessagesFactoryClass.throwMessage('asdsadasd');
                        result = this._getArrayOfNumbers(start, end);
                    }
                    else if ((startDateTime && endDateTime) && (startDateTime === endDateTime)) {
                        start = timeFunc(new Date(startDateTime));
                        result = this._getArrayOfNumbers(start, start);
                    }
                    else if (startDateTime && !endDateTime) {
                        start = timeFunc(new Date(startDateTime));
                        result = this._getArrayOfNumbers(start, start);
                    }
                    else if (!startDateTime && endDateTime) {
                        end = timeFunc(new Date(endDateTime));
                        result = this._getArrayOfNumbers(end, end);
                    }
                    else if (!startDateTime && !endDateTime) {
                        if (callback)
                            return callback(timeFunc);
                    }
                    return result;
                };
                this._getIntArr = function (length) {
                    if (!length && length !== 0) {
                        //apd.messages.MessagesFactoryClass.throwInvalidParamsMessage();
                        return false;
                    }
                    return length ? this._getIntArr(length - 1).concat(length) : [];
                };
                this.getDaysInMonth = function (month, year) {
                    return new Date(year, month + 1, 0).getDate();
                };
                if (!(this instanceof DataClass)) {
                }
                var self = this;
                self.years = self._getNumList(startDateTime, endDateTime, self._getFullYear, self._getDefaultYearsList.bind(self));
                self.month = self._getNumList(startDateTime, endDateTime, self._getMonth, self._getDefaultMonthList.bind(self));
                self.selected = self._getSelected(selected, startDateTime, endDateTime);
                self.days = self._getNumList(startDateTime, endDateTime, self._getDay, function () {
                    return self._getDefaultDaysList.call(self, self.selected.month, self.selected.year);
                });
                return this;
            }
            return DataClass;
        })();
        angular.module('angular-pd.date_utils', []).factory('DateUtilsFactory', function () {
            var exports = {
                getData: function (selected, startDateTime, endDateTime) {
                    return new DataClass(selected, startDateTime, endDateTime);
                },
                validateModel: function (model) {
                    return !!(model && model.datetime);
                }
            };
            return exports;
        });
    })(dateUtils = apd.dateUtils || (apd.dateUtils = {}));
})(apd || (apd = {}));
