var DateUtils = (function (Config) {
    'use strict';

    function getVal(datetime, method) {
        var date = new Date(datetime);
        return method.call(date);
    }

    var exports = {
        getDay: function (datetime) {
            var method = (Config.isUTC) ? Date.prototype.getUTCDate : Date.prototype.getDate;
            return getVal(datetime, method);
        },
        getDayOfWeek: function (datetime) {
            var method = (Config.isUTC) ? Date.prototype.getUTCDay : Date.prototype.getDay;
            return getVal(datetime, method);
        },
        getYear: function (datetime) {
            var method = (Config.isUTC) ? Date.prototype.getUTCFullYear : Date.prototype.getFullYear;
            return getVal(datetime, method);
        },
        getMonth: function (datetime) {
            var method = (Config.isUTC) ? Date.prototype.getUTCMonth : Date.prototype.getMonth;
            return getVal(datetime, method);
        },
        getDaysInMonth: function (month, year) {
            return new Date(year, month + 1, 0).getDate();
        },
        isValidModel: function (model) {
            return !!model && (!!model.datetime || model.datetime === 0);
        },
        isDateUpperStartLimit: function (dt, startLimitTime) {
            if (!startLimitTime) return true;
            return (dt > startLimitTime);
        },
        isDateLowerEndLimit: function (dt, endLimitTime) {
            if (!endLimitTime) return true;
            return (dt < endLimitTime);
        },
        isDateBetweenLimits: function (dt, startLimitTime, endLimitTime) {
            return (exports.isDateUpperStartLimit(dt, startLimitTime) && exports.isDateLowerEndLimit(dt, endLimitTime));
        }
    };

    return exports;
})(Config);