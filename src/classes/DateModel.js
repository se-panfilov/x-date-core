var DateModel = (function () {
    'use strict';

    function DateModel(datetime) {
        this.day = apd.Model.DateUtilsClass.getDay(datetime);
        this.dayOfWeek = apd.Model.DateUtilsClass.getDayOfWeek(datetime);
        this.month = apd.Model.DateUtilsClass.getMonth(datetime);
        this.year = apd.Model.DateUtilsClass.getYear(datetime);
        this.datetime = datetime;
        this.timezone = new Date(datetime).getTimezoneOffset();

        return this;
    }

    return DateModel;
})();