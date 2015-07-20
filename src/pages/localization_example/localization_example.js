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

        $scope.example = {
            model: {
                datetime: new Date(2015, 6, 26).getTime()
            },
            localNames: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
        };

        $scope.demo = {
            template: '<form id="demo_form" name="demo_form" ng-controller="ExampleCtrl">' +
            '\n    <div class="form-group">' +
            '\n        <label for="apd_1" class="control-label">Date</label>' +
            '\n        <pure-datepicker id="apd_1" ng-model="example.model" apd-localization="example.localNames"></pure-datepicker>' +
            '\n    </div>' +
            '\n</form>',
            script: '.controller(\'ExampleCtrl\', function ($scope) {' +
            '\n   $scope.example = {' +
            '\n       model: {' +
            '\n           datetime: new Date(2015, 6, 26).getTime()' +
            '\n       },' +
            '\n       localNames: [\'Вс\', \'Пн\', \'Вт\', \'Ср\', \'Чт\', \'Пт\', \'Сб\']' +
            '\n   };' +
            '\n});'
        };

    })
;