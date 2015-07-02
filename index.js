'use strict';

angular.module('demo', [
    'angular-pd'
])

    .controller('DemoPageCtrl', function ($scope) {

        $scope.localizedDays = [
            {name: 'Понедельник', short: 'Пн'},
            {name: 'Вторник', short: 'Вт'},
            {name: 'Среда', short: 'Ср'},
            {name: 'Четверг', short: 'Чт'},
            {name: 'Пятница', short: 'Пт'},
            {name: 'Суббота', short: 'Сб'},
            {name: 'Воскресенье', short: 'Вс'}
        ];

        $scope.commonCase = {
            model: {
                day: 26,
                dayOfWeek: 6,
                month: 6,
                year: 2015,
                datetime: 1435315214948,
                timezone: -480
            }
        };

        $scope.limitsCase = {
            model: {
                day: 26,
                dayOfWeek: 6,
                month: 6,
                year: 2015,
                datetime: 1435315214948,
                timezone: -480
            },
            startDate: 1435315214948,
            endDate: new Date(2020, 6, 21).getTime()
        };

        $scope.leftLimitsCase = {
            model: {
                day: 26,
                dayOfWeek: 6,
                month: 6,
                year: 2015,
                datetime: 1435315214948,
                timezone: -480
            },
            startDate: 1435315214948
        };

        $scope.rightLimitsCase = {
            model: {
                day: 26,
                dayOfWeek: 6,
                month: 6,
                year: 2015,
                datetime: 1435315214948,
                timezone: -480
            },
            endDate: 1435315214948
        };

        $scope.outOfRightLimitCase = {
            model: {
                day: 26,
                dayOfWeek: 6,
                month: 6,
                year: 2015,
                datetime: 1435315214948,
                timezone: -480
            },
            endDate: 1435000000000
        };

        $scope.outOfLeftLimitCase = {
            model: {
                day: 26,
                dayOfWeek: 6,
                month: 6,
                year: 2015,
                datetime: 1435315214948,
                timezone: -480
            },
            startDate: 1435000000000
        };

        $scope.emptyModelCase = {
            model: null
        };

        $scope.emptyModelLeftLimitCase = {
            model: null,
            startDate: 1435000000000
        };

        $scope.emptyModelRightLimitCase = {
            model: null,
            endDate: 1435000000000
        };

        $scope.invalidLeftLimitCase = {
            model: {
                day: 26,
                dayOfWeek: 6,
                month: 6,
                year: 2015,
                datetime: 1435315214948,
                timezone: -480
            },
            startDate: 'invalid'
        };

        $scope.invalidRightLimitCase = {
            model: {
                day: 26,
                dayOfWeek: 6,
                month: 6,
                year: 2015,
                datetime: 1435315214948,
                timezone: -480
            },
            endDate: Infinity
        };

        $scope.linkedModelCase = {
            model: {
                day: 26,
                dayOfWeek: 6,
                month: 6,
                year: 2015,
                datetime: 1435315214948,
                timezone: -480
            }
        };

        $scope.linkedModelBothLimitsCase = {
            model: {
                day: 26,
                dayOfWeek: 6,
                month: 6,
                year: 2015,
                datetime: 1435315214948,
                timezone: -480
            },
            startDate: 1435315210000,
            endDate: 1435315214948
        };

        $scope.linkedModelBothDifferentLimitsCase = {
            model: {
                day: 26,
                dayOfWeek: 6,
                month: 6,
                year: 2015,
                datetime: 1435315214948,
                timezone: -480
            },
            startDate_one: 1435315210000,
            endDate_one: 1435315214948,
            startDate_two: 1435300000000,
            endDate_two: 1435315200000
        };
    })
;
