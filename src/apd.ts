angular.module('angular-pd.datepicker', [
    'angular-pd.popup',
    'angular-pd.data',
    'angular-pd.templates'
])

    .directive('bdatepicker', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'apd.html',
            scope: {
                some: '='
            },
            controller: function ($scope) {

            },
            link: function (scope, elem) {

            }
        }
    });