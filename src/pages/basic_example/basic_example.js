'use strict';

angular.module('app.pages.basic_example', [
    'ui.router'
])

    .config(function ($stateProvider) {

        $stateProvider

            .state('basic_example', {
                url: '/basic_example',
                templateUrl: 'basic_example/basic_example.html',
                controller: 'BasicExamplePageCtrl'
            })
        ;
    })

    .controller('BasicExamplePageCtrl', function ($scope) {

    });