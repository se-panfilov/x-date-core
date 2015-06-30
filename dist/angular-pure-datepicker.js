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
        ]).directive('pureDatepicker', ['DateUtilsFactory', 'MessgesFactory', function (DateUtilsFactory, MessgesFactory) {
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
                    var selectedDate = DateUtilsFactory.getDefaultSelectedDate(scope.ngModel);
                    var years = DateUtilsFactory.getDefaultYearsList();
                    var days = DateUtilsFactory.getDaysCount(selectedDate.month, selectedDate.year);
                    scope.data = DateUtilsFactory.createData(selectedDate, days, years);
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
                    function reloadDaysCount(month, year) {
                        if ((!month && month !== 0) || !year) {
                            MessgesFactory.throwInvalidParamsMessage();
                            return false;
                        }
                        scope.data.days = DateUtilsFactory.getDaysCount(month, year);
                    }
                    function reloadSelectedDay(year, month, day) {
                        if (!year || (!month && month !== 0) || !day) {
                            MessgesFactory.throwInvalidParamsMessage();
                            return false;
                        }
                        var date = new Date(year, month, day);
                        var daysInSelectedMonth = DateUtilsFactory.getDaysInMonth(month, year);
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
    var dateUtils;
    (function (dateUtils) {
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
        var DateModelValidatorClass = (function () {
            function DateModelValidatorClass(config) {
                var _this = this;
                this.isFieldExist = function (model, fieldName) {
                    var validator = _this;
                    var isZero = (model[fieldName] === 0);
                    var isZeroAllowed = validator[fieldName].isZeroAllowed;
                    if (isZero && !isZeroAllowed) {
                        return false;
                    }
                    if (!model[fieldName]) {
                        return false;
                    }
                    return true;
                };
                this.validate = function (model) {
                    var validator = _this;
                    for (var fieldName in validator) {
                        if (validator.hasOwnProperty(fieldName)) {
                            if (validator[fieldName].isRequired) {
                                var isFieldValid = validator.isFieldExist(model, fieldName);
                                if (!isFieldValid) {
                                    return false;
                                }
                            }
                        }
                    }
                };
                this.day = new DateModelFieldClass(config.day.name, config.day.isZeroAllowed, config.day.isRequired);
                this.dayOfWeek = new DateModelFieldClass(config.dayOfWeek.name, config.dayOfWeek.isZeroAllowed, config.dayOfWeek.isRequired);
                this.month = new DateModelFieldClass(config.month.name, config.month.isZeroAllowed, config.month.isRequired);
                this.year = new DateModelFieldClass(config.year.name, config.year.isZeroAllowed, config.year.isRequired);
                this.datetime = new DateModelFieldClass(config.datetime.name, config.datetime.isZeroAllowed, config.datetime.isRequired);
                this.timezone = new DateModelFieldClass(config.timezone.name, config.timezone.isZeroAllowed, config.timezone.isRequired);
            }
            return DateModelValidatorClass;
        })();
        var DateModelValidatorConfigClass = (function () {
            //TODO (S.Panfilov) any?
            function DateModelValidatorConfigClass(object) {
                this.day = object.day;
                this.dayOfWeek = object.dayOfWeek;
                this.month = object.month;
                this.year = object.year;
                this.datetime = object.datetime;
                this.timezone = object.timezone;
            }
            return DateModelValidatorConfigClass;
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
        var DateModelFieldClass = (function () {
            function DateModelFieldClass(name, allowZero, isRequired) {
                this.name = name;
                this.isZeroAllowed = allowZero;
                this.isRequired = isRequired;
            }
            return DateModelFieldClass;
        })();
        angular.module('angular-pd.date_utils', []).factory('DateUtilsFactory', ['MessgesFactory', function (MessgesFactory) {
            var dateModelValidatorConfig = new DateModelValidatorConfigClass({
                day: { name: 'day', isZeroAllowed: false, isRequired: false },
                dayOfWeek: { name: 'day', isZeroAllowed: false, isRequired: false },
                month: { name: 'day', isZeroAllowed: true, isRequired: false },
                year: { name: 'day', isZeroAllowed: false, isRequired: false },
                datetime: { name: 'day', isZeroAllowed: true, isRequired: true },
                timezone: { name: 'day', isZeroAllowed: true, isRequired: false }
            });
            var dateModelValidator = new DateModelValidatorClass(dateModelValidatorConfig);
            function preserveModelValues(model) {
                for (var value in model) {
                    if (model.hasOwnProperty(value)) {
                        model[value] = +model[value];
                    }
                }
                return model;
            }
            function _getIntArr(length) {
                if (!length && length !== 0) {
                    MessgesFactory.throwInvalidParamsMessage();
                    return false;
                }
                return length ? _getIntArr(length - 1).concat(length) : [];
            }
            var exports = {
                createData: function (selected, days, years) {
                    return new DataClass(selected, days, years);
                },
                validateModel: function (model) {
                    //TODO (S.Panfilov)  may be we should extract this logic to the classes
                    var groupResults = getMandatoryGroupsResilts(modelFields, model);
                    return checkMandatoryValidsInGroups(groupResults);
                },
                getDaysCount: function (month, year) {
                    if ((!month && month !== 0) || !year) {
                        MessgesFactory.throwInvalidParamsMessage();
                        return false;
                    }
                    return _getIntArr(exports.getDaysInMonth(month, year));
                },
                getDaysInMonth: function (month, year) {
                    return new Date(year, month + 1, 0).getDate();
                },
                getDefaultSelectedDate: function (model) {
                    var isValidModel = exports.validateModel(model);
                    if (isValidModel) {
                        return preserveModelValues(model);
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
                },
                getDefaultYearsList: function () {
                    //TODO (S.Panfilov) fix for case with date limits
                    return [
                        (new Date()).getFullYear() - 3,
                        (new Date()).getFullYear() - 2,
                        (new Date()).getFullYear() - 1,
                        (new Date()).getFullYear()
                    ];
                }
            };
            return exports;
        }]);
    })(dateUtils = apd.dateUtils || (apd.dateUtils = {}));
})(apd || (apd = {}));

var apd;
(function (apd) {
    var messages;
    (function (messages) {
        'use strict';
        angular.module('angular-pd.messages', []).factory('MessgesFactory', function () {
            var _messages = {
                invalidParams: 'Invalid params',
                invalidDateModel: 'Invalid date model'
            };
            var exports = {
                throwDeveloperError: function (message) {
                    console.error(message);
                },
                throwModelValidationMessage: function (field) {
                    exports.throwDeveloperError(_messages.invalidDateModel + ': error on field \"' + field + "+\"");
                },
                throwInvalidParamsMessage: function () {
                    exports.throwDeveloperError(_messages.invalidParams);
                }
            };
            return exports;
        });
    })(messages = apd.messages || (apd.messages = {}));
})(apd || (apd = {}));
