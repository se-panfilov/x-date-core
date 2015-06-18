angular.module("angular-pd.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("apd.html","<div class=apd_root><select ng-model=data.selected.day ng-options=\"day for day in data.days\" ng-init=\"data.selected.day = data.days[0]\" id={{::apdDayId}} class=\"apd_select_day apd_select {{::apdDayClasses}}\"></select><div ng-bind=data.selected.dayOfWeek class=apd_day_of_week></div><select ng-model=data.selected.month ng-options=\"(month + 1) for month in data.month\" ng-init=\"data.selected.month = data.month[0]\" id={{::apdMonthId}} class=\"apd_select_month apd_select {{::apdMonthClasses}}\"></select><select ng-model=data.selected.year ng-options=\"year for year in data.years\" ng-init=\"data.selected.year = data.years[0]\" id={{::apdYearId}} class=\"apd_select_year apd_select {{::apdYearClasses}}\"></select></div>");}]);
//module apd.main {
//    'use strict';
angular.module('angular-pd', ['angular-pd.datepicker']).constant('MESSAGES', {
    invalidParams: 'Invalid params'
});
//} 

/// <reference path="main.ts" />
//TODO (S.Panfilov)  is this references necessary?
var apd;
(function (apd) {
    var directive;
    (function (directive) {
        'use strict';
        var DateModelClass = (function () {
            function DateModelClass() {
                this.day = null;
                this.dayOfWeek = null;
                this.month = null;
                this.year = null;
                this.datetime = null;
            }
            return DateModelClass;
        })();
        var DataClass = (function () {
            function DataClass() {
                this.month = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
            }
            return DataClass;
        })();
        angular.module('angular-pd.datepicker', [
            'angular-pd.templates'
        ]).directive('pureDatepicker', ['MESSAGES', function (MESSAGES) {
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
                controller: ['$scope', function ($scope) {
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
                    function getIntArr(length) {
                        if (!length)
                            return console.error(MESSAGES.invalidParams);
                        return length ? getIntArr(length - 1).concat(length) : [];
                    }
                    function reloadDaysCount(month, year) {
                        if (!month || !year)
                            return console.error(MESSAGES.invalidParams);
                        $scope.data.days = getIntArr(new Date(year, month, 0).getDate());
                    }
                    function reloadSelectedDay(year, month, day) {
                        if (!year || !month || day)
                            return console.error(MESSAGES.invalidParams);
                        var date = new Date(year, month, day);
                        $scope.data.selected.dayOfWeek = date.getDay();
                        $scope.data.selected.datetime = date.getTime() * 1000;
                    }
                    function getDefaultYear() {
                        //TODO (S.Panfilov) fix for case with date limits
                        return (new Date()).getFullYear();
                    }
                }],
                link: function (scope, elem) {
                }
            };
        }]);
    })(directive = apd.directive || (apd.directive = {}));
})(apd || (apd = {}));
