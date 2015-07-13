angular.module("app.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("basic_example/basic_example.html","<div>asd</div>");
$templateCache.put("limits_example/limits_example.html","<div>zxc</div>");
$templateCache.put("menu/menu.html","");}]);
'use strict';

angular.module('app', [
    //pages
    'app.pages.basic_example',
    'app.pages.limits_example',

    //partials
    'app.menu',

    //external libs
    'angular-loading-bar',
    'ngAnimate',
    'anim-in-out',
    'ui.router',
    'ui.bootstrap'
])

    .config(['$urlRouterProvider', function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/basic_example');
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

angular.module('app.menu', [])

    .directive('mainMenu', function () {
        return {
            restrict: 'E',
            scope: {},
            replace: true,
            templateUrl: 'partials/menu/menu.html',
            controller: ['$scope', '$state', function ($scope, $state) {
                //
            }],
            link: function (scope) {
                //
            }
        };
    })
;