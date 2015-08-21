'use strict';

var UTC = (function () {
    var instance;

    return function isUTC(isUTC) {
        if (instance) return instance;

        if (this && this.constructor === UtcClass) {
            instance = this;
        } else {
            return new UtcClass(isUTC);
        }

        instance.isUTC = isUTC;
    }
}());