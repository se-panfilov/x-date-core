//module apd.main {
//    'use strict';

declare
var angular:any;

angular.module('angular-pd', ['angular-pd.datepicker'])

    .constant('MESSAGES', {
        invalidParams: 'Invalid params'
    });

//}