exports.DateUtils = (function (Config) {
    'use strict';

    function getVal(dt, method) {
        var date = new Date(+dt);
        return (date && method) ? method.call(date) : null;
    }

    var exports = {
        getDay: function (dt) {
            if (!dt && dt !== 0) return null;
            var method = (Config.isUtc) ? Date.prototype.getUTCDate : Date.prototype.getDate;
            return getVal(dt, method);
        },
        getDayOfWeek: function (dt) {
            if (!dt && dt !== 0) return null;
            var method = (Config.isUtc) ? Date.prototype.getUTCDay : Date.prototype.getDay;
            return getVal(dt, method);
        },
        getYear: function (dt) {
            if (!dt && dt !== 0) return null;
            var method = (Config.isUtc) ? Date.prototype.getUTCFullYear : Date.prototype.getFullYear;
            return getVal(dt, method);
        },
        getMonth: function (dt) {
            if (!dt && dt !== 0) return null;
            var method = (Config.isUtc) ? Date.prototype.getUTCMonth : Date.prototype.getMonth;
            return getVal(dt, method);
        },
        getDaysInMonth: function (month, year) {
            var method = (Config.isUtc) ? Date.prototype.getUTCDate : Date.prototype.getDate;
            return method.call(new Date(+year, (+month) + 1, 0));
        },
        isValidModel: function (model) {
            return !!model && (!!model.dt || model.dt === 0) && !Number.isNaN(+model.dt) && Number.isFinite(+model.dt);
        },
        isDateUpperStartLimit: function (dt, start) {
            if (!start) return true;
            //TODO (S.Panfilov) should be a const
            if ((!dt && dt !== 0) || Number.isNaN(+dt) || Number.isNaN(+start)) throw 'NaN or null';
            //TODO (S.Panfilov) may be (+dt >= +end)
            return (+dt > +start);
        },
        isDateLowerEndLimit: function (dt, end) {
            if (!end) return true;
            //TODO (S.Panfilov) should be a const
            if (Number.isNaN(+dt) || Number.isNaN(+end)) throw 'NaN or null';
            //TODO (S.Panfilov) may be (+dt <= +end)
            return (+dt < +end);
        },
        isDateBetweenLimits: function (dt, start, end) {
            //TODO (S.Panfilov) lowerAndEqual and UpperAndEqual?
            return (exports.isDateUpperStartLimit(dt, start) && exports.isDateLowerEndLimit(dt, end));
        }
    };

    /*START.TESTS_ONLY*/
    exports._private = {};
    exports._private.getVal = getVal;
    /*END.TESTS_ONLY*/

    return exports;
})(exports.Config);