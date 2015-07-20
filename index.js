'use strict';

angular.module('demo', [
    'angular-pd'
])

    .directive('modelWell', function ($filter) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                caseModel: '='
            },
            template: '<section class=well>' +
            '<div><span>Day:</span>&nbsp;<span ng-bind=caseModel.model.day></span></div>' +
            '<div><span>Month:</span>&nbsp;<span ng-bind=caseModel.model.month></span>&nbsp;<span>(+1)</span></div>' +
            '<div><span>Year:</span>&nbsp;<span ng-bind=caseModel.model.year></span></div>' +
            '<div><span>Datetime:</span>&nbsp;<span ng-bind=caseModel.model.datetime></span>&nbsp;<span>({{getDate(caseModel.model.datetime)}})</span></div>' +
            '<div><span>Timezone:</span>&nbsp;<span ng-bind=caseModel.model.timezone></span></div>' +
            '<div><span>Start limit:</span>&nbsp;<span ng-bind=caseModel.startDate></span>&nbsp;<span>({{getDate(caseModel.startDate)}})</span></div>' +
            '<div><span>End limit:</span>&nbsp;<span ng-bind=caseModel.endDate></span>&nbsp;<span>({{getDate(caseModel.endDate)}})</span></div>' +
            '<div><button type="button" ng-click="plusOneMonth()">+1 month</button></div>' +
            '<div><button type="button" ng-click="minusOneMonth()">-1 month</button></div>' +
            '</section>',
            link: function (scope) {
                scope.getDate = function (datetime) {
                    if (!datetime) return ' none ';

                    return $filter('date')(new Date(datetime), 'dd-MM-yyyy');
                };

                scope.plusOneMonth = function () {
                    var date = new Date(scope.caseModel.model.datetime);
                    if (date.getMonth() === 11) {
                        date.setMonth(0);
                        date.setFullYear(date.getFullYear() + 1)
                    } else {
                        date.setMonth(date.getMonth() + 1);
                    }

                    scope.caseModel.model.datetime = date.getTime();
                };

                scope.minusOneMonth = function () {
                    var date = new Date(scope.caseModel.model.datetime);
                    if (date.getMonth() === 0) {
                        date.setMonth(11);
                        date.setFullYear(date.getFullYear() - 1)
                    } else {
                        date.setMonth(date.getMonth() - 1);
                    }

                    scope.caseModel.model.datetime = date.getTime();
                };
            }
        };
    })

    .controller('DemoPageCtrl', function ($scope) {

        $scope.localizedDays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

        $scope.commonCase = {
            model: {
                datetime: new Date(2015, 6, 26).getTime()
            }
        };

        $scope.limitsCase = {
            model: {
                datetime: new Date(2015, 6, 26).getTime()
            },
            startDate: new Date(2015, 6, 21).getTime(),
            endDate: new Date(2020, 6, 27).getTime()
        };

        $scope.leftLimitsCase = {
            model: {
                datetime: new Date(2015, 6, 26).getTime()
            },
            startDate: new Date(2012, 4, 3).getTime()
        };

        $scope.rightLimitsCase = {
            model: {
                datetime: new Date(2015, 6, 26).getTime()
            },
            endDate: new Date(2015, 7, 31).getTime()
        };

        $scope.outOfRightLimitCase = {
            model: {
                datetime: new Date(2015, 6, 26).getTime()
            },
            endDate: new Date(2015, 6, 21).getTime()
        };

        $scope.outOfLeftLimitCase = {
            model: {
                datetime: new Date(2015, 6, 26).getTime()
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
                datetime: new Date(2015, 6, 26).getTime()
            },
            startDate: 'invalid'
        };

        $scope.invalidRightLimitCase = {
            model: {
                datetime: new Date(2015, 6, 26).getTime()
            },
            endDate: Infinity
        };

        $scope.linkedModelCase = {
            model: {
                datetime: new Date(2015, 6, 26).getTime()
            }
        };

        $scope.linkedModelBothLimitsCase = {
            model: {
                datetime: new Date(2015, 6, 26).getTime()
            },
            startDate: new Date(2015, 6, 25).getTime(),
            endDate: new Date(2015, 6, 27).getTime()
        };

        $scope.linkedModelBothDifferentLimitsCase = {
            model: {
                datetime: new Date(2015, 6, 26).getTime()
            },
            startDate_one: new Date(2015, 5, 1).getTime(),
            endDate_one: new Date(2015, 7, 31).getTime(),
            startDate_two: new Date(2015, 6, 20).getTime(),
            endDate_two: new Date(2015, 8, 31).getTime()
        };

        $scope.externalChangeCase = {
            model: {
                datetime: new Date(2015, 6, 26).getTime()
            }
        };

        $scope.externalChangeLeftLimitCase = {
            model: {
                datetime: new Date(2015, 6, 26).getTime()
            },
            startDate: new Date(2013, 6, 25).getTime()
        };

        $scope.externalChangeRightLimitCase = {
            model: {
                datetime: new Date(2015, 6, 26).getTime()
            },
            endDate: new Date(2018, 6, 27).getTime()
        };

        $scope.externalChangeBothLimitCase = {
            model: {
                datetime: new Date(2015, 6, 26).getTime()
            },
            startDate: new Date(2013, 6, 25).getTime(),
            endDate: new Date(2018, 6, 27).getTime()
        };
    })
;
