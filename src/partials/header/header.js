'use strict';

angular.module('app.header', [])

    .directive('mainHeader', function () {
        return {
            restrict: 'E',
            scope: {},
            replace: true,
            templateUrl: 'header/header.html',
            controller: function ($scope, $state) {

                (function _init() {
                    $scope.$state = $state;
                    $scope.isNavbarCollapsed = true;
                })();
            },
            link: function (scope) {
                //
            }
        };
    })
;