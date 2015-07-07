module apd.dateUtils {
    'use strict';

    export class DateModelClass {
        day:number;
        dayOfWeek:number;
        month:number;
        year:number;
        datetime:number;
        timezone:number;

        constructor(datetime:number) {
            if (!(this instanceof DateModelClass)) {
                apd.messages.MessagesFactoryClass.throwWrongInstanceMessage();
                return new DateModelClass(datetime);
            }

            var date = new Date(datetime);

            this.day = date.getDate();
            this.dayOfWeek = date.getDay();
            this.month = date.getMonth();
            this.year = date.getFullYear();
            this.datetime = datetime;
            this.timezone = date.getTimezoneOffset();

            return this;
        }

    }

    interface TimeFunction extends Function {
        (date:Date):number;
    }

    interface ArrayNumberFunction extends Function {
        ():Array<number>;
    }

    class DataClass {
        selected:DateModelClass;
        days:Array<number>;
        month:Array<number>;
        years:Array<number>;

        constructor(selected:DateModelClass, startDateTime:number, endDateTime:number) {
            if (!(this instanceof DataClass)) {
                apd.messages.MessagesFactoryClass.throwWrongInstanceMessage();
                return new DataClass(selected, startDateTime, endDateTime);
            }

            var self = this;

            //TODO (S.Panfilov) why I'm cannot pass self._getFullYear this without casting to TimeFunction?
            self.years = self._getNumList(startDateTime, endDateTime, <TimeFunction>self._getFullYear, self._getDefaultYearsList.bind(self));

            self.month = self._getNumList(startDateTime, endDateTime, <TimeFunction>self._getMonth, self._getDefaultMonthList.bind(self));

            self.selected = self._getSelected(selected, startDateTime, endDateTime);

            self.days = self._getNumList(startDateTime, endDateTime, <TimeFunction>self._getDay, <ArrayNumberFunction>function () {
                return self._getDefaultDaysList.call(self, self.selected.month, self.selected.year);
            });

            return this;
        }

        private _getSelected = function (selected:DateModelClass, startDateTime:number, endDateTime:number) {
            var result;

            var isBiggerThenStart = (selected.datetime > startDateTime);
            var isEqualToStart = (selected.datetime === startDateTime);
            var isLowerThenEnd = (selected.datetime > endDateTime);
            var isEqualToEnd = (selected.datetime === endDateTime);

            //start == 1; selected == 1 or 2 or 3; end == 3;
            if ((isBiggerThenStart || isEqualToStart) && (isLowerThenEnd || isEqualToEnd)) {
                result = new DateModelClass(selected.datetime);
            } else
            //start == 1; selected == 0
            if (!isBiggerThenStart) {
                result = new DateModelClass(startDateTime);
            }
            //selected == 4; end == 3;
            if (!isBiggerThenStart) {
                result = new DateModelClass(endDateTime);
            }
            //paranoid case
            else {
                result = new DateModelClass(new Date().getTime());
            }

            return result;
        };

        private _getDefaultDaysList = function (month:number, year:number):Array<number> {
            var daysCount = this.getDaysInMonth(month, year);
            return this._getIntArr(daysCount);
        };

        private _getDefaultMonthList = function () {
            return this._getArrayOfNumbers(0, 11);
        };

        private _getDefaultYearsList = function () {
            var yearsCount = 20;
            var curYear = new Date().getFullYear();
            var direction = 'desc';
            return this._intArraySort(this._getArrayOfNumbers(curYear - (yearsCount - 1), curYear), direction);
        };

        private _intArraySort = function (arr:Array<number>, direction:string = 'asc') {
            function desc(a, b) {
                return b - a;
            }

            //"string" == typeof direction && direction.toLowerCase();
            switch (direction) {
                default:
                    return arr.sort(function (a, b) {
                        return a - b;
                    });
                case "desc":
                    return arr.sort(desc);
            }
        };

        private _getArrayOfNumbers = function (start:number, end:number) {
            var result:Array<number> = [];

            for (var i = start; i <= end; i++) {
                result.push(i);
            }

            return result;
        };

        private _getFullYear = function (date:Date):number {
            return date.getFullYear();
        };

        private _getMonth = function (date:Date):number {
            return date.getMonth();
        };

        private _getDay = function (date:Date):number {
            return date.getDate();
        };

        private _getNumList = function (startDateTime:number, endDateTime:number, timeFunc:TimeFunction, callback?:ArrayNumberFunction) {
            var result:Array<number> = [];

            var now:number = timeFunc(new Date());
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
                apd.messages.MessagesFactoryClass.throwDatesInvertedMessage();

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
                result = this._getArrayOfNumbers(start, now);
            }

            //start = null, end = 2014
            else if (!startDateTime && endDateTime) {
                end = timeFunc(new Date(endDateTime));
                result = this._getArrayOfNumbers(end, end);
            }

            //start = null, end = null
            else if (!startDateTime && !endDateTime) {
                if (callback) return callback();
            }

            return result;
        };


        private _getIntArr = function (length:number) {
            if (!length && length !== 0) {
                apd.messages.MessagesFactoryClass.throwInvalidParamsMessage();
                return null;
            }

            return length ? this._getIntArr(length - 1).concat(length) : [];
        };

        getDaysInMonth = (month:number, year:number) => {
            return new Date(year, month + 1, 0).getDate();
        };

    }

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