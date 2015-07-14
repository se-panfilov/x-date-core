'use strict';

angular.module('app.pages.styling_example', [
    'ui.router'
])

    .config(function ($stateProvider) {

        $stateProvider

            .state('styling_example', {
                url: '/styling_example',
                templateUrl: 'styling_example/styling_example.html',
                controller: 'StylingExamplePageCtrl'
            })
        ;
    })

    .controller('StylingExamplePageCtrl', function ($scope) {

    });