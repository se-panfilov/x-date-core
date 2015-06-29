module apd.dateUtils {
    'use strict';

    declare
    var angular:any;

    class DateModelFieldClass {
        name:string;
        isZeroAllowed:boolean;

        constructor(name:string, allowZero:boolean) {
            this.name = name;
            this.isZeroAllowed = allowZero;
        }
    }

    class modelFieldsClass {
        mandatory:Array<Object>;
        common:Object;
    }

    angular.module('angular-pd.date_utils', [])

        .factory('DateUtils', function () {

            var modelFields:modelFieldsClass = {
                mandatory: [
                    {
                        day: new DateModelFieldClass('day', false),
                        month: new DateModelFieldClass('month', true),
                        year: new DateModelFieldClass('year', false)
                    },
                    {
                        timezone: new DateModelFieldClass('timezone', true)
                    }

                ],
                common: {
                    dayOfWeek: new DateModelFieldClass('dayOfWeek', true),
                    datetime: new DateModelFieldClass('datetime', true)
                }
            };


            function _validateField(model:DateModelClass, fieldName:string, isZeroAllowed:boolean) {
                var isZero = (model[fieldName] === 0);

                if (isZero && !isZeroAllowed) {
                    return false;
                }

                if (!model[fieldName]) {
                    return false;
                }

                return true;
            }


            var exports = {
                validateModel: function (model:DateModelClass) {

                    //TODO (S.Panfilov) not all fields should be mandatory.
                    //TODO (S.Panfilov) we may need only day month and year
                    //TODO (S.Panfilov) or a dateTime

                    for (var i = 0; i < modelFields.mandatory.length; i++) {
                        var field:DateModelFieldClass = <DateModelFieldClass>modelFields.mandatory[i];
                        var isVald:boolean = _validateField(model, field.name, field.isZeroAllowed);

                        if (!isVald) {
                            throwModelValidationMessage(field.name);
                            return false;
                        }
                    }

                    return true;
                }
            };

            return exports;

        }
    )
    ;

}