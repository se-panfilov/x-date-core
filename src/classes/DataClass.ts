var DataClass = (function (DateUtils) {

    function DataClass(selected, startDateTime, endDateTime) {
        selected.datetime = this.isValidNumber(selected.datetime) ? selected.datetime : null;
        startDateTime = this.isValidNumber(startDateTime) ? startDateTime : null;
        endDateTime = this.isValidNumber(endDateTime) ? endDateTime : null;

        this.selected = this._getSelected(selected, startDateTime, endDateTime);
        var selectedYear = DateUtils.getYear(this.selected.datetime);
        var selectedMonth = DateUtils.getMonth(this.selected.datetime);

        this._limitDates = new LimitDatesClass(startDateTime, endDateTime);
        this._startDateTime = startDateTime;
        this._endDateTime = endDateTime;
        this.years = this._getYearsList(startDateTime, endDateTime, this._limitDates);
        this.month = this._getMonthList(startDateTime, endDateTime, this._limitDates, selectedYear);
        this.days = this._getDaysList(startDateTime, endDateTime, this._limitDates, selectedYear, selectedMonth);

        return this;
    }

    isValidNumber = function (num:number):boolean {
        var isNumber = !isNaN(num);
        var isNotInfinity = isFinite(num);
        return isNumber && isNotInfinity;
    };

    _getSelected = function (selected:DateModelClass, startDateTime:number, endDateTime:number) {
        var result;

        var isBiggerThenStart = (selected.datetime > startDateTime);
        var isEqualToStart = (selected.datetime === startDateTime);
        var isLowerThenEnd = (selected.datetime > endDateTime);
        var isEqualToEnd = (selected.datetime === endDateTime);

        //start == 1; selected == 1 or 2 or 3; end == 3;
        if ((isBiggerThenStart || isEqualToStart) || (isLowerThenEnd || isEqualToEnd)) {
            result = new DateModelClass(selected.datetime);
        } else
        //start == 1; selected == 0
        if (!isBiggerThenStart) {
            result = new DateModelClass(startDateTime);
        } else
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

    _intArraySort = function (arr:Array<number>, direction:string = 'asc') {
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

    _getArrayOfNumbers = function (start:number, end:number) {
        var result:Array<number> = [];

        for (var i = start; i <= end; i++) {
            result.push(i);
        }

        return result;
    };

    reloadYearsList = function () {
        this.years = this._getYearsList(this._startDateTime, this._endDateTime, this._limitDates);
        return this;
    };

    _getYearsList = function (startDateTime:number, endDateTime:number, limitDates:LimitDatesClass) {
        var result:Array<number> = [];
        var DEFAULT_YEARS_COUNT = 10;

        var start = limitDates.startDate.year;
        var end = limitDates.endDate.year;
        var now = limitDates.nowDate.year;
        var selectedYear = apd.Model.DateUtils.getYear(this.selected.datetime);
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

        return this._intArraySort(result, Settings.yearsListDirection);
    };

    reloadMonthList = function () {
        var selectedYear = apd.Model.DateUtils.getYear(this.selected.datetime);
        this.month = this._getMonthList(this._startDateTime, this._endDateTime, this._limitDates, selectedYear);
        return this;
    };

    _getMonthList = function (startDateTime:number, endDateTime:number, limitDates:LimitDatesClass, selectedYear:number) {
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

        return this._intArraySort(result, Settings.monthListDirection);
    };

    reloadDaysList = function () {
        var selectedYear = apd.Model.DateUtils.getYear(this.selected.datetime);
        var selectedMonth = apd.Model.DateUtils.getMonth(this.selected.datetime);
        this.days = this._getDaysList(this._startDateTime, this._endDateTime, this._limitDates, selectedYear, selectedMonth);
        return this;
    };

    _getDaysList = function (startDateTime:number, endDateTime:number, limitDates:LimitDatesClass, selectedYear:number, selectedMonth:number) {
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

        return this._intArraySort(result, Settings.daysListDirection);
    };

    _getIntArr = function (length:number) {
        if (!length && length !== 0) return;
        return length ? this._getIntArr(length - 1).concat(length) : [];
    };

    getDaysInMonth = (month:number, year:number) => {
        return new Date(year, month + 1, 0).getDate();
    };

})(DateUtils);