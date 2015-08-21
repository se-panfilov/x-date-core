var DataClass = (function (DateUtils, CommonUtils, YearsUtils, MonthUtils, DaysUtils, DateModel) {

    function DataClass(selected, startDateTime, endDateTime) {
        selected.datetime = CommonUtils.isValidNumber(selected.datetime) ? selected.datetime : null;
        startDateTime = CommonUtils.isValidNumber(startDateTime) ? startDateTime : null;
        endDateTime = CommonUtils.isValidNumber(endDateTime) ? endDateTime : null;

        this.selected = this._getSelected(selected, startDateTime, endDateTime);
        var selectedYear = DateUtils.getYear(this.selected.datetime);
        var selectedMonth = DateUtils.getMonth(this.selected.datetime);

        this._limitDates = new LimitsModel(startDateTime, endDateTime);
        this._startDateTime = startDateTime;
        this._endDateTime = endDateTime;
        this.years = YearsUtils.getYearsList(startDateTime, endDateTime, this._limitDates);
        this.month = MonthUtils.getMonthList(startDateTime, endDateTime, this._limitDates, selectedYear);
        this.days = DaysUtils.getDaysList(startDateTime, endDateTime, this._limitDates, selectedYear, selectedMonth);

        return this;
    }

    _getSelected = function (selected, startDateTime, endDateTime) {
        var result;

        var isBiggerThenStart = (selected.datetime > startDateTime);
        var isEqualToStart = (selected.datetime === startDateTime);
        var isLowerThenEnd = (selected.datetime > endDateTime);
        var isEqualToEnd = (selected.datetime === endDateTime);

        //start == 1; selected == 1 or 2 or 3; end == 3;
        if ((isBiggerThenStart || isEqualToStart) || (isLowerThenEnd || isEqualToEnd)) {
            result = new DateModel(selected.datetime);
        } else
        //start == 1; selected == 0
        if (!isBiggerThenStart) {
            result = new DateModel(startDateTime);
        } else
        //selected == 4; end == 3;
        if (!isBiggerThenStart) {
            result = new DateModel(endDateTime);
        }
        //paranoid case
        else {
            result = new DateModel(new Date().getTime());
        }

        return result;
    };

    reloadYearsList = function () {
        this.years = YearsUtils.getYearsList(this._startDateTime, this._endDateTime, this._limitDates);
        return this;
    };

    reloadMonthList = function () {
        var selectedYear = DateUtils.getYear(this.selected.datetime);
        this.month = MonthUtils.getMonthList(this._startDateTime, this._endDateTime, this._limitDates, selectedYear);
        return this;
    };

    reloadDaysList = function () {
        var selectedYear = DateUtils.getYear(this.selected.datetime);
        var selectedMonth = DateUtils.getMonth(this.selected.datetime);
        this.days = DaysUtils.getDaysList(this._startDateTime, this._endDateTime, this._limitDates, selectedYear, selectedMonth);
        return this;
    };

})(DateUtils, CommonUtils, YearsUtils, MonthUtils, DaysUtils, DateModel);