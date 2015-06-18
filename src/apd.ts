/// <reference path="main.ts" />

//TODO (S.Panfilov)  is this references necessary?

module apd.directive {
    'use strict';

    interface DateModelInterface {
        day: number;
        dayOfWeek: number;
        month: number;
        year: number;
        datetime: number;
    }

    interface DataInterface {
        selected:DateModelInterface;
        days:Array<number>;
        month:Array<number>;
        years:Array<number>;
    }

    class DateModelClass implements DateModelInterface {
        day = null;
        dayOfWeek = null;
        month = null;
        year = null;
        datetime = null;
    }

    class DataClass implements DataInterface {
        selected:DateModelInterface;
        days:Array<number>;
        month:Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        years:Array<number>;
    }

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

                    $scope.data = new DataClass();
                    $scope.data.selected = new DateModelClass();
                    $scope.data.years = getDefaultYear();

                    $scope.$watch('data.selected.day', function () {
                        reloadSelectedDay($scope.data.selected.year, $scope.data.selected.month, $scope.data.selected.day);
                    });

                    $scope.$watch('data.selected.month', function () {
                        reloadDaysCount($scope.data.selected.month, $scope.data.selected.year);
                        reloadSelectedDay($scope.data.selected.year, $scope.data.selected.month, $scope.data.selected.day);
                    });

                    $scope.$watch('data.selected.year', function () {
                        reloadDaysCount($scope.data.selected.month, $scope.data.selected.year);
                        reloadSelectedDay($scope.data.selected.year, $scope.data.selected.month, $scope.data.selected.day);
                    });

                    function getIntArr(length:number) {
                        if (!length) return console.error(MESSAGES.invalidParams);

                        return length ? getIntArr(length - 1).concat(length) : [];
                    }

                    function reloadDaysCount(month:number, year:number) {
                        if (!month || !year) return console.error(MESSAGES.invalidParams);

                        $scope.data.days = getIntArr(new Date(year, month, 0).getDate());
                    }

                    function reloadSelectedDay(year, month, day) {
                        if (!year || !month || day) return console.error(MESSAGES.invalidParams);
                        var date = new Date(year, month, day);

                        $scope.data.selected.dayOfWeek = date.getDay();
                        $scope.data.selected.datetime = date.getTime() * 1000;
                    }

                    function getDefaultYear () {
                        //TODO (S.Panfilov) fix for case with date limits
                        return (new Date()).getFullYear();
                    }



                },
                link: function (scope, elem) {

                }
            }
        });
}