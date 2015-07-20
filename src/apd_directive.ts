/// <reference path="classes/DayClass.ts" />
/// <reference path="classes/WeekClass.ts" />
/// <reference path="classes/DateModelClass.ts" />

//TODO (S.Panfilov) mat be should replace manual reference with gulp-auto-references?

declare
var angular:any;

module apd.directive {
    'use strict';

    angular.module('angular-pd', [
        'angular-pd.templates'
    ])

        .directive('pureDatepicker', function () {
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
                    apdYearClasses: '@?',
                    apdLocalization: '=?'
                },
                link: function (scope) {

                    //TODO (S.Panfilov) check for cross-browser support
                    //TODO (S.Panfilov) may be should add tests
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
                                apd.Model.MessagesFactoryClass.throwInvalidParamsMessage();
                                return false;
                            }

                            ngModelWatcher.handler();
                            return true;
                        }
                    };

                    function getInitDateModel(model:any) {
                        var isInitModelValid:boolean = apd.Model.DateModelClass.validate(model);
                        var initDatetime:number;

                        if (isInitModelValid) {
                            initDatetime = model.datetime
                        } else {
                            initDatetime = new Date().getTime();
                        }

                        var date = new Date(initDatetime);
                        var day = date.getDate();
                        var month = date.getMonth();
                        var year = date.getFullYear();

                        var limitSafeDatetime = getLimitSafeDatetime(day, month, year);

                        return new apd.Model.DateModelClass(limitSafeDatetime);
                    }

                    function _initData(initDateModel:apd.Model.DateModelClass, startDateTime:number, endDateTime:number) {
                        scope.data = new apd.Model.DataClass(initDateModel, startDateTime, endDateTime);
                        scope.ngModel = scope.data.selected;
                    }

                    function getLimitSafeDatetime(day:number, month:number, year:number):number {
                        if (!isDayInMonth(day, month, year)) {
                            day = apd.Model.DataClass.getDaysInMonth(month, year);
                        }

                        var datetime:number = getDateTime(day, month, year);

                        if (!apd.Model.LimitDatesClass.isDateBetweenLimits(datetime, settings.startDateTime, settings.endDateTime)) {
                            if (!apd.Model.LimitDatesClass.isDateUpperStartLimit(datetime, settings.startDateTime)) {
                                datetime = settings.startDateTime;
                            } else if (!apd.Model.LimitDatesClass.isDateLowerEndLimit(datetime, settings.endDateTime)) {
                                datetime = settings.endDateTime;
                            }
                        }

                        return datetime;
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

                        var date = new Date(datetime);
                        var day = date.getDate();
                        var month = date.getMonth();
                        var year = date.getFullYear();

                        datetime = getLimitSafeDatetime(day, month, year);
                        updateModel(datetime);

                        scope.data.reloadYearsList();
                        scope.data.reloadMonthList();
                        scope.data.reloadDaysList();
                    }

                    scope.onDaySelectChanged = function (day:number) {
                        if (!day) return;

                        var datetime = getLimitSafeDatetime(scope.data.selected.day, scope.data.selected.month, scope.data.selected.year);
                        updateModel(datetime);
                    };

                    scope.onMonthSelectChanged = function (month:number) {
                        if (!month && month !== 0) return;

                        var datetime;
                        var year = scope.data.selected.year;
                        var day = scope.data.selected.day;

                        datetime = getLimitSafeDatetime(day, month, year);
                        updateModel(datetime);

                        scope.data.reloadDaysList();
                    };

                    scope.onYearSelectChanged = function (year:number) {
                        if (!year && year !== 0) return;

                        var month = scope.data.selected.month;
                        var day = scope.data.selected.day;

                        var datetime = getLimitSafeDatetime(day, month, year);
                        updateModel(datetime);

                        scope.data.reloadMonthList();
                        scope.data.reloadDaysList();
                    };

                    function getDateTime(day:number, month:number, year:number):number {
                        if (!day || (!month && month !== 0) || !year) {
                            apd.Model.MessagesFactoryClass.throwInvalidParamsMessage();
                        }

                        return new Date(year, month, day).getTime();
                    }

                    function isDayInMonth(day:number, month:number, year:number):boolean {
                        var daysInMonth = apd.Model.DataClass.getDaysInMonth(month, year);

                        return day <= daysInMonth;
                    }

                    (function _init() {
                        settings.startDateTime = (scope.apdStart) ? +scope.apdStart : null;
                        settings.endDateTime = (scope.apdEnd) ? +scope.apdEnd : null;
                        settings.initDateModel = getInitDateModel(scope.ngModel);
                        _initData(settings.initDateModel, settings.startDateTime, settings.endDateTime);


                        var localization = scope.apdLocalization || null;
                        var week:apd.Model.WeekClass = new apd.Model.WeekClass(localization);
                        scope.getDayShortName = week.getDayShortName;
                        scope.getDayName = week.getDayName;

                        ngModelWatcher.start(onModelChange);
                    })();

                }
            }
        });
}