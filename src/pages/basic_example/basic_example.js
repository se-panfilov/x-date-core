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

        //$scope.commonExampleTemplate =
        //    '<form id="demo_simple_form" name="demo_simple_form">' +
        //    '<div class="form-group">' +
        //    '<label for="apd_1" class="control-label">Date</label>' +
        //    '<pure-datepicker id="apd_1" ng-model="basicExample.model"></pure-datepicker>' +
        //    '</div>' +
        //    '</form>';
        $scope.commonExampleTemplate =
            '<div>asd</div>';

    });