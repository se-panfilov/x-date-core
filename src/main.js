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

    .config(function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/basic_example');
    })
;
