/// <reference path="interfaces.ts" />
/// <reference path="main.ts" />

//TODO (S.Panfilov)  is this references necessary?

module apd.directive {
    'use strict';

    class DateModel implements apd.interfaces.DateModel {
        day = null;
        dayOfWeek = null;
        month = null;
        year = null;
        datetime = null;
    }

    class Data implements apd.interfaces.Data {
        selected:apd.interfaces.DateModel;
        days:Array<number>;
        month:Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        years:Array<number>;
    }

    angular.module('angular-pd.datepicker', [
        //'angular-pd.popup',
        //'angular-pd.data',
        'angular-pd.templates'
    ])

        .directive('pureDatepicker', function () {
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

                    $scope.data = new Data();
                    $scope.data.selected = new DateModel();

                    $scope.$watch('data.selected.month', function () {
                        reloadDaysCount($scope.data.selected.month, $scope.data.selected.year);
                    });

                    $scope.$watch('data.selected.year', function () {
                        reloadDaysCount($scope.data.selected.month, $scope.data.selected.year);
                    });

                    function getIntArr(length:number) {
                        return length ? getIntArr(length - 1).concat(length) : [];
                    }

                    function reloadDaysCount(month:number, year:number) {
                        $scope.data.days = getIntArr(new Date(year, month, 0).getDate());
                    }


                },
                link: function (scope, elem) {

                }
            }
        });
}