/// <reference path="main.ts" />

//TODO (S.Panfilov)  is this references necessary?

module apd.directive {
    'use strict';

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

        .directive('pureDatepicker', function (DateUtilsFactory, MessagesFactory) {
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
                    scope.data = DateUtilsFactory.createData(selectedDate, years);


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
                        //TODO (S.Panfilov) may be we should watch also timezone and datetime - those fields may be changed externally
                        if (!year) return;
                        reloadDaysCount(scope.data.selected.month, scope.data.selected.year);
                        reloadSelectedDay(scope.data.selected.year, scope.data.selected.month, scope.data.selected.day);
                    });

                    function reloadDaysCount(month:number, year:number) {
                        if ((!month && month !== 0) || !year) {
                            MessagesFactory.throwInvalidParamsMessage();
                            return false;
                        }

                        scope.data.days = scope.data.getDaysNumberArr(month, year);
                    }

                    function reloadSelectedDay(year, month, day) {
                        if (!year || (!month && month !== 0) || !day) {
                            MessagesFactory.throwInvalidParamsMessage();
                            return false;
                        }
                        var date = new Date(year, month, day);


                        var daysInSelectedMonth = scope.data.getDaysInMonth(month, year);
                        if (scope.data.selected.day > daysInSelectedMonth) {
                            scope.data.selected.day = daysInSelectedMonth;
                        }

                        scope.data.selected.dayOfWeek = date.getDay();
                        scope.data.selected.datetime = date.getTime() * 1000;
                    }

                    scope.getDayOfWeekShortName = daysOfWeek.getDayOfWeekShortName;
                    scope.getDayOfWeekName = daysOfWeek.getDayOfWeekName;
                }
            }
        });
}