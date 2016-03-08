var xDateCore = (function() {
  'use strict';

  var x = {
    Config: {
      isUtc: false,
      monthDirection: 'asc',
      daysDirection: 'asc',
      yearsDirection: 'desc',
      defaultYearsCount: 50,
      daysList: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      monthList: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    },

    CommonUtils: {
      isValidNumber: function(num) {
        var isNumber = !isNaN(parseFloat(num));
        var isNotInfinity = isFinite(num);
        return isNumber && isNotInfinity;
      },
      getArrayOfNumbers: function(start, end) {
        //TODO (S.Panfilov) check this in after build
        //if (!exports.isValidNumber(start) || !exports.isValidNumber(end)) return [];
        if (!this.isValidNumber(start) || !this.isValidNumber(end)) return [];

        var isReverse = (start > end);
        var targetLength = isReverse ? (start - end) + 1 : (end - start) + 1;
        var arr = new Array(targetLength);
        var newArr = Array.apply(null, arr);
        var result = newArr.map(function(d, n) {
          return (isReverse) ? n + end : n + start;
        });

        return (isReverse) ? result.reverse() : result;
      },
      intArraySort: function(arr, direction) {
        var DESC = 'desc';

        function desc(a, b) {
          return b - a;
        }

        switch (direction) {
          default: return arr.sort(function(a, b) {
            return a - b;
          });
          case DESC:
              return arr.sort(desc);
        }
      }
    },

    DataClass:
      (function() {

        function _getSelected(model, start, end) {
          var result;

          var isUpperStart = (model.dt > start);
          var isEqualStart = (model.dt === start);
          var isLowerEnd = (model.dt > end);
          var isEqualEnd = (model.dt === end);

          //start == 1; model == 1 or 2 or 3; end == 3;
          if ((isUpperStart || isEqualStart) || (isLowerEnd || isEqualEnd)) {
            result = new x.DateModel(model.dt);
          } else if (!isUpperStart) { //start == 1; model == 0
            result = new x.DateModel(start);
          } else if (!isUpperStart) { //model == 4; end == 3;
            result = new x.DateModel(end);
          } else { //paranoid case
            result = new x.DateModel(new Date().getTime());
          }

          return result;
        }

        return function(model, start, end) {

          var _data = {
            _start: null,
            _end: null,
            _limitDates: null
          };

          var exports = {
            selected: {},
            list: {
              y: null,
              m: null,
              d: null
            },
            reloadYearsList: function() {
              var selectedYear = x.DateUtils.getYear(exports.selected.dt);
              var startYear = x.DateUtils.getYear(_data._start);
              var endYear = x.DateUtils.getYear(_data._end);
              //exports.list.y = x.YearsUtils.getYearsList(selectedYear, _data._start, _data._end, _data.x.LimitsModel.now.y);
              exports.list.y = x.YearsUtils.getYearsList(selectedYear, startYear, endYear, _data.x.LimitsModel.now.y);
              return this;
            },
            reloadMonthList: function() {
              var selectedYear = x.DateUtils.getYear(exports.selected.dt);
              var startMonth = x.DateUtils.getMonth(_data._start);
              var endMonth = x.DateUtils.getMonth(_data._end);
              exports.list.m = x.MonthUtils.getMonthList(startMonth, endMonth, selectedYear, _data.x.LimitsModel);
              return this;
            },
            reloadDaysList: function() {
              var selectedYear = x.DateUtils.getYear(exports.selected.dt);
              var selectedMonth = x.DateUtils.getMonth(exports.selected.dt);
              exports.list.d = x.DaysUtils.getDaysList(_data._start, _data._end, selectedYear, selectedMonth, _data.x.LimitsModel);
              return this;
            }
          };

          model.dt = x.CommonUtils.isValidNumber(model.dt) ? model.dt : null;
          start = x.CommonUtils.isValidNumber(start) ? start : null;
          end = x.CommonUtils.isValidNumber(end) ? end : null;

          exports.selected = _getSelected(model, start, end);
          var selectedYear = x.DateUtils.getYear(exports.selected.dt);
          var selectedMonth = x.DateUtils.getMonth(exports.selected.dt);

          _data.x.LimitsModel = new x.LimitsModel(start, end);
          _data._start = start;
          _data._end = end;

          exports.list.y = x.YearsUtils.getYearsList(selectedYear, _data.x.LimitsModel.start.y, _data.x.LimitsModel.end.y, _data.x.LimitsModel.now.y);
          exports.list.m = x.MonthUtils.getMonthList(start, end, selectedYear, _data.x.LimitsModel);
          exports.list.d = x.DaysUtils.getDaysList(start, end, selectedYear, selectedMonth, _data.x.LimitsModel);

          return exports;
        }
      })(),

    DateModel:
      (function() {
        return function DateModel(dt) {
          if (!dt || Number.isNaN(+dt) || !Number.isFinite(+dt)) throw 'NaN or null';
          this.d = x.DateUtils.getDay(+dt);
          this.dow = x.DateUtils.getDayOfWeek(+dt);
          this.m = x.DateUtils.getMonth(+dt);
          this.y = x.DateUtils.getYear(+dt);
          this.dt = +dt;
          this.tz = new Date(+dt).getTimezoneOffset();

          return this;
        };
      })(),

    DateUtils:
      (function() {

        function getVal(dt, method) {
          var date = new Date(+dt);
          return (date && method) ? method.call(date) : null;
        }

        var exports = {
          getDay: function(dt) {
            if (!dt && dt !== 0) return null;
            var method = (x.Config.isUtc) ? Date.prototype.getUTCDate : Date.prototype.getDate;
            return getVal(dt, method);
          },
          getDayOfWeek: function(dt) {
            if (!dt && dt !== 0) return null;
            var method = (x.Config.isUtc) ? Date.prototype.getUTCDay : Date.prototype.getDay;
            return getVal(dt, method);
          },
          getYear: function(dt) {
            if (!dt && dt !== 0) return null;
            var method = (x.Config.isUtc) ? Date.prototype.getUTCFullYear : Date.prototype.getFullYear;
            return getVal(dt, method);
          },
          getMonth: function(dt) {
            if (!dt && dt !== 0) return null;
            var method = (x.Config.isUtc) ? Date.prototype.getUTCMonth : Date.prototype.getMonth;
            return getVal(dt, method);
          },
          getDaysInMonth: function(month, year) {
            var method = (x.Config.isUtc) ? Date.prototype.getUTCDate : Date.prototype.getDate;
            return method.call(new Date(+year, (+month) + 1, 0));
          },
          isValidModel: function(model) {
            return !!model && (!!model.dt || model.dt === 0) && !Number.isNaN(+model.dt) && Number.isFinite(+model.dt);
          },
          isDateUpperStartLimit: function(dt, start) {
            if (!start) return true;
            //TODO (S.Panfilov) should be a const
            if ((!dt && dt !== 0) || Number.isNaN(+dt) || Number.isNaN(+start)) throw 'NaN or null';
            //TODO (S.Panfilov) may be (+dt >= +end)
            return (+dt > +start);
          },
          isDateLowerEndLimit: function(dt, end) {
            if (!end) return true;
            //TODO (S.Panfilov) should be a const
            if (Number.isNaN(+dt) || Number.isNaN(+end)) throw 'NaN or null';
            //TODO (S.Panfilov) may be (+dt <= +end)
            return (+dt < +end);
          },
          isDateBetweenLimits: function(dt, start, end) {
            //TODO (S.Panfilov) lowerAndEqual and UpperAndEqual?
            return (exports.isDateUpperStartLimit(dt, start) && exports.isDateLowerEndLimit(dt, end));
          }
        };


        return exports;
      })(),

    DaysUtils: {
      getDaysList: function(startDt, endDt, year, month, limitsModel) {
        var result;
        var START_DAY = 1;
        var lastDayInMonth = x.DateUtils.getDaysInMonth(month, year);

        if (startDt || endDt) {
          var isYearOfLowerLimit = (startDt) ? limitsModel.start.y === year : false;
          var isYearOfUpperLimit = (endDt) ? limitsModel.end.y === year : false;
          var isMonthOfLowerLimit = (startDt) ? limitsModel.start.m === month : false;
          var isMonthOfUpperLimit = (endDt) ? limitsModel.end.m === month : false;

          var isLowerLimit = (isYearOfLowerLimit && isMonthOfLowerLimit);
          var isUpperLimit = (isYearOfUpperLimit && isMonthOfUpperLimit);

          var start = (startDt) ? limitsModel.start.d : START_DAY;
          var end = (endDt) ? limitsModel.end.d : lastDayInMonth;

          if (isLowerLimit && isUpperLimit) {
            result = x.CommonUtils.getArrayOfNumbers(start, end);
          } else if (isLowerLimit && !isUpperLimit) {
            result = x.CommonUtils.getArrayOfNumbers(start, lastDayInMonth);
          } else if (!isLowerLimit && isUpperLimit) {
            result = x.CommonUtils.getArrayOfNumbers(START_DAY, end);
          } else { // in all other cases return array of 12 month
            result = x.CommonUtils.getArrayOfNumbers(START_DAY, lastDayInMonth);
          }
        } else { // in all other cases return array of 12 month
          result = x.CommonUtils.getArrayOfNumbers(START_DAY, lastDayInMonth);
        }

        return x.CommonUtils.intArraySort(result, x.Config.daysDirection);
      }
    },

    LimitsModel:
      (function() {
        return function LimitsModel(start, end) {

          var exports = {
            start: {},
            end: {},
            now: {}
          };

          function _setStart(dt) {
            exports.start.d = x.DateUtils.getDay(+dt);
            exports.start.m = x.DateUtils.getMonth(+dt);
            exports.start.y = x.DateUtils.getYear(+dt);
            exports.start.dt = +dt;
            //TODO (S.Panfilov) Possible strict violation
            return this;
          }

          function _setEnd(dt) {
            exports.end.d = x.DateUtils.getDay(+dt);
            exports.end.m = x.DateUtils.getMonth(+dt);
            exports.end.y = x.DateUtils.getYear(+dt);
            exports.end.dt = +dt;
            //TODO (S.Panfilov) Possible strict violation
            return this;
          }

          function _setNow() {
            var dt = new Date().getTime();
            exports.now.d = x.DateUtils.getDay(dt);
            exports.now.m = x.DateUtils.getMonth(dt);
            exports.now.y = x.DateUtils.getYear(dt);
            exports.now.dt = dt;
            //TODO (S.Panfilov) Possible strict violation
            return this;
          }

          if (start) _setStart(start);
          if (end) _setEnd(end);
          _setNow();


          return exports;
        };
      })(),

    MonthUtils:
      (function() {
        return {
          getMonthList: function(startDt, endDt, selectedYear, limitsModel) {
            var result;
            var START_MONTH = 0;
            var END_MONTH = 11;

            if (startDt || endDt) {
              var isYearOfLowerLimit = (startDt) ? limitsModel.start.y === selectedYear : false;
              var isYearOfUpperLimit = (endDt) ? limitsModel.end.y === selectedYear : false;
              var start = (startDt) ? limitsModel.start.m : START_MONTH;
              var end = (endDt) ? limitsModel.end.m : END_MONTH;

              // startYear == 2015, nowYear == 2015, endYear == 2015
              if (isYearOfLowerLimit && isYearOfUpperLimit) {
                result = x.CommonUtils.getArrayOfNumbers(start, end);
              } else if (isYearOfLowerLimit && !isYearOfUpperLimit) { // startYear == 2015, nowYear == 2015, endYear == 2016 (or null)
                result = x.CommonUtils.getArrayOfNumbers(start, END_MONTH);
              } else if (!isYearOfLowerLimit && isYearOfUpperLimit) { // startYear == 2014 (or null), nowYear == 2015, endYear == 2015
                result = x.CommonUtils.getArrayOfNumbers(START_MONTH, end);
              } else { // in all other cases return array of 12 month
                result = x.CommonUtils.getArrayOfNumbers(START_MONTH, END_MONTH);
              }
            } else { // in all other cases return array of 12 month
              result = x.CommonUtils.getArrayOfNumbers(START_MONTH, END_MONTH);
            }

            return x.CommonUtils.intArraySort(result, x.Config.monthDirection);
          }
        };
      })(),

    YearsUtils:
      (function() {

        function _getLatestPossibleYear(yearsCount, selectedYear, now) {
          var result = (selectedYear > now) ? selectedYear : now;
          result += (yearsCount - 1);
          return result;
        }

        function _getFirstPossibleYear(yearsCount, selectedYear, now) {
          var result = (selectedYear < now) ? selectedYear : now;
          result -= (yearsCount - 1);
          return result;
        }

        function _getRangeValues(selectedYear, startYear, endYear, nowYear) {

          var YEARS_COUNT = x.Config.defaultYearsCount;
          var latestPossibleYear = _getLatestPossibleYear(YEARS_COUNT, selectedYear, nowYear);
          var firstPossibleYear = _getFirstPossibleYear(YEARS_COUNT, selectedYear, nowYear);

          var statement = {
            isBoth: !!(startYear && endYear),
            isBothNot: !!(!startYear && !endYear),
            isOnlyStart: !!(startYear && !endYear),
            isOnlyEnd: !!(!startYear && endYear),
            isStartLower: (startYear < endYear),
            isEndLower: (startYear > endYear),
            isStartEqualEnd: (startYear === endYear),
            isEndUpperNow: (endYear > nowYear),
            isEndEqualNow: (endYear === nowYear)
          };

          //start = 2011, end = 2014
          if (statement.isBoth && statement.isStartLower) {
            return {
              from: startYear,
              to: endYear
            };
          }

          //start = 2014, end = 2011
          if (statement.isBoth && statement.isEndLower) {
            return {
              from: endYear,
              to: startYear
            };
          }

          //start = 2011, end = 2011
          if (statement.isBoth && statement.isStartEqualEnd) {
            return {
              from: startYear,
              to: endYear
            };
          }

          //start = 2014, end = null
          if (statement.isOnlyStart) {
            return {
              from: startYear,
              to: latestPossibleYear
            };
          }

          //start = null, end = 2014
          if (statement.isOnlyEnd) {
            //start = null, now = 2013 (or 2014), end = 2014
            if (statement.isEndUpperNow || statement.isEndEqualNow) {
              //TODO (S.Panfilov) wtf? I cannot remember wtf this statement check
              if ((firstPossibleYear - YEARS_COUNT) > (endYear - YEARS_COUNT)) {
                return {
                  from: firstPossibleYear,
                  to: endYear
                };
              } else {
                return {
                  from: endYear - (YEARS_COUNT - 1),
                  to: endYear
                };
              }
            }

            //start = null, now = 2015,  end = 2014
            if (!statement.isEndUpperNow) {
              return {
                from: endYear - (YEARS_COUNT - 1),
                to: endYear
              };
            }
          }

          //start = null, end = null
          if (statement.isBothNot) {
            return {
              from: firstPossibleYear,
              to: latestPossibleYear
            };
          }
        }

        var exports = {
          getYearsList: function(selectedYear, startYear, endYear, nowYear) {
            var range = _getRangeValues(selectedYear, startYear, endYear, nowYear);
            var result = x.CommonUtils.getArrayOfNumbers(range.from, range.to);

            return x.CommonUtils.intArraySort(result, x.Config.yearsDirection);
          }
        };


        return exports;
      })()
  };
  return x;
})();