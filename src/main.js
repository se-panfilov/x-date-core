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
    'app.plunker',

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

    .config(function ($urlRouterProvider, hljsServiceProvider) {
        $urlRouterProvider.otherwise('/landing');

        hljsServiceProvider.setOptions({
            // replace tab with 4 spaces
            tabReplace: '    '
        });
    })

;
