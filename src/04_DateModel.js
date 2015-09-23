exports.DateModel = (function (DateUtils) {
    'use strict';

    function DateModel(dt) {
        this.d = DateUtils.getDay(dt);
        this.dow = DateUtils.getDayOfWeek(dt);
        this.m = DateUtils.getMonth(dt);
        this.y = DateUtils.getYear(dt);
        this.dt = dt;
        this.tz = new Date(dt).getTimezoneOffset();

        return this;
    }

    return DateModel;
})(exports.DateUtils);