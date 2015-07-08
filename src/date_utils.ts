module apd.dateUtils {
    'use strict';

    angular.module('angular-pd.date_utils', [])

        .factory('DateUtilsFactory', function () {

            var exports = {
                getData: function (selected:apd.Model.DateModelClass, startDateTime:number, endDateTime:number) {
                    return new apd.Model.DataClass(selected, startDateTime, endDateTime);
                },
                validateModel: function (model:apd.Model.DateModelClass) {
                    return !!(model && model.datetime);
                }
            };

            return exports;

        }
    )
    ;

}