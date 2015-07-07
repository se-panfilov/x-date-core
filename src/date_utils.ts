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
            self.years = self._getYearsList(startDateTime, endDateTime);

            //self.month = self._getNumList(startDateTime, endDateTime, self._getDefaultMonthList.bind(self));

            self.selected = self._getSelected(selected, startDateTime, endDateTime);

            //self.days = self._getNumList(startDateTime, endDateTime, function () {
            //    return self._getDefaultDaysList.call(self, self.selected.month, self.selected.year);
            //});

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

        private _getYearsList = function (startDateTime:number, endDateTime:number) {
            var result:Array<number> = [];
            var nowDateTime:number = new Date().getTime();
            var DEFAULT_YEARS_COUNT = 20;
            var DIRECTION = 'desc';

            var startDate = {
                day: new Date(startDateTime).getDate(),
                month: new Date(startDateTime).getMonth(),
                year: new Date(startDateTime).getFullYear()
            };

            var endDate = {
                day: new Date(endDateTime).getDate(),
                month: new Date(endDateTime).getMonth(),
                year: new Date(endDateTime).getFullYear()
            };

            var nowDate = {
                day: new Date(nowDateTime).getDate(),
                month: new Date(nowDateTime).getMonth(),
                year: new Date(nowDateTime).getFullYear()
            };

            //start = 2011, end = 2014
            if ((startDateTime && endDateTime) && (startDateTime < endDateTime)) {
                result = this._getArrayOfNumbers(startDate.year, endDate.year);
            }

            //start = 2014, end = 2011
            else if ((startDateTime && endDateTime) && (startDateTime > endDateTime)) {
                apd.messages.MessagesFactoryClass.throwDatesInvertedMessage();
                result = this._getArrayOfNumbers(endDate.year, startDate.year);
            }

            //start = 2011, end = 2011
            else if ((startDateTime && endDateTime) && (startDateTime === endDateTime)) {
                result = this._getArrayOfNumbers(startDate.year, endDate.year);
            }

            //start = 2014, end = null
            else if (startDateTime && !endDateTime) {
                result = this._getArrayOfNumbers(startDate.year, nowDate.year);
            }

            //start = null, end = 2014
            else if (!startDateTime && endDateTime) {
                result = this._getArrayOfNumbers(endDate.year, endDate.year);
            }

            //start = null, end = null
            else if (!startDateTime && !endDateTime) {
                result =this._getArrayOfNumbers(nowDate.year - (DEFAULT_YEARS_COUNT - 1), nowDate.year)
            }

            return  this._intArraySort(result, DIRECTION);
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