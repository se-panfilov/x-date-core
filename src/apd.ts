/// <reference path="interfaces.ts" />
/// <reference path="main.ts" />

//TODO (S.Panfilov)  is this references necessary?

module apd.directive {
    'use strict';

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

                    $scope.data = {
                        selected: <apd.interfaces.DateModel> {}
                    };

                },
                link: function (scope, elem) {

                }
            }
        });
}