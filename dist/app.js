'use strict';

angular.module('app', [
    //pages
    'app.pages.landing',
    'app.pages.basic_example',
    'app.pages.limits_example',

    //partials
    'app.sidebar',

    //modules
    'app.templates',
    'app.well',

    //ANGULAR PURE DATEPICKER
    'angular-pd',

    //external libs
    'angular-loading-bar',
    'ngAnimate',
    'anim-in-out',
    'ui.router',
    'ui.bootstrap'
])

    .config(['$urlRouterProvider', function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/landing');
    }])
;

'use strict';

angular.module('app.well', [])
    .directive('modelWell', ['$filter', function ($filter) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                caseModel: '='
            },
            templateUrl: 'well_directive/well_directive.jade',
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
    }])

;
'use strict';

angular.module('app.pages.basic_example', [
    'ui.router'
])

    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider

            .state('basic_example', {
                url: '/basic_example',
                templateUrl: 'basic_example/basic_example.html',
                controller: 'BasicExamplePageCtrl'
            })
        ;
    }])

    .controller('BasicExamplePageCtrl', ['$scope', function ($scope) {

    }]);
'use strict';

angular.module('app.pages.landing', [
    'ui.router'
])

    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider

            .state('landing', {
                url: '/landing',
                templateUrl: 'landing/landing.html',
                controller: 'BasicExamplePageCtrl'
            })
        ;
    }])

    .controller('LandingPageCtrl', ['$scope', function ($scope) {

    }]);
'use strict';

angular.module('app.pages.limits_example', [
    'ui.router'
])

    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider

            .state('limits_example', {
                url: '/limits_example',
                templateUrl: 'limits_example/users.html',
                controller: 'LimitsExamplePageCtrl'
            })
        ;
    }])

    .controller('LimitsExamplePageCtrl', ['$scope', function ($scope) {

    }]);
'use strict';

angular.module('app.sidebar', [])

    .directive('sidebar', function () {
        return {
            restrict: 'E',
            scope: {},
            replace: true,
            templateUrl: 'sidebar/sidebar.html',
            controller: ['$scope', '$state', function ($scope, $state) {
                //
            }],
            link: function (scope) {
                //
            }
        };
    })
;
angular.module("app.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("basic_example/basic_example.html","<div>asd</div>");
$templateCache.put("landing/landing.html","<sidebar></sidebar><div class=landing_page>asd</div>");
$templateCache.put("limits_example/limits_example.html","<div>zxc</div>");
$templateCache.put("sidebar/sidebar.html","<ul class=\"nav nav-sidebar\"><li><a ui-sref=landing>Landing</a><a ui-sref=basic_example>Basic Example</a><a ui-sref=limits_example>Limits Example</a></li></ul>");
$templateCache.put("well_directive/well_directive.html","<section class=well></section><div><span>Day:</span>&nbsp;<span ng-bind=caseModel.model.day></span></div><div><span>Month:</span>&nbsp;<span ng-bind=caseModel.model.month></span>&nbsp; (+1)</div><div><span>Year:</span>&nbsp;<span ng-bind=caseModel.model.year></span></div><div><span>Datetime:</span>&nbsp;<span ng-bind=caseModel.model.datetime></span>&nbsp;<span ng-bind=getDate(caseModel.model.datetime)></span></div><div><span>Timezone:</span>&nbsp;<span ng-bind=caseModel.model.timezone></span></div><div><span>Start limit:</span>&nbsp;<span ng-bind=caseModel.startDate></span>&nbsp;<span ng-bind=getDate(caseModel.startDate)></span></div><div><span>End limit:</span>&nbsp;<span ng-bind=caseModel.endDate></span>&nbsp;<span ng-bind=getDate(caseModel.endDate)></span></div><div><div><button type=button ng-click=plusOneMonth()>+1 month</button></div><div><button type=button ng-click=minusOneMonth()>-1 month</button></div></div>");}]);