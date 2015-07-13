'use strict';

angular.module('app.pages.limits_example', [
    'ui.router'
])

    .config(function ($stateProvider) {

        $stateProvider

            .state('users', {
                url: '/users',
                templateUrl: 'users/users.html',
                controller: 'UsersPageCtrl'
            })
        ;
    })

    .controller('LimitsExamplePageCtrl', function ($scope) {

    });