'use strict';

angular.module('app.pages.limits_example', [
    'ui.router'
])

    .config(function ($stateProvider) {

        $stateProvider

            .state('limits_example', {
                url: '/limits_example',
                templateUrl: 'limits_example/users.html',
                controller: 'LimitsExamplePageCtrl'
            })
        ;
    })

    .controller('LimitsExamplePageCtrl', function ($scope) {

    });