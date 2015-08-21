'use strict';

var DateUtils = (function (Settings) {

    function getVal(datetime, method) {
        var date = new Date(datetime);
        return method.call(date);
    }

    var exports = {
        getDay: function (datetime) {
            var method = (Settings.isUTC) ? Date.prototype.getUTCDate : Date.prototype.getDate;
            return getVal(datetime, method);
        },
        getDayOfWeek: function (datetime) {
            var method = (Settings.isUTC) ? Date.prototype.getUTCDay : Date.prototype.getDay;
            return getVal(datetime, method);
        },
        getYear: function (datetime) {
            var method = (Settings.isUTC) ? Date.prototype.getUTCFullYear : Date.prototype.getFullYear;
            return getVal(datetime, method);
        },
        getMonth: function (datetime) {
            var method = (Settings.isUTC) ? Date.prototype.getUTCMonth : Date.prototype.getMonth;
            return getVal(datetime, method);
        },
        getDaysInMonth: function (month, year) {
            return new Date(year, month + 1, 0).getDate();
        }
    };

    return exports;
})(Settings);