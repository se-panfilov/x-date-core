'use strict';

angular.module('app', [
    //pages
    'app.pages.landing',
    'app.pages.basic_example',
    'app.pages.limits_example',

    //partials
    'app.sidebar',
    'app.header',

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
            templateUrl: 'well_directive/well_directive.html',
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

angular.module('app.header', [])

    .directive('mainHeader', function () {
        return {
            restrict: 'E',
            scope: {},
            replace: true,
            templateUrl: 'header/header.html',
            controller: ['$scope', '$state', function ($scope, $state) {

                (function _init() {
                    $scope.$state = $state;
                    $scope.isNavbarCollapsed = true;
                })();
            }],
            link: function (scope) {
                //
            }
        };
    })
;
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
angular.module("app.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("basic_example/basic_example.html","<main-header></main-header><sidebar></sidebar><div class=\"page basic_page\"><div class=\"container with_sidebar\"><ol><li><section><hgroup><h3>Common case</h3></hgroup><div class=case_description><ul><li>Valid ngModel</li></ul></div><form id=demo_simple_form name=demo_simple_form><div class=form-group><label for=apd_1 class=control-label>Date</label><pure-datepicker id=apd_1 ng-model=commonCase.model></pure-datepicker></div></form><model-well case-model=commonCase></model-well></section></li></ol></div></div>");
$templateCache.put("landing/landing.html","<main-header></main-header><div class=\"page landing_page\"><div class=container>asd</div></div>");
$templateCache.put("limits_example/limits_example.html","<div>zxc</div>");
$templateCache.put("header/header.html","<div class=\"navbar navbar-inverse navbar-fixed-top pages_header\"><div class=navbar-inner><div class=container><button type=button ng-click=\"isNavbarCollapsed = !isNavbarCollapsed\" class=navbar-toggle><span class=icon-bar></span><span class=icon-bar></span><span class=icon-bar></span></button><div collapse=isNavbarCollapsed class=navbar-collapse><nav class=hidden-xs><div class=navbar-header><ul class=\"nav navbar-nav\"><li><a ui-sref=landing title=APD class=navbar-brand>APD</a></li></ul></div></nav><ul class=\"nav navbar-nav\"><li ng-class=\"{active: $state.includes(\'landing\')}\"><a href=\"\" ui-sref=landing ui-sref-opts=\"{reload: true}\" class=\"btn btn-link\">Landing</a></li><li ng-class=\"{active: $state.includes(\'basic_example\')}\"><a href=\"\" ui-sref=basic_example ui-sref-opts=\"{reload: true}\" class=\"btn btn-link\">Examples</a></li><li ng-class=\"{active: $state.includes(\'docs\')}\"><a href=\"\" ui-sref=docs ui-sref-opts=\"{reload: true}\" class=\"btn btn-link\">Docs</a></li></ul><ul class=\"nav navbar-nav navbar-right\"><li><a href=https://github.com/se-panfilov/angular-pure-datepicker class=\"btn btn-link\">GitHub</a></li></ul></div></div></div></div>");
$templateCache.put("sidebar/sidebar.html","<ul class=\"nav nav-sidebar\"><li><a ui-sref=basic_example>Basic Example</a><a ui-sref=limits_example>Limits Example</a></li></ul>");
$templateCache.put("well_directive/well_directive.html","<section class=well><div><span>Day:</span>&nbsp;<span ng-bind=caseModel.model.day></span></div><div><span>Month:</span>&nbsp;<span ng-bind=caseModel.model.month></span>&nbsp; (+1)</div><div><span>Year:</span>&nbsp;<span ng-bind=caseModel.model.year></span></div><div><span>Datetime:</span>&nbsp;<span ng-bind=caseModel.model.datetime></span>&nbsp;<span ng-bind=getDate(caseModel.model.datetime)></span></div><div><span>Timezone:</span>&nbsp;<span ng-bind=caseModel.model.timezone></span></div><div><span>Start limit:</span>&nbsp;<span ng-bind=caseModel.startDate></span>&nbsp;<span ng-bind=getDate(caseModel.startDate)></span></div><div><span>End limit:</span>&nbsp;<span ng-bind=caseModel.endDate></span>&nbsp;<span ng-bind=getDate(caseModel.endDate)></span></div><div><div><button type=button ng-click=plusOneMonth()>+1 month</button></div><div><button type=button ng-click=minusOneMonth()>-1 month</button></div></div></section>");}]);