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

        $scope.commonExample = {
            template: '<form id="demo_simple_form" name="demo_simple_form">' +
            '\n    <div class="form-group">' +
            '\n        <label for="apd_1" class="control-label">Date</label>' +
            '\n        <pure-datepicker id="apd_1" ng-model="basicExample.model"></pure-datepicker>' +
            '\n    </div>' +
            '\n</form>',
            script: 'console.log(1);'
        };

    });