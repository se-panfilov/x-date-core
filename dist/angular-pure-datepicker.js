angular.module("angular-pd.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("apd.html","<div class=apd_root><select ng-model=data.selected.day ng-options=\"day for day in data.days\" id={{::apdDayId}} class=\"apd_select_day apd_select {{::apdDayClasses}}\"></select><div ng-bind=data.selected.dayOfWeek class=apd_day_of_week></div><select ng-model=data.selected.month ng-options=\"month for month in data.month\" id={{::apdMonthId}} class=\"apd_select_month apd_select {{::apdMonthClasses}}\"></select><select ng-model=data.selected.year ng-options=\"year for year in data.years\" id={{::apdYearId}} class=\"apd_select_year apd_select {{::apdYearClasses}}\"></select></div>");}]);
var apd;
(function (apd) {
    var interfaces;
    (function (interfaces) {
        var Data = (function () {
            function Data() {
            }
            return Data;
        })();
        interfaces.Data = Data;
    })(interfaces = apd.interfaces || (apd.interfaces = {}));
})(apd || (apd = {}));

//module apd.main {
//    'use strict';
angular.module('angular-pd', ['angular-pd.datepicker']).constant('MESSAGES', {
    invalidParams: 'Invalid params'
});
//} 

/// <reference path="interfaces.ts" />
/// <reference path="main.ts" />
//TODO (S.Panfilov)  is this references necessary?
var apd;
(function (apd) {
    var directive;
    (function (directive) {
        'use strict';
        var DateModel = (function () {
            function DateModel() {
                this.day = null;
                this.dayOfWeek = null;
                this.month = null;
                this.year = null;
                this.datetime = null;
            }
            return DateModel;
        })();
        var Data = (function () {
            function Data() {
                this.month = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
            }
            return Data;
        })();
        angular.module('angular-pd.datepicker', [
            'angular-pd.templates'
        ]).directive('pureDatepicker', function () {
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
                    $scope.data = new Data();
                    $scope.data.selected = new DateModel();
                    $scope.$watch('data.selected.month', function () {
                        reloadDaysCount($scope.data.selected.month, $scope.data.selected.year);
                    });
                    $scope.$watch('data.selected.year', function () {
                        reloadDaysCount($scope.data.selected.month, $scope.data.selected.year);
                    });
                    function getIntArr(length) {
                        return length ? getIntArr(length - 1).concat(length) : [];
                    }
                    function reloadDaysCount(month, year) {
                        $scope.data.days = getIntArr(new Date(year, month, 0).getDate());
                    }
                }],
                link: function (scope, elem) {
                }
            };
        });
    })(directive = apd.directive || (apd.directive = {}));
})(apd || (apd = {}));
