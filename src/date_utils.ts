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

        constructor(datetime:number) {
            var date = new Date();

            this.day = date.getDate();
            this.dayOfWeek = date.getDay();
            this.month = date.getMonth();
            this.year = date.getFullYear();
            this.datetime = datetime;
            this.timezone = date.getTimezoneOffset();
        }

    }

    class DataClass {
        selected:DateModelClass;
        days:Array<number>;
        month:Array<number>;
        years:Array<number>;

        constructor(selected:DateModelClass, startDateTime:number, endDateTime:number) {
            var self = this;
            self.selected = selected;
            self.days = self._getNumList(startDateTime, endDateTime, self._getDaysCount, function () {
                var daysCount = self._getDaysCount(new Date());
                return self._getIntArr(daysCount);
            });
            self.month = self._getNumList(startDateTime, endDateTime, self._getMonth, function () {
                return self._getArrayOfNumbers(0, 11);
            });
            self.years = self._getNumList(startDateTime, endDateTime, self._getFullYear, function () {
                return [new Date().getFullYear()];
            });
        }

        private _getArrayOfNumbers = function (start:number, end:number) {
            var result:Array<number> = [];

            for (var i = start; i <= end; i++) {
                result.push(i);
            }

            return result;
        };

        private _getFullYear = function (date:Date) {
            return date.getFullYear();
        };

        private _getMonth = function (date:Date) {
            return date.getMonth();
        };

        private _getDaysCount = function (date:Date) {
            return date.getDate();
        };

        //TODO (S.Panfilov) not any, but functions types
        private _getNumList = function (startDateTime:number, endDateTime:number, timeFunc:any, callback:any) {
            var result:Array<number> = [];

            var start:number;
            var end:number;

            //start = 2011, end = 2014
            if ((startDateTime && endDateTime) && (startDateTime < endDateTime)) {
                start = timeFunc(new Date(startDateTime));
                end = timeFunc(new Date(endDateTime));
                result = this._getArrayOfNumbers(start, end);
            }

            //start = 2014, end = 2011
            else if ((startDateTime && endDateTime) && (startDateTime > endDateTime)) {
                start = timeFunc(new Date(endDateTime));
                end = timeFunc(new Date(startDateTime));
                //TODO (S.Panfilov) throw warning here, that dates inverted
                //apd.messages.MessagesFactoryClass.throwMessage('asdsadasd');

                result = this._getArrayOfNumbers(start, end);
            }

            //start = 2011, end = 2011
            else if ((startDateTime && endDateTime) && (startDateTime === endDateTime)) {
                start = timeFunc(new Date(startDateTime));
                result = this._getArrayOfNumbers(start, start);
            }

            //start = 2014, end = null
            else if (startDateTime && !endDateTime) {
                start = timeFunc(new Date(startDateTime));
                result = this._getArrayOfNumbers(start, start);
            }

            //start = null, end = 2014
            else if (!startDateTime && endDateTime) {
                end = timeFunc(new Date(endDateTime));
                result = this._getArrayOfNumbers(end, end);
            }

            //start = null, end = null
            else if (!startDateTime && !endDateTime) {
                if (callback) return callback(timeFunc);
            }

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

    angular.module('angular-pd.date_utils', [])

        .factory('DateUtilsFactory', function () {

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
                    return (model && model.datetime);
                },
                getInitDate: function (model) {
                    var isValidModel = exports.validateModel(model);

                    if (isValidModel) {
                        return new DateModelClass(model.datetime);
                    } else {
                        return new DateModelClass(new Date().getTime());
                    }
                }
            };

            return exports;

        }
    )
    ;

}