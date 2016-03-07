CommonUtils: function () {
  'use strict';

  var exports = {
    isValidNumber: function (num) {
      var isNumber = !isNaN(parseFloat(num));
      var isNotInfinity = isFinite(num);
      return isNumber && isNotInfinity;
    },
    getArrayOfNumbers: function (start, end) {
      if (!exports.isValidNumber(start) || !exports.isValidNumber(end)) return [];

      var isReverse = (start > end);
      var targetLength = isReverse ? (start - end) + 1 : (end - start ) + 1;
      var arr = new Array(targetLength);
      var newArr = Array.apply(null, arr);
      var result = newArr.map(function (d, n) {
        return (isReverse) ? n + end : n + start;
      });

      return (isReverse) ? result.reverse() : result;
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
    }
  };

  return exports;
},