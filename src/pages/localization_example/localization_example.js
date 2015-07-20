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

        $scope.localNames = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

        $scope.localizedExample = {
            template: '<form id="demo_localized_form" name="demo_localized_form" ng-controller="ExampleCtrl">' +
            '\n    <div class="form-group">' +
            '\n        <label for="apd_1" class="control-label">Date</label>' +
            '\n        <pure-datepicker id="apd_1" ng-model="localizedExample.model" apd-localization="localNames"></pure-datepicker>' +
            '\n    </div>' +
            '\n</form>',
            script: '.controller(\'ExampleCtrl\', function ($scope) {' +
            '\n    $scope.localNames =[\'Вс\', \'Пн\', \'Вт\', \'Ср\', \'Чт\', \'Пт\', \'Сб\'];' +
            '\n});'
        };

    });