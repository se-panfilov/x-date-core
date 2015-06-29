//module apd.main {
//    'use strict';

declare
var angular:any;

angular.module('angular-pd', [
    'angular-pd.datepicker',
    'angular-pd.date_utils'
])

    .constant('MESSAGES', {
        invalidParams: 'Invalid params'
    });

//}