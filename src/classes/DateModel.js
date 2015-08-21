var DateModel = (function (DateUtils) {
    'use strict';

    function DateModel(datetime) {
        this.day = DateUtils.getDay(datetime);
        this.dayOfWeek = DateUtils.getDayOfWeek(datetime);
        this.month = DateUtils.getMonth(datetime);
        this.year = DateUtils.getYear(datetime);
        this.datetime = datetime;
        this.timezone = new Date(datetime).getTimezoneOffset();

        return this;
    }

    return DateModel;
})(DateUtils);