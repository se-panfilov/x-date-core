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

        $scope.localizedMonth = {
            1: {name: 'Январь', short: 'Янв'},
            2: {name: 'Февраль', short: 'Фев'},
            3: {name: 'Март', short: 'Март'},
            4: {name: 'Апрель', short: 'Май'},
            5: {name: 'Май', short: 'Май'},
            6: {name: 'Июнь', short: 'Июнь'},
            7: {name: 'Июль', short: 'Июль'},
            8: {name: 'Август', short: 'Авг'},
            9: {name: 'Сентябрь', short: 'Сент'},
            10: {name: 'Октябрь', short: 'Окт'},
            11: {name: 'Ноябрь', short: 'Ноя'},
            12: {name: 'Декабрь', short: 'Дек'}
        };

        $scope.resultModel = '';
        $scope.resultDelayedModel = '';
        $scope.resultLinkedModel = '';
    })
;
