var DaysModel = (function () {
    'use strict';

    function DaysModel(days) {
        this._setDefault = function () {
            return new DaysModel(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
        };

        this.getName = function (dayNum) {
            return this.days[dayNum];
        };

        if (days) {
            this.days = days;
            return this;
        } else {
            return this._setDefault();
        }
    }

    return DaysModel;
})();