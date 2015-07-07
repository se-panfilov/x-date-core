module apd.messages {
    'use strict';

    export class MessagesFactoryClass {
        private messages = {
            wrongInstance: 'Class created without \'new\', wrong \'this\'',
            invalidParams: 'Invalid params',
            invalidDateModel: 'Invalid date model',
            datesInverted: 'Warning! Start date > End date'
        };

        static throwDeveloperError = (message:string) => {
            console.error(message);
        };

        static throwModelValidationMessage = function (field:string) {
            this.throwDeveloperError(this.messages.invalidDateModel + ': error on field \"' + field + '+\"');
        };

        static throwInvalidParamsMessage = function () {
            this.throwDeveloperError(this.messages.invalidParams);
        };

        static throwWrongInstanceMessage = function () {
            this.throwDeveloperError(this.messages.wrongInstance);
        };

        static throwDatesInvertedMessage = function () {
            this.throwDeveloperError(this.messages.datesInverted);
        };
    }

    angular.module('angular-pd.messages', [])

        .factory('MessagesFactory', function () {
            return new MessagesFactoryClass();
        }
    )
    ;

}