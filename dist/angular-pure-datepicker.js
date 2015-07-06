angular.module("angular-pd.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("apd.html","<div class=apd_root><select ng-model=data.selected.day ng-options=\"day for day in data.days\" ng-init=\"data.selected.day = data.days[0]\" id={{::apdDayId}} class=\"apd_elem apd_select_day apd_select {{::apdDayClasses}}\"></select><span title={{getDayOfWeekName(data.selected.dayOfWeek)}} ng-bind=getDayOfWeekShortName(data.selected.dayOfWeek) class=\"apd_elem apd_day_of_week\"></span><select ng-model=data.selected.month ng-options=\"(month + 1) for month in data.month\" ng-init=\"data.selected.month = data.month[0]\" id={{::apdMonthId}} class=\"apd_elem apd_select_month apd_select {{::apdMonthClasses}}\"></select><select ng-model=data.selected.year ng-options=\"year for year in data.years\" ng-init=\"data.selected.year = data.years[0]\" id={{::apdYearId}} class=\"apd_elem apd_select_year apd_select {{::apdYearClasses}}\"></select></div>");}]);
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
                this.name = name;
                this.short = short;
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
                this.list = days;
                this.shorts = this.getListOfShorts();
                this.names = this.getListOfNames();
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
                    var isInitialized = false;
                    var isReInitializing = false;
                    function init() {
                        var initDateModel = DateUtilsFactory.getDateModel(scope.ngModel);
                        var startDateTime = (scope.apdStart) ? +scope.apdStart : null;
                        var endDateTime = (scope.apdEnd) ? +scope.apdEnd : null;
                        scope.data = DateUtilsFactory.getData(initDateModel, startDateTime, endDateTime);
                        scope.ngModel = scope.data.selected;
                        isInitialized = true;
                    }
                    scope.$watch('ngModel.datetime', function (value, oldValue) {
                        if (isInitialized && (value === oldValue)) {
                            return;
                        }
                        init();
                    }, true);
                    //
                    //scope.$watch('data.selected.day', function (day) {
                    //    if (!day && !isReInitializing) return;
                    //    reloadSelectedDay(scope.data.selected.datetime);
                    //});
                    //
                    //scope.$watch('data.selected.month', function (month) {
                    //    if (!month && month !== 0 && !isReInitializing) return;
                    //    reloadDaysCount(scope.data.selected.datetime);
                    //    reloadSelectedDay(scope.data.selected.datetime);
                    //});
                    //
                    //scope.$watch('data.selected.year', function (year) {
                    //    if (!year && !isReInitializing) return;
                    //    reloadDaysCount(scope.data.selected.datetime);
                    //    reloadSelectedDay(scope.data.selected.datetime);
                    //});
                    function reloadDaysCount(datetime) {
                        if (!datetime && datetime !== 0) {
                            MessagesFactory.throwInvalidParamsMessage();
                            return false;
                        }
                        var date = new Date(datetime);
                        scope.data.days = scope.data.getDaysNumberArr(date.getMonth(), date.getFullYear());
                    }
                    function reloadSelectedDay(datetime) {
                        if (!datetime && datetime !== 0) {
                            MessagesFactory.throwInvalidParamsMessage();
                            return false;
                        }
                        var date = new Date(datetime);
                        var daysInSelectedMonth = scope.data.getDaysInMonth(date.getMonth(), date.getFullYear());
                        if (scope.data.selected.day > daysInSelectedMonth) {
                            scope.data.selected.day = daysInSelectedMonth;
                        }
                        scope.data.selected.dayOfWeek = date.getDay();
                        scope.data.selected.datetime = date.getTime() * 1000;
                    }
                    scope.getDayOfWeekShortName = daysOfWeek.getDayOfWeekShortName;
                    scope.getDayOfWeekName = daysOfWeek.getDayOfWeekName;
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
            }
            MessagesFactoryClass.throwModelValidationMessage = function (field) {
                //TODO (S.Panfilov) possibly problems with this
                this.throwDeveloperError(this.messages.invalidDateModel + ': error on field \"' + field + '+\"');
            };
            MessagesFactoryClass.throwInvalidParamsMessage = function () {
                //TODO (S.Panfilov) possibly problems with this
                this.throwDeveloperError(this.messages.invalidParams);
            };
            MessagesFactoryClass.messages = {
                invalidParams: 'Invalid params',
                invalidDateModel: 'Invalid date model'
            };
            MessagesFactoryClass.throwDeveloperError = function (message) {
                console.error(message);
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
                var date = new Date();
                this.day = date.getDate();
                this.dayOfWeek = date.getDay();
                this.month = date.getMonth();
                this.year = date.getFullYear();
                this.datetime = datetime;
                this.timezone = date.getTimezoneOffset();
            }
            return DateModelClass;
        })();
        var DataClass = (function () {
            function DataClass(selected, startDateTime, endDateTime) {
                var _this = this;
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
                    return this._intArraySort(this._getArrayOfNumbers(curYear - yearsCount, curYear), direction);
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
                this.getDaysNumberArr = function (month, year) {
                    if ((!month && month !== 0) || !year) {
                        //apd.messages.MessagesFactoryClass.throwInvalidParamsMessage();
                        return false;
                    }
                    return _this._getIntArr(_this.getDaysInMonth(month, year));
                };
                this.getDaysInMonth = function (month, year) {
                    return new Date(year, month + 1, 0).getDate();
                };
                var self = this;
                self.years = self._getNumList(startDateTime, endDateTime, self._getFullYear, self._getDefaultYearsList.bind(self));
                self.month = self._getNumList(startDateTime, endDateTime, self._getMonth, self._getDefaultMonthList.bind(self));
                self.selected = self._getSelected(selected, startDateTime, endDateTime);
                self.days = self._getNumList(startDateTime, endDateTime, self._getDay, function () {
                    self._getDefaultDaysList.call(self, self.selected.month, self.selected.year);
                });
            }
            return DataClass;
        })();
        angular.module('angular-pd.date_utils', []).factory('DateUtilsFactory', function () {
            function preserveModelValues(model) {
                for (var value in model) {
                    if (model.hasOwnProperty(value)) {
                        model[value] = +model[value];
                    }
                }
                return model;
            }
            var exports = {
                getData: function (selected, startDateTime, endDateTime) {
                    return new DataClass(selected, startDateTime, endDateTime);
                },
                validateModel: function (model) {
                    return (model && model.datetime);
                },
                getDateModel: function (model) {
                    var isValidModel = exports.validateModel(model);
                    if (isValidModel) {
                        return new DateModelClass(model.datetime);
                    }
                    else {
                        return new DateModelClass(new Date().getTime());
                    }
                }
            };
            return exports;
        });
    })(dateUtils = apd.dateUtils || (apd.dateUtils = {}));
})(apd || (apd = {}));
