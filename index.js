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

        $scope.resultModel = {
            day: 26,
            dayOfWeek: 6,
            month: 6,
            year: 2015,
            datetime: 1435315214948,
            timezone: -480
        };
    })
;
