module apd.dateUtils {
    'use strict';

    class DateModelClass {
        day:number;
        dayOfWeek:number;
        month:number;
        year:number;
        datetime:number;
        timezone:number;

        constructor(day:number, dayOfWeek:number, month:number, year:number, datetime:number, timezone:number) {
            this.day = day;
            this.dayOfWeek = dayOfWeek;
            this.month = month;
            this.year = year;
            this.datetime = datetime;
            this.timezone = timezone;
        }
    }

    class DataClass {
        selected:DateModelClass;
        days:Array<number>;
        month:Array<number>;
        years:Array<number>;

        constructor(selected:DateModelClass, days:Array<number>, years:Array<number>) {
            this.selected = selected;
            this.days = days;
            this.month = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
            this.years = years;
        }
    }

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

        .factory('DateUtilsFactory', function (MessgesFactory) {

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

            function preserveModelValues(model:Object) {
                for (var value in model) {
                    if (model.hasOwnProperty(value)) {
                        model[value] = +model[value]
                    }
                }

                return <DateModelClass>model;
            }

            function _getIntArr(length:number) {
                if (!length && length !== 0) {
                    MessgesFactory.throwInvalidParamsMessage();
                    return false;
                }

                return length ? _getIntArr(length - 1).concat(length) : [];
            }

            var exports = {
                createData: function (selected:DateModelClass, days:Array<number>, years:Array<number>) {
                    return new DataClass(selected, days, years);
                },
                validateModel: function (model:DateModelClass) {

                    //TODO (S.Panfilov) not all fields should be mandatory.
                    //TODO (S.Panfilov) we may need only day month and year
                    //TODO (S.Panfilov) or a dateTime

                    for (var i = 0; i < modelFields.mandatory.length; i++) {
                        var field:DateModelFieldClass = <DateModelFieldClass>modelFields.mandatory[i];
                        var isVald:boolean = _validateField(model, field.name, field.isZeroAllowed);

                        if (!isVald) {
                            MessgesFactory.throwModelValidationMessage(field.name);
                            return false;
                        }
                    }

                    return true;
                },
                getDaysCount: function (month:number, year:number) {
                    if ((!month && month !== 0) || !year) {
                        MessgesFactory.throwInvalidParamsMessage();
                        return false;
                    }
                    return _getIntArr(exports.getDaysInMonth(month, year));
                },
                getDaysInMonth: function (month:number, year:number) {
                    return new Date(year, month + 1, 0).getDate();
                },
                getDefaultSelectedDate: function (model) {
                    var isValidModel = exports.validateModel(model);

                    if (isValidModel) {
                        return preserveModelValues(model);
                    } else {
                        var date = new Date();
                        var day = date.getDate();
                        var month = date.getMonth();
                        var year = date.getFullYear();
                        var dateTime = date.getTime();
                        var dayOfWeek = date.getDay();
                        var timezone = date.getTimezoneOffset();

                        return new DateModelClass(day, dayOfWeek, month, year, dateTime, timezone);
                    }
                },
                getDefaultYearsList: function () {
                    //TODO (S.Panfilov) fix for case with date limits
                    return [
                        (new Date()).getFullYear() - 3,
                        (new Date()).getFullYear() - 2,
                        (new Date()).getFullYear() - 1,
                        (new Date()).getFullYear() //2015
                    ];
                }
            };

            return exports;

        }
    )
    ;

}