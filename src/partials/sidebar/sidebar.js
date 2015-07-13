'use strict';

angular.module('app.sidebar', [])

    .directive('sidebar', function () {
        return {
            restrict: 'E',
            scope: {},
            replace: true,
            templateUrl: 'sidebar/sidebar.html',
            controller: function ($scope, $state) {
                //
            },
            link: function (scope) {
                //
            }
        };
    })
;