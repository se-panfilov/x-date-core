'use strict';

angular.module('app.pages.limits_example', [
    'ui.router'
])

    .config(function ($stateProvider) {

        $stateProvider

            .state('limits_example', {
                url: '/limits_example',
                templateUrl: 'limits_example/limits_example.html',
                controller: 'LimitsExamplePageCtrl'
            })
        ;
    })

    .controller('LimitsExamplePageCtrl', function ($scope) {

        $scope.example = {
            model: {
                datetime: new Date(2015, 6, 26).getTime()
            },
            startDate: new Date(2015, 6, 21).getTime(),
            endDate: new Date(2020, 6, 27).getTime()
        };

        $scope.demo = {
            template: '<form id="demo_form" name="demo_form" ng-controller="ExampleCtrl">' +
            '\n    <div class="form-group">' +
            '\n        <label for="apd_1" class="control-label">Date</label>' +
            '\n        <pure-datepicker id="apd_1" ng-model="example.model" apd-start="example.startDate" apd-end="example.endDate"></pure-datepicker>' +
            '\n    </div>' +
            '\n</form>',
            script: '.controller(\'ExampleCtrl\', function ($scope) {' +
            '\n    $scope.example = {' +
            '\n        model: {' +
            '\n            datetime: new Date(2015, 6, 26).getTime()'+
            '\n        },'+
            '\n        startDate: new Date(2015, 6, 21).getTime(),'+
            '\n        endDate: new Date(2020, 6, 27).getTime()' +
            '\n    };' +
            '\n});'
        };

    });