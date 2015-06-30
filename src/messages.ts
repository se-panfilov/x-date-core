module apd.messages {
    'use strict';

    class MessagesFactoryClass {
        messages:Object = {
            invalidParams: 'Invalid params',
            invalidDateModel: 'Invalid date model'
        };

        static throwDeveloperError = (message:string) => {
            console.error(message);
        };

        static throwModelValidationMessage = function (field:string) => {
            this.throwDeveloperError(this.messages.invalidDateModel + ': error on field \"' + field + "+\"");
        };

        static throwInvalidParamsMessage = function ()  => {
            this.throwDeveloperError(this.messages.invalidParams);
        }
    }

    angular.module('angular-pd.messages', [])

        .factory('MessagesFactory', function () {
            return new MessagesFactoryClass();
        }
    )
    ;

}