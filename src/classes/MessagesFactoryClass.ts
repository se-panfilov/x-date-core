module apd.Model {
    'use strict';

    export class MessagesFactoryClass {
        private messages = {
            wrongClassCreation: 'Class created without \'new\', wrong \'this\'',
            wrongInstance: 'Wrong \'this\' instance',
            invalidParams: 'Invalid params',
            invalidDateModel: 'Invalid date model',
            datesInverted: 'Warning! Start date > End date'
        };

        static throwDeveloperError = (message:string) => {
            console.error(message);
        };

        static throwModelValidationMessage = function (field:string) {
            if (!(this instanceof MessagesFactoryClass)) {
                console.error('Wrong \'this\' instance');
                return false;
            }

            this.throwDeveloperError(this.messages.invalidDateModel + ': error on field \"' + field + '+\"');
        };

        static throwInvalidParamsMessage = function () {
            if (!(this instanceof MessagesFactoryClass)) {
                console.error('Wrong \'this\' instance');
                return false;
            }

            this.throwDeveloperError(this.messages.invalidParams);
        };

        static throwWrongClassCreationMessage = function () {
            if (!(this instanceof MessagesFactoryClass)) {
                console.error('Wrong \'this\' instance');
                return false;
            }

            this.throwDeveloperError(this.messages.wrongClassCreation);
        };

        static throwWrongInstanceMessage = function () {
            if (!(this instanceof MessagesFactoryClass)) {
                console.error('Wrong \'this\' instance');
                return false;
            }

            this.throwDeveloperError(this.messages.wrongInstance);
        };

        static throwDatesInvertedMessage = function () {
            if (!(this instanceof MessagesFactoryClass)) {
                console.error('Wrong \'this\' instance');
                return false;
            }

            this.throwDeveloperError(this.messages.datesInverted);
        };
    }
}