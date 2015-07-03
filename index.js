'use strict';

angular.module('demo', [
    'angular-pd'
])

    .directive('modelWell', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                caseModel: '='
            },
            template: '<section class=well>' +
            '<div><span>Day:</span>&nbsp;<span ng-bind=caseModel.model.day></span></div>' +
            '<div><span>Month:</span>&nbsp;<span ng-bind=caseModel.model.month></span></div>' +
            '<div><span>Year:</span>&nbsp;<span ng-bind=caseModel.model.year></span></div>' +
            '<div><span>Datetime:</span>&nbsp;<span ng-bind=caseModel.model.datetime></span></div>' +
            '<div><span>Timezone:</span>&nbsp;<span ng-bind=caseModel.model.timezone></span></div>' +
            '<div><span>Start limit:</span>&nbsp;<span ng-bind=caseModel.model.startDate></span></div>' +
            '<div><span>End limit:</span>&nbsp;<span ng-bind=caseModel.model.endDate></span></div>' +
            '</section>',
            link: function (scope) {
                //console.log(scope.caseModel);
            }
        };
    })

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

        $scope.plusOneMonth = function (caseModel) {
            var date = new Date(caseModel.model.datetime);
            if (date.getMonth() === 11) {
                date.setMonth(0);
                date.setFullYear(date.getFullYear() + 1)
            } else {
                date.setMonth(date.getMonth() + 1);
            }

            caseModel.model.datetime = date.getTime()
        };

        $scope.minusOneMonth = function (caseModel) {
            var date = new Date(caseModel.model.datetime);
            if (date.getMonth() === 0) {
                date.setMonth(11);
                date.setFullYear(date.getFullYear() - 1)
            } else {
                date.setMonth(date.getMonth() - 1);
            }

            caseModel.model.datetime = date.getTime()
        };

        $scope.commonCase = {
            model: {
                day: 26,
                dayOfWeek: 6,
                month: 6,
                year: 2015,
                datetime: new Date(2015, 6, 26).getTime(),
                timezone: -480
            }
        };

        $scope.onlyDatetimeCase = {
            model: {
                datetime: new Date(2015, 6, 26).getTime()
            }
        };

        $scope.limitsCase = {
            model: {
                day: 26,
                dayOfWeek: 6,
                month: 6,
                year: 2015,
                datetime: new Date(2015, 6, 26).getTime(),
                timezone: -480
            },
            startDate: new Date(2015, 6, 21).getTime(),
            endDate: new Date(2020, 6, 27).getTime()
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
            startDate: new Date(2015, 5, 1).getTime()
        };

        $scope.rightLimitsCase = {
            model: {
                day: 26,
                dayOfWeek: 6,
                month: 6,
                year: 2015,
                datetime: new Date(2015, 6, 26).getTime(),
                timezone: -480
            },
            endDate: new Date(2015, 7, 31).getTime()
        };

        $scope.outOfRightLimitCase = {
            model: {
                day: 26,
                dayOfWeek: 6,
                month: 6,
                year: 2015,
                datetime: new Date(2015, 6, 26).getTime(),
                timezone: -480
            },
            endDate: new Date(2015, 6, 21).getTime()
        };

        $scope.outOfLeftLimitCase = {
            model: {
                day: 26,
                dayOfWeek: 6,
                month: 6,
                year: 2015,
                datetime: new Date(2015, 6, 26).getTime(),
                timezone: -480
            },
            startDate: new Date(2015, 6, 27).getTime()
        };

        $scope.emptyModelCase = {
            model: null
        };

        $scope.emptyModelLeftLimitCase = {
            model: null,
            startDate: new Date(2015, 6, 26).getTime()
        };

        $scope.emptyModelRightLimitCase = {
            model: null,
            endDate: new Date(2015, 6, 26).getTime()
        };

        $scope.invalidLeftLimitCase = {
            model: {
                day: 26,
                dayOfWeek: 6,
                month: 6,
                year: 2015,
                datetime: new Date(2015, 6, 26).getTime(),
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
                datetime: new Date(2015, 6, 26).getTime(),
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
                datetime: new Date(2015, 6, 26).getTime(),
                timezone: -480
            }
        };

        $scope.linkedModelBothLimitsCase = {
            model: {
                day: 26,
                dayOfWeek: 6,
                month: 6,
                year: 2015,
                datetime: new Date(2015, 6, 26).getTime(),
                timezone: -480
            },
            startDate: new Date(2015, 6, 25).getTime(),
            endDate: new Date(2015, 6, 27).getTime()
        };

        $scope.linkedModelBothDifferentLimitsCase = {
            model: {
                day: 26,
                dayOfWeek: 6,
                month: 6,
                year: 2015,
                datetime: new Date(2015, 6, 26).getTime(),
                timezone: -480
            },
            startDate_one: new Date(2015, 5, 1).getTime(),
            endDate_one: new Date(2015, 7, 31).getTime(),
            startDate_two: new Date(2015, 6, 20).getTime(),
            endDate_two: new Date(2015, 8, 31).getTime()
        };

        $scope.externalChangeCase = {
            model: {
                day: 26,
                dayOfWeek: 6,
                month: 6,
                year: 2015,
                datetime: new Date(2015, 6, 26).getTime(),
                timezone: -480
            }
        };

        $scope.externalChangeLeftLimitCase = {
            model: {
                day: 26,
                dayOfWeek: 6,
                month: 6,
                year: 2015,
                datetime: new Date(2015, 6, 26).getTime(),
                timezone: -480
            },
            startDate: new Date(2015, 6, 25).getTime()
        };

        $scope.externalChangeRightLimitCase = {
            model: {
                day: 26,
                dayOfWeek: 6,
                month: 6,
                year: 2015,
                datetime: new Date(2015, 6, 26).getTime(),
                timezone: -480
            },
            endDate: new Date(2015, 6, 27).getTime()
        };
    })
;
