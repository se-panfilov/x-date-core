var DateModel = (function (DateUtils) {
    'use strict';

    function DateModel(datetime) {
        this.d = DateUtils.getDay(datetime);
        this.dow = DateUtils.getDayOfWeek(datetime);
        this.m = DateUtils.getMonth(datetime);
        this.y = DateUtils.getYear(datetime);
        this.dt = datetime;
        this.tz = new Date(datetime).getTimezoneOffset();

        return this;
    }

    return DateModel;
})(DateUtils);