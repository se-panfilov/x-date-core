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
        'angular-pd.templates'
    ])

        .directive('pureDatepicker', function (DateUtilsFactory, MessagesFactory) {
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

                        startWatchDay();
                    }

                    init();

                    //scope.$watch('ngModel.datetime', function (value, oldValue) {
                    //    if (isInitialized && (value === oldValue)) {
                    //        return;
                    //    }
                    //    init();
                    //}, true);
                    //
                    function startWatchDay() {
                        scope.$watch('data.selected.day', function (day:number, oldValue:number) {
                            if (!day) return;
                            if (day === oldValue) return;

                            var datetime = getDateTime(scope.data.selected.day, scope.data.selected.month, scope.data.selected.year);
                            reloadSelectedDay(datetime);
                        });
                    }

                    function startWatchMonth() {
                        scope.$watch('data.selected.month', function (month:number, oldValue:number) {
                            if (!month && month !== 0) return;
                            if (month === oldValue) return;

                            var datetime = getDateTime(scope.data.selected.day, scope.data.selected.month, scope.data.selected.year);

                            reloadDaysCount(scope.data.selected.datetime);
                            reloadSelectedDay(scope.data.selected.datetime);
                        });
                    }

                    function getDateTime(day:number, month:number, year:number) {
                        if (!day || (!month && month !== 0) || !year) {
                            MessagesFactory.throwInvalidParamsMessage();
                        }

                        return new Date(year, month, day).getTime();
                    }


                    //

                    //
                    //scope.$watch('data.selected.year', function (year) {
                    //    if (!year && !isReInitializing) return;
                    //    reloadDaysCount(scope.data.selected.datetime);
                    //    reloadSelectedDay(scope.data.selected.datetime);
                    //});

                    function reloadDaysCount(datetime:number) {
                        if (!datetime && datetime !== 0) {
                            MessagesFactory.throwInvalidParamsMessage();
                            return false;
                        }

                        var date = new Date(datetime);
                        scope.data.days = scope.data.getDaysNumberArr(date.getMonth(), date.getFullYear());
                    }

                    function reloadSelectedDay(datetime:number) {
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
                        scope.data.selected.datetime = date.getTime();
                    }

                    scope.getDayOfWeekShortName = daysOfWeek.getDayOfWeekShortName;
                    scope.getDayOfWeekName = daysOfWeek.getDayOfWeekName;
                }
            }
        });
}