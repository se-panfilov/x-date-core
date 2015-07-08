/// <reference path="classes/DayOfWeek.ts" />
/// <reference path="classes/DaysOfWeek.ts" />
/// <reference path="classes/DateModelClass.ts" />

module apd.directive {
    'use strict';


    var daysOfWeek = new apd.Model.DaysOfWeek([
        new apd.Model.DayOfWeek('Sunday', 'Sun'),
        new apd.Model.DayOfWeek('Monday', 'Mon'),
        new apd.Model.DayOfWeek('Tuesday', 'Tue'),
        new apd.Model.DayOfWeek('Wednesday', 'Wed'),
        new apd.Model.DayOfWeek('Thursday', 'Thu'),
        new apd.Model.DayOfWeek('Friday', 'Fri'),
        new apd.Model.DayOfWeek('Saturday', 'Sat')
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

                    var ngModelWatcher = {
                        handler: null,
                        start: function (callback:Function) {
                            ngModelWatcher.handler = scope.$watch('ngModel.datetime', function (value:number, oldValue:number) {
                                if (callback) {
                                    callback(value, oldValue)
                                }

                            }, true);
                        },
                        stop: function () {
                            if (!ngModelWatcher.handler) {
                                MessagesFactory.throwInvalidParamsMessage();
                                return false;
                            }

                            ngModelWatcher.handler();
                            return true;
                        }
                    };

                    function getInitDateModel(model:any) {
                        var isInitModelValid:boolean = DateUtilsFactory.validateModel(model);
                        var initDatetime:number;

                        if (isInitModelValid) {
                            initDatetime = model.datetime
                        } else {
                            initDatetime = new Date().getTime();
                        }

                        return new apd.Model.DateModelClass(initDatetime);
                    }

                    function _initData(initDateModel:apd.Model.DateModelClass, startDateTime:number, endDateTime:number) {
                        scope.data = DateUtilsFactory.getData(initDateModel, startDateTime, endDateTime);
                        scope.ngModel = scope.data.selected;
                    }

                    function updateModel(datetime:number) {
                        ngModelWatcher.stop();
                        scope.data.selected = new apd.Model.DateModelClass(datetime);
                        scope.ngModel = scope.data.selected;
                        ngModelWatcher.start(onModelChange);
                    }

                    function onModelChange(datetime:number, oldValue:number) {
                        if (datetime === oldValue) {
                            return;
                        }

                        updateModel(datetime);


                        scope.data.reloadYearsList();
                        scope.data.reloadMonthList();
                        scope.data.reloadDaysList();
                    }

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
                            //TODO (S.Panfilov) .getDaysInMonth didn't expect limits, should use other func
                            day = scope.data.getDaysInMonth(month, year);
                        }
                        datetime = getDateTime(day, month, year);
                        updateModel(datetime);

                        scope.data.reloadDaysList();
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

                        scope.data.reloadMonthList();
                        scope.data.reloadDaysList();
                    };

                    function getDateTime(day:number, month:number, year:number):number {
                        if (!day || (!month && month !== 0) || !year) {
                            MessagesFactory.throwInvalidParamsMessage();
                        }

                        return new Date(year, month, day).getTime();
                    }

                    function isCorrectDay(day:number, month:number, year:number):boolean {
                        var daysInMonth = scope.data.getDaysInMonth(month, year);

                        return day <= daysInMonth;
                    }

                    (function _init() {
                        settings.initDateModel = getInitDateModel(scope.ngModel);
                        settings.startDateTime = (scope.apdStart) ? +scope.apdStart : null;
                        settings.endDateTime = (scope.apdEnd) ? +scope.apdEnd : null;
                        _initData(settings.initDateModel, settings.startDateTime, settings.endDateTime);

                        scope.getDayOfWeekShortName = daysOfWeek.getDayOfWeekShortName;
                        scope.getDayOfWeekName = daysOfWeek.getDayOfWeekName;

                        ngModelWatcher.start(onModelChange);
                    })();

                }
            }
        });
}