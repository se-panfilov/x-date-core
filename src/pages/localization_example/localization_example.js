'use strict';

angular.module('app.pages.localization_example', [
    'ui.router'
])

    .config(function ($stateProvider) {

        $stateProvider

            .state('localization_example', {
                url: '/localization_example',
                templateUrl: 'localization_example/localization_example.html',
                controller: 'LocalizationExamplePageCtrl'
            })
        ;
    })

    .controller('LocalizationExamplePageCtrl', function ($scope) {

    });