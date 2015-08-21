var MonthModel = (function () {
    'use strict';

    //TODO (S.Panfilov) Month model now is same as DaysModel
    //TODO (S.Panfilov) replace it with more abstract StringListModel

    function MonthModel(month) {
        this._setDefault = function () {
            return new MonthModel(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
        };
       
        this.getName = function (monthNum) {
            return this.month[monthNum];
        };
        
        if (month) {
            this.month = month;
            return this;
        } else {
            return this._setDefault();
        }
    }

    return MonthModel;
})();