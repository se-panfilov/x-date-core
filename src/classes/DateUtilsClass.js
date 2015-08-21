'use strict';

var DateUtils = (function (isUtc) {
    function DateUtils() {
    }

    DateUtils.prototype.getVal = function (datetime, method) {
        var date = new Date(datetime);
        return method.call(date);
    };

    DateUtils.prototype.getDay = function (datetime, isUTC) {
        var method = (isUTC) ? Date.prototype.getUTCDate : Date.prototype.getDate;
        return this.getVal(datetime, method);
    };

    DateUtils.prototype.getDayOfWeek = function (datetime, isUTC) {
        var method = (isUTC) ? Date.prototype.getUTCDay : Date.prototype.getDay;
        return this.getVal(datetime, method);
    };

    DateUtils.prototype.getYear = function (datetime, isUTC) {
        var method = (isUTC) ? Date.prototype.getUTCFullYear : Date.prototype.getFullYear;
        return this.getVal(datetime, method);
    };

    DateUtils.prototype.getMonth = function (datetime, isUTC) {
        var method = (isUTC) ? Date.prototype.getUTCMonth : Date.prototype.getMonth;
        return this.getVal(datetime, method);
    };
    
    return DateUtils;
})(isUtc);