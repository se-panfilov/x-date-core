/// <reference path="main.ts" />

//TODO (S.Panfilov)  is this references necessary?

module apd.directive {
    'use strict';

    class DayOfWeek {
        name:string;
        short:string;

        constructor(name:string, short:string) {
            if (!(this instanceof DayOfWeek)) {
                //return MessagesFactoryClass.throwWrongInstanceMessage();
            }

            this.name = name;
            this.short = short;

            return this;
        }
    }

    class DaysOfWeek {
        list:Array<DayOfWeek>;
        names:Array<string>;
        shorts:Array<string>;

        constructor(days:Array<DayOfWeek>) {
            if (!(this instanceof DaysOfWeek)) {
                //return MessagesFactoryClass.throwWrongInstanceMessage();
            }

            this.list = days;
            this.shorts = this.getListOfShorts();
            this.names = this.getListOfNames();
            return this;
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

                    var settings = {
                        initDateModel: null,
                        startDateTime: null,
                        endDateTime: null
                    };

                    function init() {
                        settings.initDateModel = DateUtilsFactory.getDateModel(scope.ngModel);
                        settings.startDateTime = (scope.apdStart) ? +scope.apdStart : null;
                        settings.endDateTime = (scope.apdEnd) ? +scope.apdEnd : null;
                        _initData(settings.initDateModel, settings.startDateTime, settings.endDateTime);

                        scope.getDayOfWeekShortName = daysOfWeek.getDayOfWeekShortName;
                        scope.getDayOfWeekName = daysOfWeek.getDayOfWeekName;

                        startWatchDay();
                        //startWatchMonth();
                        //startWatchYear();
                    }

                    init();

                    //TODO (S.Panfilov) missed type checking for a apd.dateUtils.DateModel
                    function _initData (initDateModel, startDateTime:number, endDateTime:number) {
                        scope.data = DateUtilsFactory.getData(initDateModel, startDateTime, endDateTime);
                        scope.ngModel = scope.data.selected;
                    }

                    function updateModel(datetime:number) {
                        var dateModel = {datetime: datetime};
                        scope.data.selected =  DateUtilsFactory.getDateModel(dateModel);
                        scope.ngModel = scope.data.selected;
                    }

                    //scope.$watch('ngModel.datetime', function (value, oldValue) {
                    //    if (value === oldValue) {
                    //        return;
                    //    }
                    //
                    //    _initData(settings.initDateModel, settings.startDateTime, settings.endDateTime);
                    //}, true);

                    function startWatchDay() {
                        scope.$watch('data.selected.day', function (day:number, oldValue:number) {
                            if (!day) return;
                            if (day === oldValue) return;

                            var datetime = getDateTime(scope.data.selected.day, scope.data.selected.month, scope.data.selected.year);
                            updateModel(datetime);
                        });
                    }

                    function startWatchMonth() {
                        scope.$watch('data.selected.month', function (month:number, oldValue:number) {
                            if (!month && month !== 0) return;
                            if (month === oldValue) return;

                            var datetime;
                            var year = scope.data.selected.year;
                            var day = scope.data.selected.day;

                            if (!isCorrectDay(day, month, year)){
                                day = scope.data.getDaysInMonth(month, year);
                            }

                            datetime = getDateTime(day, month, year);
                            updateModel(datetime);
                        });
                    }

                    function startWatchYear() {
                        scope.$watch('data.selected.year', function (year:number, oldValue:number) {
                            if (!year && year !== 0) return;
                            if (year === oldValue) return;

                            var datetime;
                            var month = scope.data.selected.month;
                            var day = scope.data.selected.day;

                            if (!isCorrectDay(day, month, year)){
                                day = scope.data.getDaysInMonth(year, year);
                            }

                            datetime = getDateTime(day, month, year);
                            updateModel(datetime);
                        });
                    }

                    function getDateTime(day:number, month:number, year:number) {
                        if (!day || (!month && month !== 0) || !year) {
                            MessagesFactory.throwInvalidParamsMessage();
                        }

                        return new Date(year, month, day).getTime();
                    }

                    function isCorrectDay(day:number, month:number, year:number) {
                        var daysInMonth = scope.data.getDaysInMonth(month, year);

                        return day <= daysInMonth;
                    }

                }
            }
        });
}