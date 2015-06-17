angular.module("angular-pd.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("apd.html","<div class=apd_root><select ng-model=data.day ng-options=data.days id={{::apdDayId}} class=\"apd_select {{::apdDayClasses}}\"></select><div ng-bind=data.dayOfWeek class=apd_day_of_week></div></div>");}]);
angular.module('angular-pd.datepicker', [
    'angular-pd.popup',
    'angular-pd.data',
    'angular-pd.templates'
]).directive('bdatepicker', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'apd.html',
        scope: {
            some: '='
        },
        controller: ['$scope', function ($scope) {
        }],
        link: function (scope, elem) {
        }
    };
});

angular.module('angular-pd', ['bdate.datepicker']).constant('MESSAGES', {
    invalidParams: 'Invalid params'
});
