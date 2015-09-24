exports.CommonUtils = (function () {
    'use strict';

    var exports = {
        isValidNumber: function (num) {
            var isNumber = !isNaN(parseFloat(num));
            var isNotInfinity = isFinite(num);
            return isNumber && isNotInfinity;
        },
        getArrayOfNumbers: function (start, end) {
            var result = [];

            for (var i = start; i <= end; i++) {
                result.push(i);
            }

            return result;
        },
        intArraySort: function (arr, direction) {
            var DESC = 'desc';

            function desc(a, b) {
                return b - a;
            }

            switch (direction) {
                default:
                    return arr.sort(function (a, b) {
                        return a - b;
                    });
                case DESC:
                    return arr.sort(desc);
            }
        },
        getIntArr: function (length) {
            if (!length && length !== 0) return;
            return length ? exports.getIntArr(length - 1).concat(length) : [];
        }
    };

    return exports;
})();