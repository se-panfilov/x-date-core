var DateUtils = (function (Config) {
    'use strict';

    function getVal(dt, method) {
        var date = new Date(dt);
        return method.call(date);
    }

    var exports = {
        getDay: function (dt) {
            var method = (Config.isUTC) ? Date.prototype.getUTCDate : Date.prototype.getDate;
            return getVal(dt, method);
        },
        getDayOfWeek: function (dt) {
            var method = (Config.isUTC) ? Date.prototype.getUTCDay : Date.prototype.getDay;
            return getVal(dt, method);
        },
        getYear: function (dt) {
            var method = (Config.isUTC) ? Date.prototype.getUTCFullYear : Date.prototype.getFullYear;
            return getVal(dt, method);
        },
        getMonth: function (dt) {
            var method = (Config.isUTC) ? Date.prototype.getUTCMonth : Date.prototype.getMonth;
            return getVal(dt, method);
        },
        getDaysInMonth: function (month, year) {
            return new Date(year, month + 1, 0).getDate();
        },
        isValidModel: function (model) {
            return !!model && (!!model.dt || model.dt === 0);
        },
        isDateUpperStartLimit: function (dt, start) {
            if (!start) return true;
            return (dt > start);
        },
        isDateLowerEndLimit: function (dt, end) {
            if (!end) return true;
            return (dt < end);
        },
        isDateBetweenLimits: function (dt, start, end) {
            return (exports.isDateUpperStartLimit(dt, start) && exports.isDateLowerEndLimit(dt, end));
        }
    };

    return exports;
})(Config);