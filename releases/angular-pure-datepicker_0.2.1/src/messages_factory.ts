/// <reference path="classes/MessagesFactoryClass.ts" />

module apd.messages {
    'use strict';

    angular.module('angular-pd.messages', [])
        .factory('MessagesFactory', function () {
            return new apd.Model.MessagesFactoryClass();
        }
    )
    ;

}