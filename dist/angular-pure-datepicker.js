angular.module("angular-pd.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("apd.html","<div class=apd_root><select ng-model=data.selected.day ng-options=\"day for day in data.days\" ng-init=\"data.selected.day = data.days[0]\" id={{::apdDayId}} class=\"apd_elem apd_select_day apd_select {{::apdDayClasses}}\"></select><span title={{getDayOfWeekName(data.selected.dayOfWeek)}} ng-bind=getDayOfWeekShortName(data.selected.dayOfWeek) class=\"apd_elem apd_day_of_week\"></span><select ng-model=data.selected.month ng-options=\"(month + 1) for month in data.month\" ng-init=\"data.selected.month = data.month[0]\" id={{::apdMonthId}} class=\"apd_elem apd_select_month apd_select {{::apdMonthClasses}}\"></select><select ng-model=data.selected.year ng-options=\"year for year in data.years\" ng-init=\"data.selected.year = data.years[0]\" id={{::apdYearId}} class=\"apd_elem apd_select_year apd_select {{::apdYearClasses}}\"></select></div>");}]);
//module apd.main {
//    'use strict';
angular.module('angular-pd', [
    'angular-pd.datepicker',
    'angular-pd.date_utils'
]).constant('MESSAGES', {
    invalidParams: 'Invalid params'
});
//} 

/// <reference path="main.ts" />
//TODO (S.Panfilov)  is this references necessary?
var apd;
(function (apd) {
    var directive;
    (function (directive) {
        'use strict';
        var DateModelClass = (function () {
            function DateModelClass(day, dayOfWeek, month, year, datetime, timezone) {
                this.day = day;
                this.dayOfWeek = dayOfWeek;
                this.month = month;
                this.year = year;
                this.datetime = datetime;
                this.timezone = timezone;
            }
            return DateModelClass;
        })();
        var DataClass = (function () {
            function DataClass(selected, days, years) {
                this.selected = selected;
                this.days = days;
                this.month = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
                this.years = years;
            }
            return DataClass;
        })();
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
        ]).directive('pureDatepicker', ['MESSAGES', function (MESSAGES) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'apd.html',
                scope: {
                    ngModel: '=',
                    apdDayId: '@?',
                    apdMonthId: '@?',
                    apdYearId: '@?',
                    apdDayClasses: '@?',
                    apdMonthClasses: '@?',
                    apdYearClasses: '@?'
                },
                link: function (scope) {
                    console.log(scope.ngModel);
                    var selectedDate = getDefaultSelectedDate();
                    var years = getDefaultYearsList();
                    var days = getDaysCount(selectedDate.month, selectedDate.year);
                    scope.data = new DataClass(selectedDate, days, years);
                    var _messages = {
                        invalidParams: 'Invalid params',
                        invalidDateModel: 'Invalid date model'
                    };
                    function throwDeveloperError(message) {
                        console.error(message);
                    }
                    function throwModelValidationMessage(field) {
                        throwDeveloperError(_messages.invalidDateModel + ': error on field \"' + field + "+\"");
                    }
                    function preserveModelValues(model) {
                        for (var value in model) {
                            if (model.hasOwnProperty(value)) {
                                model[value] = +model[value];
                            }
                        }
                        return model;
                    }
                    function getDefaultSelectedDate() {
                        var isValidModel = validateModel(scope.ngModel);
                        if (isValidModel) {
                            return preserveModelValues(scope.ngModel);
                        }
                        else {
                            var date = new Date();
                            var day = date.getDate();
                            var month = date.getMonth();
                            var year = date.getFullYear();
                            var dateTime = date.getTime();
                            var dayOfWeek = date.getDay();
                            var timezone = date.getTimezoneOffset();
                            return new DateModelClass(day, dayOfWeek, month, year, dateTime, timezone);
                        }
                    }
                    function getDefaultYearsList() {
                        //TODO (S.Panfilov) fix for case with date limits
                        return [
                            (new Date()).getFullYear() - 3,
                            (new Date()).getFullYear() - 2,
                            (new Date()).getFullYear() - 1,
                            (new Date()).getFullYear()
                        ];
                    }
                    function getDaysInMonth(month, year) {
                        return new Date(year, month + 1, 0).getDate();
                    }
                    function getDaysCount(month, year) {
                        if ((!month && month !== 0) || !year)
                            return console.error(MESSAGES.invalidParams);
                        return getIntArr(getDaysInMonth(month, year));
                    }
                    scope.$watch('data.selected.day', function (day) {
                        if (!day)
                            return;
                        reloadSelectedDay(scope.data.selected.year, scope.data.selected.month, scope.data.selected.day);
                    });
                    scope.$watch('data.selected.month', function (month) {
                        if (!month && month !== 0)
                            return;
                        reloadDaysCount(scope.data.selected.month, scope.data.selected.year);
                        reloadSelectedDay(scope.data.selected.year, scope.data.selected.month, scope.data.selected.day);
                    });
                    scope.$watch('data.selected.year', function (year) {
                        //TODO (S.Panfilov) may be we should watch also timezone and datetime - those fields may be changed externally
                        if (!year)
                            return;
                        reloadDaysCount(scope.data.selected.month, scope.data.selected.year);
                        reloadSelectedDay(scope.data.selected.year, scope.data.selected.month, scope.data.selected.day);
                    });
                    function getIntArr(length) {
                        if (!length && length !== 0)
                            return console.error(MESSAGES.invalidParams);
                        return length ? getIntArr(length - 1).concat(length) : [];
                    }
                    function reloadDaysCount(month, year) {
                        if ((!month && month !== 0) || !year)
                            return console.error(MESSAGES.invalidParams);
                        scope.data.days = getDaysCount(month, year);
                    }
                    function reloadSelectedDay(year, month, day) {
                        if (!year || (!month && month !== 0) || !day)
                            return console.error(MESSAGES.invalidParams);
                        var date = new Date(year, month, day);
                        var daysInSelectedMonth = getDaysInMonth(month, year);
                        if (scope.data.selected.day > daysInSelectedMonth) {
                            scope.data.selected.day = daysInSelectedMonth;
                        }
                        scope.data.selected.dayOfWeek = date.getDay();
                        scope.data.selected.datetime = date.getTime() * 1000;
                    }
                    scope.getDayOfWeekShortName = daysOfWeek.getDayOfWeekShortName;
                    scope.getDayOfWeekName = daysOfWeek.getDayOfWeekName;
                    (function init() {
                    })();
                }
            };
        }]);
    })(directive = apd.directive || (apd.directive = {}));
})(apd || (apd = {}));

var apd;
(function (apd) {
    var dateUtils;
    (function (dateUtils) {
        'use strict';
        var DateModelFieldClass = (function () {
            function DateModelFieldClass(name, allowZero) {
                this.name = name;
                this.isZeroAllowed = allowZero;
            }
            return DateModelFieldClass;
        })();
        var modelFieldsClass = (function () {
            function modelFieldsClass() {
            }
            return modelFieldsClass;
        })();
        angular.module('angular-pd.date_utils', []).factory('DateUtils', function () {
            var modelFields = {
                mandatory: [
                    {
                        day: new DateModelFieldClass('day', false),
                        month: new DateModelFieldClass('month', true),
                        year: new DateModelFieldClass('year', false)
                    },
                    {
                        timezone: new DateModelFieldClass('timezone', true)
                    }
                ],
                common: {
                    dayOfWeek: new DateModelFieldClass('dayOfWeek', true),
                    datetime: new DateModelFieldClass('datetime', true)
                }
            };
            function _validateField(model, fieldName, isZeroAllowed) {
                var isZero = (model[fieldName] === 0);
                if (isZero && !isZeroAllowed) {
                    return false;
                }
                if (!model[fieldName]) {
                    return false;
                }
                return true;
            }
            var exports = {
                validateModel: function (model) {
                    //TODO (S.Panfilov) not all fields should be mandatory.
                    //TODO (S.Panfilov) we may need only day month and year
                    //TODO (S.Panfilov) or a dateTime
                    for (var i = 0; i < modelFields.mandatory.length; i++) {
                        var field = modelFields.mandatory[i];
                        var isVald = _validateField(model, field.name, field.isZeroAllowed);
                        if (!isVald) {
                            throwModelValidationMessage(field.name);
                            return false;
                        }
                    }
                    return true;
                }
            };
            return exports;
        });
    })(dateUtils = apd.dateUtils || (apd.dateUtils = {}));
})(apd || (apd = {}));
