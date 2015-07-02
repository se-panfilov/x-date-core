/// <reference path="messages.ts" />

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

    class DateModelValidatorClass {
        day:DateModelFieldClass;
        dayOfWeek:DateModelFieldClass;
        month:DateModelFieldClass;
        year:DateModelFieldClass;
        datetime:DateModelFieldClass;
        timezone:DateModelFieldClass;

        constructor(config:DateModelValidatorConfigClass) {
            this.day = new DateModelFieldClass(config.day.name, config.day.isZeroAllowed, config.day.isRequired);
            this.dayOfWeek = new DateModelFieldClass(config.dayOfWeek.name, config.dayOfWeek.isZeroAllowed, config.dayOfWeek.isRequired);
            this.month = new DateModelFieldClass(config.month.name, config.month.isZeroAllowed, config.month.isRequired);
            this.year = new DateModelFieldClass(config.year.name, config.year.isZeroAllowed, config.year.isRequired);
            this.datetime = new DateModelFieldClass(config.datetime.name, config.datetime.isZeroAllowed, config.datetime.isRequired);
            this.timezone = new DateModelFieldClass(config.timezone.name, config.timezone.isZeroAllowed, config.timezone.isRequired);
        }

        isFieldExist = (model:DateModelClass, fieldName:string) => {
            var validator = this;

            var isZero = (model[fieldName] === 0);
            var isZeroAllowed = validator[fieldName].isZeroAllowed;

            if (isZero && !isZeroAllowed) {
                return false;
            }

            if (!model[fieldName]) {
                return false;
            }

            return true;
        };

        isValid = (model:DateModelClass) => {
            var validator = this;
            for (var fieldName in validator) {
                if (validator.hasOwnProperty(fieldName)) {
                    if (validator[fieldName].isRequired) {
                        var isFieldValid = validator.isFieldExist(model, fieldName);
                        if (!isFieldValid) {
                            return false;
                        }
                    }
                }
            }
        };
    }

    class DateModelValidatorConfigClass {
        day:DateModelFieldClass;
        dayOfWeek:DateModelFieldClass;
        month:DateModelFieldClass;
        year:DateModelFieldClass;
        datetime:DateModelFieldClass;
        timezone:DateModelFieldClass;

        //TODO (S.Panfilov) any?
        constructor(object:any) {
            this.day = object.day;
            this.dayOfWeek = object.dayOfWeek;
            this.month = object.month;
            this.year = object.year;
            this.datetime = object.datetime;
            this.timezone = object.timezone;
        }
    }

    class DataClass {
        selected:DateModelClass;
        days:Array<number>;
        month:Array<number>;
        years:Array<number>;

        constructor(selected:DateModelClass, startDateTime:number, endDateTime:number) {
            this.selected = selected;
            this.days = <Array<number>> this.getDaysNumberArr(this.selected.month, this.selected.year);
            this.month = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
            this.years = this.getYearsList(startDateTime, endDateTime);
        }

        private getYearsList = function (startDateTime:number, endDateTime:number) {
            var result:Array<number> = [];
            //TODO (S.Panfilov)


            return result;
        };

        private _getIntArr = function (length:number) {
            if (!length && length !== 0) {
                //apd.messages.MessagesFactoryClass.throwInvalidParamsMessage();
                return false;
            }

            return length ? this._getIntArr(length - 1).concat(length) : [];
        };

        getDaysNumberArr = (month:number, year:number) => {
            if ((!month && month !== 0) || !year) {
                //apd.messages.MessagesFactoryClass.throwInvalidParamsMessage();
                return false;
            }
            return this._getIntArr(this.getDaysInMonth(month, year));
        };

        getDaysInMonth = (month:number, year:number) => {
            return new Date(year, month + 1, 0).getDate();
        };

    }

    class DateModelFieldClass {
        name:string;
        isZeroAllowed:boolean;
        isRequired:boolean;

        constructor(name:string, allowZero:boolean, isRequired:boolean) {
            this.name = name;
            this.isZeroAllowed = allowZero;
            this.isRequired = isRequired;
        }
    }

    angular.module('angular-pd.date_utils', [])

        .factory('DateUtilsFactory', function (MessagesFactory) {

            var dateModelValidatorConfig = new DateModelValidatorConfigClass({
                day: {name: 'day', isZeroAllowed: false, isRequired: false},
                dayOfWeek: {name: 'day', isZeroAllowed: false, isRequired: false},
                month: {name: 'day', isZeroAllowed: true, isRequired: false},
                year: {name: 'day', isZeroAllowed: false, isRequired: false},
                datetime: {name: 'day', isZeroAllowed: true, isRequired: true},
                timezone: {name: 'day', isZeroAllowed: true, isRequired: false}
            });

            var dateModelValidator = new DateModelValidatorClass(dateModelValidatorConfig);

            function preserveModelValues(model:Object) {
                for (var value in model) {
                    if (model.hasOwnProperty(value)) {
                        model[value] = +model[value]
                    }
                }

                return <DateModelClass>model;
            }

            var exports = {
                createData: function (selected:DateModelClass, startDateTime:number, endDateTime:number) {
                    return new DataClass(selected, startDateTime, endDateTime);
                },
                validateModel: function (model:DateModelClass) {
                    return dateModelValidator.isValid(model);
                },
                getInitDate: function (model) {
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
                }
            };

            return exports;

        }
    )
    ;

}