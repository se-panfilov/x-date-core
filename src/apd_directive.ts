/// <reference path="classes/MonthClass.ts" />
/// <reference path="classes/DaysClass.ts" />
/// <reference path="classes/DateModelClass.ts" />
/// <reference path="classes/LimitDatesClass.ts" />

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
                    apdLocalization: '=?',
                    apdIsUtc: '=?'
                },
                link: function (scope) {

                    scope.apdIsUtc = scope.apdIsUtc || false;

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
                            ngModelWatcher.handler();
                            return true;
                        }
                    };


                    function getLimitSafeDatetime(day:number, month:number, year:number):number {

                        var datetime:number = new Date(year, month, day).getTime();

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
                        scope.data.selected = new apd.Model.DateModelClass(datetime, scope.apdIsUtc);
                        scope.ngModel = scope.data.selected;
                        ngModelWatcher.start(onModelChange);
                    }

                    function onModelChange(datetime:number, oldValue:number) {
                        if (datetime === oldValue) {
                            return;
                        }

                        var day = apd.Model.DateUtilsClass.getDay(datetime, scope.apdIsUtc);
                        var month = apd.Model.DateUtilsClass.getMonth(datetime, scope.apdIsUtc);
                        var year = apd.Model.DateUtilsClass.getYear(datetime, scope.apdIsUtc);

                        datetime = getLimitSafeDatetime(day, month, year);
                        updateModel(datetime);

                        scope.data.reloadYearsList();
                        scope.data.reloadMonthList();
                        scope.data.reloadDaysList();
                    }

                    function getInitDateModel(model:any) {
                        var isInitModelValid:boolean = apd.Model.DateModelClass.validate(model);
                        var initDatetime:number;

                        if (isInitModelValid) {
                            initDatetime = model.datetime
                        } else {
                            initDatetime = new Date().getTime();
                        }

                        var day = apd.Model.DateUtilsClass.getDay(initDatetime, scope.apdIsUtc);
                        var month = apd.Model.DateUtilsClass.getMonth(initDatetime, scope.apdIsUtc);
                        var year = apd.Model.DateUtilsClass.getYear(initDatetime, scope.apdIsUtc);

                        var limitSafeDatetime = getLimitSafeDatetime(day, month, year);

                        return new apd.Model.DateModelClass(limitSafeDatetime, scope.apdIsUtc);
                    }

                    function _initData(initDateModel:apd.Model.DateModelClass, startDateTime:number, endDateTime:number) {
                        scope.data = new apd.Model.DataClass(initDateModel, startDateTime, endDateTime, scope.apdIsUtc);
                        scope.ngModel = scope.data.selected;
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
                        var week:apd.Model.DaysClass = new apd.Model.DaysClass(localization);
                        var year:apd.Model.MonthClass = new apd.Model.MonthClass(localization);
                        scope.getDayName = week.getName;
                        scope.getMonthName = year.getName;

                        ngModelWatcher.start(onModelChange);
                    })();

                }
            }
        });
}