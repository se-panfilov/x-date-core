/// <reference path="main.ts" />

//TODO (S.Panfilov)  is this references necessary?

module apd.directive {
    'use strict';

    class DateModelClass {
        day = null;
        dayOfWeek = null;
        month = null;
        year = null;
        datetime = null;
        timezone = null;

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
        shorts:Array<string>;

        constructor(days:Array<DayOfWeek>) {
            this.list = days;
            this.shorts = this.getListOfShorts();
        }

        private getListOfShorts = () => {
            var result = [];

            for (var i = 0; i < this.list.length; i++) {
                var dayOfWeek = this.list[i];
                result.push(dayOfWeek.short);
            }

            return result;
        };

        getDayOfWeekName = (dayNum:number) => {
            return this.shorts[dayNum];
        }
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
        //'angular-pd.popup',
        //'angular-pd.data',
        'angular-pd.templates'
    ])

        .directive('pureDatepicker', function (MESSAGES) {
            return {
                restrict: 'E',
                replace: true,
                templateUrl: 'apd.html',
                scope: {
                    apdDayId: '@?',
                    apdMonthId: '@?',
                    apdYearId: '@?',
                    apdDayClasses: '@?',
                    apdMonthClasses: '@?',
                    apdYearClasses: '@?'
                },
                controller: function ($scope) {
                    var selectedDate = getDefaultSelectedDate();
                    var years = getDefaultYearsList();
                    var days = getDaysCount(selectedDate.month, selectedDate.year);
                    $scope.data = new DataClass(selectedDate, days, years);

                    function getDefaultSelectedDate() {
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
                            (new Date()).getFullYear() - 1,
                            (new Date()).getFullYear()
                        ];
                    }

                    function getDaysCount(month:number, year:number) {
                        if (!month || !year) return console.error(MESSAGES.invalidParams);
                        return getIntArr(new Date(year, month, 0).getDate());
                    }

                    //$scope.$watch('data.selected.day', function (day) {
                    //    if (!day) return;
                    //    reloadSelectedDay($scope.data.selected.year, $scope.data.selected.month, $scope.data.selected.day);
                    //});
                    //
                    //$scope.$watch('data.selected.month', function (month) {
                    //    if (!month) return;
                    //    reloadDaysCount($scope.data.selected.month, $scope.data.selected.year);
                    //    reloadSelectedDay($scope.data.selected.year, $scope.data.selected.month, $scope.data.selected.day);
                    //});
                    //
                    //$scope.$watch('data.selected.year', function (year) {
                    //    if (!year) return;
                    //    reloadDaysCount($scope.data.selected.month, $scope.data.selected.year);
                    //    reloadSelectedDay($scope.data.selected.year, $scope.data.selected.month, $scope.data.selected.day);
                    //});

                    function getIntArr(length:number) {
                        if (!length && length !== 0) return console.error(MESSAGES.invalidParams);

                        return length ? getIntArr(length - 1).concat(length) : [];
                    }

                    function reloadDaysCount(month:number, year:number) {
                        if (!month || !year) return console.error(MESSAGES.invalidParams);

                        $scope.data.days = getDaysCount(month, year);
                    }

                    function reloadSelectedDay(year, month, day) {
                        if (!year || !month || day) return console.error(MESSAGES.invalidParams);
                        var date = new Date(year, month, day);

                        $scope.data.selected.dayOfWeek = date.getDay();
                        $scope.data.selected.datetime = date.getTime() * 1000;
                    }

                    $scope.getDayOfWeekName = daysOfWeek.getDayOfWeekName;

                    (function init() {

                    })();


                },
                link: function (scope, elem) {

                }
            }
        });
}