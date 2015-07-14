'use strict';

angular.module('app', [
    //pages
    'app.pages.landing',
    'app.pages.basic_example',
    'app.pages.limits_example',
    'app.pages.localization_example',
    'app.pages.styling_example',

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
    'ui.bootstrap',
    'hljs'
])

    .config(['$urlRouterProvider', 'hljsServiceProvider', function ($urlRouterProvider, hljsServiceProvider) {
        $urlRouterProvider.otherwise('/landing');

        hljsServiceProvider.setOptions({
            // replace tab with 4 spaces
            tabReplace: '    '
        });
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

        $scope.commonExampleTemplate =
            '<form id="demo_simple_form" name="demo_simple_form">' +
            '\n    <div class="form-group">' +
            '\n        <label for="apd_1" class="control-label">Date</label>' +
            '\n        <pure-datepicker id="apd_1" ng-model="basicExample.model"></pure-datepicker>' +
            '\n    </div>' +
            '\n</form>';

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

angular.module('app.pages.localization_example', [
    'ui.router'
])

    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider

            .state('localization_example', {
                url: '/localization_example',
                templateUrl: 'localization_example/localization_example.html',
                controller: 'LocalizationExamplePageCtrl'
            })
        ;
    }])

    .controller('LocalizationExamplePageCtrl', ['$scope', function ($scope) {

    }]);
'use strict';

angular.module('app.pages.styling_example', [
    'ui.router'
])

    .config(['$stateProvider', function ($stateProvider) {

        $stateProvider

            .state('styling_example', {
                url: '/styling_example',
                templateUrl: 'styling_example/styling_example.html',
                controller: 'StylingExamplePageCtrl'
            })
        ;
    }])

    .controller('StylingExamplePageCtrl', ['$scope', function ($scope) {

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
angular.module("app.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("basic_example/basic_example.html","<main-header></main-header><sidebar></sidebar><div class=\"page basic_page\"><div class=\"container with_sidebar\"><section><h3>Angular Pure Datepicker</h3><form id=demo_simple_form name=demo_simple_form><div class=form-group><label for=apd_1 class=control-label>Date</label><pure-datepicker id=apd_1 ng-model=basicExample.model></pure-datepicker></div></form><model-well case-model=basicExample></model-well></section><div><div class=pitch>is kind of old-school date select, but with modern look and feel and abilities.</div><div class=settings><h4>Settings</h4><ul><li><code>ng-model</code>&nbsp; - &nbsp;<code>Object</code>, can be &nbsp;<code>empty</code>&nbsp; or &nbsp;<code>null</code>, but &nbsp;<code>required</code>.<br>The result of select would placed here. Also if &nbsp;<code>ng-model</code>&nbsp; is object with &nbsp;<code>datetime</code>&nbsp; field (should contain number), it\'s will be applied as initial date value.</li><li><code>apd-start</code>&nbsp; - &nbsp;<code>number</code>, &nbsp;<code>optional</code>.<br>Datetime of a lower date limit (model\'s values lower then limit wouldn\'t be applied).</li><li><code>apd-end</code>&nbsp; -<code>number</code>, &nbsp;<code>optional</code>.<br>Datetime of a upper date limit (model\'s values upper then limit wouldn\'t be applied).</li><li><code>apd-day-id</code>&nbsp; - &nbsp;<code>string</code>, &nbsp;<code>optional</code>.<br>Setter of custom id for the days select element.</li><li><code>apd-month-id</code>&nbsp; - &nbsp;<code>string</code>, &nbsp;<code>optional</code>.<br>Setter of custom id for the month select element.</li><li><code>apd-year-id</code>&nbsp; - &nbsp;<code>string</code>, &nbsp;<code>optional</code>.<br>Setter of custom id for the years select element.</li><li><code>apd-day-classes</code>&nbsp; - &nbsp;<code>string</code>, &nbsp;<code>optional</code>.<br>Setter of custom classes for the days select element.</li><li><code>apd-month-classes</code>&nbsp; - &nbsp;<code>string</code>, &nbsp;<code>optional</code>.<br>Setter of custom classes for the month select element.</li><li><code>apd-year-classes</code>&nbsp; - &nbsp;<code>string</code>, &nbsp;<code>optional</code>.<br>Setter of custom classes for the years select element.</li></ul></div></div><div hljs=hljs source=commonExampleTemplate language=html></div></div></div>");
$templateCache.put("landing/landing.html","<main-header></main-header><div class=\"page landing_page\"><div class=container>asd</div></div>");
$templateCache.put("limits_example/limits_example.html","<div>zxc</div>");
$templateCache.put("localization_example/localization_example.html","<main-header></main-header><sidebar></sidebar><div class=\"page localization_page\"><div class=\"container with_sidebar\"><ol><li><section><hgroup><h3>Common case</h3></hgroup><div class=case_description><ul><li>Valid ngModel</li></ul></div><form id=demo_simple_form name=demo_simple_form><div class=form-group><label for=apd_1 class=control-label>Date</label><pure-datepicker id=apd_1 ng-model=commonCase.model></pure-datepicker></div></form><model-well case-model=commonCase></model-well></section></li></ol></div></div>");
$templateCache.put("styling_example/styling_example.html","<main-header></main-header><sidebar></sidebar><div class=\"page styling_page\"><div class=\"container with_sidebar\"><ol><li><section><hgroup><h3>Common case</h3></hgroup><div class=case_description><ul><li>Valid ngModel</li></ul></div><form id=demo_simple_form name=demo_simple_form><div class=form-group><label for=apd_1 class=control-label>Date</label><pure-datepicker id=apd_1 ng-model=commonCase.model></pure-datepicker></div></form><model-well case-model=commonCase></model-well></section></li></ol></div></div>");
$templateCache.put("header/header.html","<div class=\"navbar navbar-inverse navbar-fixed-top pages_header\"><div class=navbar-inner><div class=container><button type=button ng-click=\"isNavbarCollapsed = !isNavbarCollapsed\" class=navbar-toggle><span class=icon-bar></span><span class=icon-bar></span><span class=icon-bar></span></button><div collapse=isNavbarCollapsed class=navbar-collapse><nav class=hidden-xs><div class=navbar-header><ul class=\"nav navbar-nav\"><li><a ui-sref=landing title=APD class=navbar-brand>APD</a></li></ul></div></nav><ul class=\"nav navbar-nav\"><li ng-class=\"{active: $state.includes(\'landing\')}\"><a href=\"\" ui-sref=landing ui-sref-opts=\"{reload: true}\" class=\"btn btn-link\">Landing</a></li><li ng-class=\"{active: $state.includes(\'basic_example\')}\"><a href=\"\" ui-sref=basic_example ui-sref-opts=\"{reload: true}\" class=\"btn btn-link\">Examples</a></li><li ng-class=\"{active: $state.includes(\'docs\')}\"><a href=\"\" ui-sref=docs ui-sref-opts=\"{reload: true}\" class=\"btn btn-link\">Docs</a></li></ul><ul class=\"nav navbar-nav navbar-right\"><li><a href=https://github.com/se-panfilov/angular-pure-datepicker class=\"btn btn-link\">GitHub</a></li></ul></div></div></div></div>");
$templateCache.put("sidebar/sidebar.html","<ul class=\"nav nav-sidebar\"><li><a ui-sref=basic_example>Basic Example</a><a ui-sref=limits_example>Limits Example</a><a ui-sref=localization>Localization</a><a ui-sref=stying>Styling</a></li></ul>");
$templateCache.put("well_directive/well_directive.html","<section class=well><div><span>Day:</span>&nbsp;<span ng-bind=caseModel.model.day></span></div><div><span>Month:</span>&nbsp;<span ng-bind=caseModel.model.month></span>&nbsp; (+1)</div><div><span>Year:</span>&nbsp;<span ng-bind=caseModel.model.year></span></div><div><span>Datetime:</span>&nbsp;<span ng-bind=caseModel.model.datetime></span>&nbsp;<span ng-bind=getDate(caseModel.model.datetime)></span></div><div><span>Timezone:</span>&nbsp;<span ng-bind=caseModel.model.timezone></span></div><div><span>Start limit:</span>&nbsp;<span ng-bind=caseModel.startDate></span>&nbsp;<span ng-bind=getDate(caseModel.startDate)></span></div><div><span>End limit:</span>&nbsp;<span ng-bind=caseModel.endDate></span>&nbsp;<span ng-bind=getDate(caseModel.endDate)></span></div><div class=btn-group><button type=button ng-click=plusOneMonth() class=\"btn btn-primary\">+1 month</button><button type=button ng-click=minusOneMonth() class=\"btn btn-primary\">-1 month</button></div></section>");}]);