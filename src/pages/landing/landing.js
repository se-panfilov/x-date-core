'use strict';

angular.module('app.pages.landing', [
    'ui.router'
])

    .config(function ($stateProvider) {

        $stateProvider

            .state('landing', {
                url: '/landing',
                templateUrl: 'landing/landing.html',
                controller: 'BasicExamplePageCtrl'
            })
        ;
    })

    .controller('LandingPageCtrl', function ($scope) {

    });