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

    .config(function ($urlRouterProvider) {
        $urlRouterProvider.otherwise('/landing');
    })
;
