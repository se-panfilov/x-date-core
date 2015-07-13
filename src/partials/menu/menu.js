'use strict';

angular.module('app.menu', [])

    .directive('mainMenu', function () {
        return {
            restrict: 'E',
            scope: {},
            replace: true,
            templateUrl: 'partials/menu/menu.html',
            controller: function ($scope, $state) {
                //
            },
            link: function (scope) {
                //
            }
        };
    })
;