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
                        settings.initDateModel = getInitDateModel(scope.ngModel);
                        settings.startDateTime = (scope.apdStart) ? +scope.apdStart : null;
                        settings.endDateTime = (scope.apdEnd) ? +scope.apdEnd : null;
                        _initData(settings.initDateModel, settings.startDateTime, settings.endDateTime);

                        scope.getDayOfWeekShortName = daysOfWeek.getDayOfWeekShortName;
                        scope.getDayOfWeekName = daysOfWeek.getDayOfWeekName;
                    }

                    init();

                    function getInitDateModel(model:any) {
                        var isInitModelValid:boolean = DateUtilsFactory.validateModel(model);
                        var initDatetime:number;

                        if (isInitModelValid) {
                            initDatetime = model.datetime
                        } else {
                            initDatetime = new Date().getTime();
                        }

                        return new apd.dateUtils.DateModelClass(initDatetime);
                    }

                    function _initData(initDateModel:apd.dateUtils.DateModelClass, startDateTime:number, endDateTime:number) {
                        scope.data = DateUtilsFactory.getData(initDateModel, startDateTime, endDateTime);
                        scope.ngModel = scope.data.selected;
                    }

                    function updateModel(datetime:number) {
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

                    scope.onDaySelectChanged = function (day:number) {
                        if (!day) return;

                        var datetime = getDateTime(scope.data.selected.day, scope.data.selected.month, scope.data.selected.year);
                        updateModel(datetime);
                    };

                    scope.onMonthSelectChanged = function (month:number) {
                        if (!month && month !== 0) return;

                        var datetime;
                        var year = scope.data.selected.year;
                        var day = scope.data.selected.day;

                        if (!isCorrectDay(day, month, year)) {
                            day = scope.data.getDaysInMonth(month, year);
                        }

                        datetime = getDateTime(day, month, year);
                        updateModel(datetime);
                    };

                    scope.onYearSelectChanged = function (year:number) {
                        if (!year && year !== 0) return;

                        var datetime;
                        var month = scope.data.selected.month;
                        var day = scope.data.selected.day;

                        if (!isCorrectDay(day, month, year)) {
                            day = scope.data.getDaysInMonth(year, year);
                        }

                        datetime = getDateTime(day, month, year);
                        updateModel(datetime);
                    };

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