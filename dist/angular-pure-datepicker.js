angular.module("angular-pd.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("apd.html","<div class=apd_root><select ng-model=data.selected.day ng-options=\"day as day in data.days\" id={{::apdDayId}} class=\"apd_select_day apd_select {{::apdDayClasses}}\"></select></div>");}]);


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
                    $scope.data = {
                        selected: {}
                    };
                }],
                link: function (scope, elem) {
                }
            };
        });
    })(directive = apd.directive || (apd.directive = {}));
})(apd || (apd = {}));
