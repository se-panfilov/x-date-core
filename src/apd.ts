/// <reference path="main.ts" />

//TODO (S.Panfilov)  is this references necessary?

module apd.directive {
    'use strict';

    class DateModelClass {
        day:number;
        dayOfWeek:number;
        month:number;
        year:number;
        datetime:number;
        timezone:number;

        constructor(day:number, dayOfWeek:number, month:number, year:number, datetime:number, timezone:number) {
            this.day = day;
            this.dayOfWeek = dayOfWeek;
            this.month = month;
            this.year = year;
            this.datetime = datetime;
            this.timezone = timezone;
        }
    }

    class DataClass {
        selected:DateModelClass;
        days:Array<number>;
        month:Array<number>;
        years:Array<number>;

        constructor(selected:DateModelClass, days:Array<number>, years:Array<number>) {
            this.selected = selected;
            this.days = days;
            this.month = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
            this.years = years;
        }
    }

    class DayOfWeek {
        name:string;
        short:string;

        constructor(name:string, short:string) {
            this.name = name;
            this.short = short;
        }
    }

    class DaysOfWeek {
        list:Array<DayOfWeek>;
        names:Array<string>;
        shorts:Array<string>;

        constructor(days:Array<DayOfWeek>) {
            this.list = days;
            this.shorts = this.getListOfShorts();
            this.names = this.getListOfNames();
        }

        private getListOfShorts = () => {
            var result = [];

            for (var i = 0; i < this.list.length; i++) {
                var dayOfWeek = this.list[i];
                result.push(dayOfWeek.short);
            }

            return result;
        };

        private getListOfNames = () => {
            var result = [];

            for (var i = 0; i < this.list.length; i++) {
                var dayOfWeek = this.list[i];
                result.push(dayOfWeek.name);
            }

            return result;
        };

        getDayOfWeekShortName = (dayNum:number) => {
            return this.shorts[dayNum];
        };

        getDayOfWeekName = (dayNum:number) => {
            return this.names[dayNum];
        };
    }

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
        //'angular-pd.data',
        'angular-pd.templates'
    ])

        .directive('pureDatepicker', function (MESSAGES) {
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

                    function throwDeveloperError(message:string) {
                        console.error(message);
                    }

                    function throwModelValidationMessage(field:string) {
                        throwDeveloperError(_messages.invalidDateModel + ': error on field \"' + field + "+\"");
                    }

                    function validateModel(model:DateModelClass) {

                        //TODO (S.Panfilov) not all fields should be mandatory.
                        //TODO (S.Panfilov) we may need only day month and year
                        //TODO (S.Panfilov) or a dateTime
                        var modelMandatoryFields = {
                            day: 'day',
                            dayOfWeek: 'dayOfWeek',
                            month: 'month',
                            year: 'year',
                            datetime: 'datetime',
                            timezone: 'timezone'
                        };

                        if (!model[modelMandatoryFields.day]) {
                            throwModelValidationMessage(modelMandatoryFields.day);
                            return false;
                        }
                        if (!model[modelMandatoryFields.dayOfWeek] && model[modelMandatoryFields.dayOfWeek] !== 0) {
                            throwModelValidationMessage(modelMandatoryFields.dayOfWeek);
                            return false;
                        }
                        if (!model[modelMandatoryFields.month] && model[modelMandatoryFields.month] !== 0) {
                            throwModelValidationMessage(modelMandatoryFields.month);
                            return false;
                        }
                        if (!model[modelMandatoryFields.year]) {
                            throwModelValidationMessage(modelMandatoryFields.year);
                            return false;
                        }
                        if (!model[modelMandatoryFields.datetime]) {
                            throwModelValidationMessage(modelMandatoryFields.datetime);
                            return false;
                        }
                        if (!model[modelMandatoryFields.timezone] && model[modelMandatoryFields.timezone] !== 0) {
                            throwModelValidationMessage(modelMandatoryFields.timezone);
                            return false;
                        }

                        return true;
                    }

                    function preserveModelValues(model:Object) {
                        //TODO (S.Panfilov)
                        for (var value in model) {
                            if (model.hasOwnProperty(value)) {
                                model[value] = +model[value]
                            }
                        }

                        return <DateModelClass>model;
                    }

                    function getDefaultSelectedDate() {
                        //TODO (S.Panfilov) work point
                        var isValidModel = validateModel(scope.ngModel);
                        var model = preserveModelValues(scope.ngModel);

                        if (isValidModel) {
                            var day = model.day;
                            var month = model.month;
                            var year = model.year;
                            var dateTime = model.datetime;
                            var dayOfWeek =model.dayOfWeek;
                            var timezone = model.timezone;
                        }

                        //TODO (S.Panfilov) now set current date, but should resolve in case of preset model and limited date ranges
                        var date = new Date();
                        var day = date.getDate();
                        var month = date.getMonth();
                        var year = date.getFullYear();
                        var dateTime = date.getTime();
                        var dayOfWeek = date.getDay();
                        var timezone = date.getTimezoneOffset();

                        return new DateModelClass(day, dayOfWeek, month, year, dateTime, timezone);
                    }


                    function getDefaultYearsList() {
                        //TODO (S.Panfilov) fix for case with date limits
                        return [
                            (new Date()).getFullYear() - 3,
                            (new Date()).getFullYear() - 2,
                            (new Date()).getFullYear() - 1,
                            (new Date()).getFullYear() //2015
                        ];
                    }

                    function getDaysInMonth(month:number, year:number) {
                        return new Date(year, month + 1, 0).getDate();
                    }

                    function getDaysCount(month:number, year:number) {
                        if ((!month && month !== 0) || !year) return console.error(MESSAGES.invalidParams);
                        return getIntArr(getDaysInMonth(month, year));
                    }

                    scope.$watch('data.selected.day', function (day) {
                        if (!day) return;
                        reloadSelectedDay(scope.data.selected.year, scope.data.selected.month, scope.data.selected.day);
                    });

                    scope.$watch('data.selected.month', function (month) {
                        if (!month && month !== 0) return;
                        reloadDaysCount(scope.data.selected.month, scope.data.selected.year);
                        reloadSelectedDay(scope.data.selected.year, scope.data.selected.month, scope.data.selected.day);
                    });

                    scope.$watch('data.selected.year', function (year) {
                        if (!year) return;
                        reloadDaysCount(scope.data.selected.month, scope.data.selected.year);
                        reloadSelectedDay(scope.data.selected.year, scope.data.selected.month, scope.data.selected.day);
                    });

                    function getIntArr(length:number) {
                        if (!length && length !== 0) return console.error(MESSAGES.invalidParams);

                        return length ? getIntArr(length - 1).concat(length) : [];
                    }

                    function reloadDaysCount(month:number, year:number) {
                        if ((!month && month !== 0) || !year) return console.error(MESSAGES.invalidParams);

                        scope.data.days = getDaysCount(month, year);
                    }

                    function reloadSelectedDay(year, month, day) {
                        if (!year || (!month && month !== 0) || !day) return console.error(MESSAGES.invalidParams);
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
            }
        });
}