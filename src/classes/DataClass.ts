/// <reference path="DateModelClass.ts" />
/// <reference path="DateUtilsClass.ts" />
/// <reference path="LimitDatesClass.ts" />
/// <reference path="MessagesFactoryClass.ts" />

module apd.Model {
    'use strict';

    export class DataClass {

        selected:DateModelClass;
        days:Array<number>;
        month:Array<number>;
        years:Array<number>;
        _startDateTime:number;
        _endDateTime:number;
        _limitDates:LimitDatesClass;
        _isUTC:boolean;

        yearsListDirection = 'desc';
        monthListDirection = 'asc';
        daysListDirection = 'asc';

        constructor(selected:DateModelClass, startDateTime:number, endDateTime:number, isUTC:boolean, yearsListDirection?:string, monthListDirection?:string, daysListDirection?:string) {
            if (!(this instanceof DataClass)) {
                apd.Model.MessagesFactoryClass.throwWrongClassCreationMessage();
                return new DataClass(selected, startDateTime, endDateTime, isUTC, yearsListDirection, monthListDirection, daysListDirection);
            }

            var self = this;

            selected.datetime = self.isValidNumber(selected.datetime) ? selected.datetime : null;
            startDateTime = self.isValidNumber(startDateTime) ? startDateTime : null;
            endDateTime = self.isValidNumber(endDateTime) ? endDateTime : null;

            self._isUTC = isUTC;
            self.selected = self._getSelected(selected, startDateTime, endDateTime);
            var selectedYear = apd.Model.DateUtilsClass.getYear(this.selected.datetime, this._isUTC);
            var selectedMonth = apd.Model.DateUtilsClass.getMonth(this.selected.datetime, this._isUTC);

            self.yearsListDirection = yearsListDirection || self.yearsListDirection;
            self.monthListDirection = monthListDirection || self.monthListDirection;
            self.daysListDirection = daysListDirection || self.daysListDirection;

            self._limitDates = new LimitDatesClass(startDateTime, endDateTime, this._isUTC);
            self._startDateTime = startDateTime;
            self._endDateTime = endDateTime;
            self.years = self._getYearsList(startDateTime, endDateTime, self._limitDates, self.yearsListDirection);
            self.month = self._getMonthList(startDateTime, endDateTime, self._limitDates, selectedYear, self.monthListDirection);
            self.days = self._getDaysList(startDateTime, endDateTime, self._limitDates, selectedYear, selectedMonth, self.daysListDirection);

            return this;
        }

        private isValidNumber = function (num:number):boolean {
            var isNumber = !isNaN(num);
            var isNotInfinity = isFinite(num);
            return isNumber && isNotInfinity;
        };

        private _getSelected = function (selected:DateModelClass, startDateTime:number, endDateTime:number) {
            var result;

            var isBiggerThenStart = (selected.datetime > startDateTime);
            var isEqualToStart = (selected.datetime === startDateTime);
            var isLowerThenEnd = (selected.datetime > endDateTime);
            var isEqualToEnd = (selected.datetime === endDateTime);

            //start == 1; selected == 1 or 2 or 3; end == 3;
            if ((isBiggerThenStart || isEqualToStart) || (isLowerThenEnd || isEqualToEnd)) {
                result = new DateModelClass(selected.datetime, this._isUTC);
            } else
            //start == 1; selected == 0
            if (!isBiggerThenStart) {
                result = new DateModelClass(startDateTime, this._isUTC);
            } else
            //selected == 4; end == 3;
            if (!isBiggerThenStart) {
                result = new DateModelClass(endDateTime, this._isUTC);
            }
            //paranoid case
            else {
                result = new DateModelClass(new Date().getTime(), this._isUTC);
            }

            return result;
        };

        private _intArraySort = function (arr:Array<number>, direction:string = 'asc') {
            function desc(a, b) {
                return b - a;
            }

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

        reloadYearsList = function () {
            if (!(this instanceof DataClass)) {
                apd.Model.MessagesFactoryClass.throwWrongInstanceMessage();
                return null;
            }

            this.years = this._getYearsList(this._startDateTime, this._endDateTime, this._limitDates, this.yearsListDirection);
            return this;
        };

        private _getYearsList = function (startDateTime:number, endDateTime:number, limitDates:LimitDatesClass, direction:string) {
            if (!(this instanceof DataClass)) {
                apd.Model.MessagesFactoryClass.throwWrongInstanceMessage();
                return null;
            }

            var result:Array<number> = [];
            var DEFAULT_YEARS_COUNT = 10;

            var start = limitDates.startDate.year;
            var end = limitDates.endDate.year;
            var now = limitDates.nowDate.year;
            var selectedYear = apd.Model.DateUtilsClass.getYear(this.selected.datetime, this._isUTC);
            var latestPossibleYear = (selectedYear > now) ? selectedYear : now;
            var firstPossibleYear = (selectedYear < now) ? selectedYear : now;
            latestPossibleYear = latestPossibleYear + (DEFAULT_YEARS_COUNT - 1);
            firstPossibleYear = firstPossibleYear - (DEFAULT_YEARS_COUNT - 1);

            //start = 2011, end = 2014
            if ((startDateTime && endDateTime) && (startDateTime < endDateTime)) {
                result = this._getArrayOfNumbers(start, end);
            }

            //start = 2014, end = 2011
            else if ((startDateTime && endDateTime) && (startDateTime > endDateTime)) {
                apd.Model.MessagesFactoryClass.throwDatesInvertedMessage();
                result = this._getArrayOfNumbers(end, start);
            }

            //start = 2011, end = 2011
            else if ((startDateTime && endDateTime) && (startDateTime === endDateTime)) {
                result = this._getArrayOfNumbers(start, end);
            }

            //start = 2014, end = null
            else if (startDateTime && !endDateTime) {
                result = this._getArrayOfNumbers(start, latestPossibleYear);
            }

            //start = null, end = 2014
            else if (!startDateTime && endDateTime) {
                //now = 2013 (or 2014),  end = 2014
                if (limitDates.endDate.year >= limitDates.nowDate.year) {

                    if ((firstPossibleYear - DEFAULT_YEARS_COUNT) > (end - DEFAULT_YEARS_COUNT)) {
                        result = this._getArrayOfNumbers(firstPossibleYear, end);
                    } else {
                        result = this._getArrayOfNumbers(end - (DEFAULT_YEARS_COUNT - 1), end);
                    }

                }
                //now = 2015,  end = 2014
                else if (limitDates.endDate.year > limitDates.nowDate.year) {
                    result = this._getArrayOfNumbers(end - (DEFAULT_YEARS_COUNT - 1), end);
                }

            }

            //start = null, end = null
            else if (!startDateTime && !endDateTime) {
                result = this._getArrayOfNumbers(firstPossibleYear, latestPossibleYear);
            }

            return this._intArraySort(result, direction);
        };

        reloadMonthList = function () {
            if (!(this instanceof DataClass)) {
                apd.Model.MessagesFactoryClass.throwWrongInstanceMessage();
                return null;
            }

            var selectedYear = apd.Model.DateUtilsClass.getYear(this.selected.datetime, this._isUTC);
            this.month = this._getMonthList(this._startDateTime, this._endDateTime, this._limitDates, selectedYear, this.monthListDirection);
            return this;
        };

        private _getMonthList = function (startDateTime:number, endDateTime:number, limitDates:LimitDatesClass, selectedYear:number, direction:string) {
            if (!(this instanceof DataClass)) {
                apd.Model.MessagesFactoryClass.throwWrongInstanceMessage();
                return null;
            }

            var result:Array<number>;
            var START_MONTH = 0;
            var END_MONTH = 11;

            //TODO (S.Panfilov)  check
            if (startDateTime || endDateTime) {
                var isYearOfLowerLimit = (startDateTime) ? limitDates.startDate.year === selectedYear : false;
                var isYearOfUpperLimit = (endDateTime) ? limitDates.endDate.year === selectedYear : false;
                var start = (startDateTime) ? limitDates.startDate.month : START_MONTH;
                var end = (endDateTime) ? limitDates.endDate.month : END_MONTH;

                // startYear == 2015, nowYear == 2015, endYear == 2015
                if (isYearOfLowerLimit && isYearOfUpperLimit) {
                    result = this._getArrayOfNumbers(start, end);
                }
                // startYear == 2015, nowYear == 2015, endYear == 2016 (or null)
                else if (isYearOfLowerLimit && !isYearOfUpperLimit) {
                    result = this._getArrayOfNumbers(start, END_MONTH);
                }
                // startYear == 2014 (or null), nowYear == 2015, endYear == 2015
                else if (!isYearOfLowerLimit && isYearOfUpperLimit) {
                    result = this._getArrayOfNumbers(START_MONTH, end);
                }
                else {
                    // in all other cases return array of 12 month
                    result = this._getArrayOfNumbers(START_MONTH, END_MONTH);
                }
            } else {
                // in all other cases return array of 12 month
                result = this._getArrayOfNumbers(START_MONTH, END_MONTH);
            }

            return this._intArraySort(result, direction);
        };

        reloadDaysList = function () {
            if (!(this instanceof DataClass)) {
                apd.Model.MessagesFactoryClass.throwWrongInstanceMessage();
                return null;
            }

            var selectedYear = apd.Model.DateUtilsClass.getYear(this.selected.datetime, this._isUTC);
            var selectedMonth = apd.Model.DateUtilsClass.getMonth(this.selected.datetime, this._isUTC);
            this.days = this._getDaysList(this._startDateTime, this._endDateTime, this._limitDates, selectedYear, selectedMonth, this.daysListDirection);
            return this;
        };

        private _getDaysList = function (startDateTime:number, endDateTime:number, limitDates:LimitDatesClass, selectedYear:number, selectedMonth:number, direction:string) {
            if (!(this instanceof DataClass)) {
                apd.Model.MessagesFactoryClass.throwWrongInstanceMessage();
                return null;
            }

            var result:Array<number>;
            var START_DAY = 1;
            var lastDayInMonth = DataClass.getDaysInMonth(selectedMonth, selectedYear);

            //TODO (S.Panfilov)  check
            if (startDateTime || endDateTime) {
                var isYearOfLowerLimit = (startDateTime) ? limitDates.startDate.year === selectedYear : false;
                var isYearOfUpperLimit = (endDateTime) ? limitDates.endDate.year === selectedYear : false;
                var isMonthOfLowerLimit = (startDateTime) ? limitDates.startDate.month === selectedMonth : false;
                var isMonthOfUpperLimit = (endDateTime) ? limitDates.endDate.month === selectedMonth : false;

                var isLowerLimit = (isYearOfLowerLimit && isMonthOfLowerLimit);
                var isUpperLimit = (isYearOfUpperLimit && isMonthOfUpperLimit);

                var start = (startDateTime) ? limitDates.startDate.day : START_DAY;
                var end = (endDateTime) ? limitDates.endDate.day : lastDayInMonth;

                if (isLowerLimit && isUpperLimit) {
                    result = this._getArrayOfNumbers(start, end);
                } else if (isLowerLimit && !isUpperLimit) {
                    result = this._getArrayOfNumbers(start, lastDayInMonth);
                } else if (!isLowerLimit && isUpperLimit) {
                    result = this._getArrayOfNumbers(START_DAY, end);
                } else {
                    // in all other cases return array of 12 month
                    result = this._getArrayOfNumbers(START_DAY, lastDayInMonth);
                }
            } else {
                // in all other cases return array of 12 month
                result = this._getArrayOfNumbers(START_DAY, lastDayInMonth);
            }

            return this._intArraySort(result, direction);
        };

        private _getIntArr = function (length:number) {
            if (!(this instanceof DataClass)) {
                apd.Model.MessagesFactoryClass.throwWrongInstanceMessage();
                return null;
            }

            if (!length && length !== 0) {
                apd.Model.MessagesFactoryClass.throwInvalidParamsMessage();
                return null;
            }

            return length ? this._getIntArr(length - 1).concat(length) : [];
        };

        static getDaysInMonth = (month:number, year:number) => {
            return new Date(year, month + 1, 0).getDate();
        };

    }
}
