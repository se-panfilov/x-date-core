var LimitsModel = (function (DateUtils) {
    'use strict';

    function LimitsModel(startDt, endDt) {

        var exports = {
            start: {},
            end: {},
            now: {}
        };

        function _setStart(dt) {
            exports.start.d = DateUtils.getDay(dt);
            exports.start.m = DateUtils.getMonth(dt);
            exports.start.y = DateUtils.getYear(dt);
            exports.start.dt = dt;
            return this;
        }

        function _setEnd(dt) {
            exports.end.d = DateUtils.getDay(dt);
            exports.end.m = DateUtils.getMonth(dt);
            exports.end.y = DateUtils.getYear(dt);
            exports.end.dt = dt;
            return this;
        }

        function _setNow() {
            var dt = new Date().getTime();
            exports.now.d = DateUtils.getDay(dt);
            exports.now.m = DateUtils.getMonth(dt);
            exports.now.y = DateUtils.getYear(dt);
            exports.now.dt = dt;
            return this;
        }

        _setStart(startDt);
        _setEnd(endDt);
        _setNow();
        
        return exports;
    }
    
    return LimitsModel;
})(DateUtils);