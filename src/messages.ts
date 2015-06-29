module apd.messages {
    'use strict';

    angular.module('angular-pd.messages', [])

        .factory('MessgesFactory', function () {

            var _messages = {
                invalidParams: 'Invalid params',
                invalidDateModel: 'Invalid date model'
            };


            var exports = {
                throwDeveloperError: function (message:string) {
                    console.error(message);
                },
                throwModelValidationMessage: function (field:string) {
                    exports.throwDeveloperError(_messages.invalidDateModel + ': error on field \"' + field + "+\"");
                },
                throwInvalidParamsMessage: function (field:string) {
                    exports.throwDeveloperError(_messages.invalidParams);
                }
            };

            return exports;

        }
    )
    ;

}