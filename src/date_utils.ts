module apd.dateUtils {
    'use strict';

    angular.module('angular-pd.date_utils', [])

        .factory('DateUtilsFactory', function () {

            var exports = {
                getData: function (selected:DateModelClass, startDateTime:number, endDateTime:number) {
                    return new DataClass(selected, startDateTime, endDateTime);
                },
                validateModel: function (model:DateModelClass) {
                    return !!(model && model.datetime);
                }
            };

            return exports;

        }
    )
    ;

}