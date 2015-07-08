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

        YEARS_LIST_DIRECTION = 'desc';
        MONTH_LIST_DIRECTION = 'asc';

        constructor(selected:DateModelClass, startDateTime:number, endDateTime:number) {
            if (!(this instanceof DataClass)) {
                apd.messages.MessagesFactoryClass.throwWrongInstanceMessage();
                return new DataClass(selected, startDateTime, endDateTime);
            }

            var self = this;
            self.selected = self._getSelected(selected, startDateTime, endDateTime);
            var selectedYear = new Date(this.selected.datetime).getFullYear();

            self._limitDates = new LimitDatesClass(startDateTime, endDateTime);
            self._startDateTime = startDateTime;
            self._endDateTime = endDateTime;
            self.years = self._getYearsList(startDateTime, endDateTime, self._limitDates, this.YEARS_LIST_DIRECTION);
            self.month = self._getMonthList(startDateTime, endDateTime, self._limitDates, selectedYear, this.MONTH_LIST_DIRECTION);

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

        //private _getDefaultDaysList = function (month:number, year:number):Array<number> {
        //    var daysCount = this.getDaysInMonth(month, year);
        //    return this._getIntArr(daysCount);
        //};

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
            this.years = this._getYearsList(this._startDateTime, this._endDateTime, this._limitDates, this.YEARS_LIST_DIRECTION);
        };

        private _getYearsList = function (startDateTime:number, endDateTime:number, limitDates:LimitDatesClass, direction:string) {
            var result:Array<number> = [];
            var DEFAULT_YEARS_COUNT = 20;

            var start = limitDates.startDate.year;
            var end = limitDates.endDate.year;
            var now = limitDates.nowDate.year;

            //start = 2011, end = 2014
            if ((startDateTime && endDateTime) && (startDateTime < endDateTime)) {
                result = this._getArrayOfNumbers(start, end);
            }

            //start = 2014, end = 2011
            else if ((startDateTime && endDateTime) && (startDateTime > endDateTime)) {
                apd.messages.MessagesFactoryClass.throwDatesInvertedMessage();
                result = this._getArrayOfNumbers(end, start);
            }

            //start = 2011, end = 2011
            else if ((startDateTime && endDateTime) && (startDateTime === endDateTime)) {
                result = this._getArrayOfNumbers(start, end);
            }

            //start = 2014, end = null
            else if (startDateTime && !endDateTime) {
                result = this._getArrayOfNumbers(start, now);
            }

            //start = null, end = 2014
            else if (!startDateTime && endDateTime) {
                result = this._getArrayOfNumbers(end, end);
            }

            //start = null, end = null
            else if (!startDateTime && !endDateTime) {
                result = this._getArrayOfNumbers(now - (DEFAULT_YEARS_COUNT - 1), now)
            }

            return this._intArraySort(result, direction);
        };

        reloadMonthList = function () {
            var selectedYear = new Date(this.selected.datetime).getFullYear();
            this.month = this._getMonthList(this._startDateTime, this._endDateTime, this._limitDates, selectedYear, this.MONTH_LIST_DIRECTION);
        };

        private _getMonthList = function (startDateTime:number, endDateTime:number, limitDates:LimitDatesClass, selectedYear:number, direction:string) {
            var result:Array<number>;
            var START_MONTH = 0;
            var END_MONTH = 11;

            //TODO (S.Panfilov)  check
            if (startDateTime && endDateTime) {
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
}