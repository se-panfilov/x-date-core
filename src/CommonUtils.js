/*START.DEV_ONLY*/
'use strict';
var x = {};
var exports = {};
/*END.DEV_ONLY*/

/*START.TESTS_ONLY*/
exports.CommonUtils = /*END.TESTS_ONLY*/ {
  isValidNumber: function (num) {
    var isNumber = !isNaN(parseFloat(num));
    var isNotInfinity = isFinite(num);
    return isNumber && isNotInfinity;
  },
  getArrayOfNumbers: function (start, end) {
    //TODO (S.Panfilov) check this in after build
    //if (!exports.isValidNumber(start) || !exports.isValidNumber(end)) return [];
    if (!this.isValidNumber(start) || !this.isValidNumber(end)) return [];

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
}/*START.TESTS_ONLY*/;
return exports;
/*END.TESTS_ONLY*/