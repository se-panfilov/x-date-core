var xDateCore = function(selectedDt, startDt, endDt) {
  'use strict';

  var x = {
    Config: {
      isUtc: false,
      direction: {
        d: 'asc',
        m: 'asc',
        y: 'desc'
      },
      YEARS_COUNT: 30,
      START_DAY: 1,
      START_MONTH: 0,
      END_MONTH: 11,
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
    ListsState: {
      list: {},
      reloadDaysList: function() {
        this.list.d = x.DaysUtils.getDaysList();
      },
      reloadMonthList: function() {
        this.list.m = x.MonthUtils.getMonthList();
      },
      reloadYearsList: function() {
        this.list.y = x.YearsUtils.getYearsList();
      },
      initList: function() {
        this.reloadDaysList();
        this.reloadMonthList();
        this.reloadYearsList();
      }
    },

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
            if ((!dt && dt !== 0) || Number.isNaN(+dt) || Number.isNaN(+start)) throw 'NaN or null';
            return (+dt > +start);
          },
          isDateLowerEndLimit: function(dt, end) {
            if (!end) return true;
            if (Number.isNaN(+dt) || Number.isNaN(+end)) throw 'NaN or null';
            return (+dt < +end);
          },
          isDateBetweenLimits: function(dt, start, end) {
            return (exports.isDateUpperStartLimit(dt, start) && exports.isDateLowerEndLimit(dt, end));
          },
          isYearEqualStart: function(year) {
            return isYearEqualLimit('start', ['y'], year);
          },
          isYearEqualEnd: function(year) {
            return isYearEqualLimit('end', ['y'], year);
          },
          isMonthEqualStart: function(month) {
            return isYearEqualLimit('start', ['m'], month);
          },
          isMonthEqualEnd: function(month) {
            return isYearEqualLimit('end', ['m'], month);
          }
        };

        function isYearEqualLimit(limitName, unit, val) {
          return (x.State[limitName].isExist) ? x.State[limitName][unit] === +val : false;
        }


        return exports;
      })(),

    DaysUtils:
      (function() {

        function getLimits() {
          var isYearEqualStart = x.DateUtils.isYearEqualStart(x.State.selected.y);
          var isYearEqualEnd = x.DateUtils.isYearEqualEnd(x.State.selected.y);
          var isMonthEqualStart = x.DateUtils.isMonthEqualStart(x.State.selected.m);
          var isMonthEqualEnd = x.DateUtils.isMonthEqualEnd(x.State.selected.m);

          return {
            isLower: (isYearEqualStart && isMonthEqualStart),
            isUpper: (isYearEqualEnd && isMonthEqualEnd)
          }
        }

        function getArrFromAndTo(aStart, aEnd, lastDayInMonth) {
          var from = x.Config.START_DAY;
          var to = lastDayInMonth;
          var limit = getLimits();

          if (limit.isLower && limit.isUpper) {
            from = aStart;
            to = aEnd;
          } else if (limit.isLower && !limit.isUpper) {
            from = aStart;
            to = lastDayInMonth;
          } else if (!limit.isLower && limit.isUpper) {
            from = x.Config.START_DAY;
            to = aEnd;
          }

          return {
            from: from,
            to: to
          };
        }

        return {
          getDaysList: function() {
            var result = {};
            var lastDayInMonth = x.DateUtils.getDaysInMonth(x.State.selected.y, x.State.selected.y);
            var isStart = x.State.start.isExist;
            var isEnd = x.State.end.isExist;

            if (isStart || isEnd) {
              var start = (isStart) ? x.State.start.d : x.Config.START_DAY;
              var end = (isEnd) ? x.State.end.d : lastDayInMonth;
              result = getArrFromAndTo(start, end, lastDayInMonth);
            } else { // in all other cases return array of 12 month
              result = {
                from: x.Config.START_DAY,
                to: lastDayInMonth
              };
            }

            return x.CommonUtils.intArraySort(x.CommonUtils.getArrayOfNumbers(result.from, result.to), x.Config.direction.d);
          }
        }
      })(),

    State: {
      selected: {}, //TODO (S.Panfilov) refactor selected
      setSelected: function(dt, isForce) {
        var result;
        var self = this;

        if (isForce) {
          this.selected = new x.DateModel(dt);
          return;
        }

        var isStart = self.start.isExist;
        var isEnd = self.end.isExist;
        var isDtBeyondStart = (dt > this.start.dt);
        var isDtBeyondEnd = (dt > this.end.dt);


        if (isStart || isEnd) {
          if (!isDtBeyondStart) {
            result = this.start.dt;
          } else if (!isDtBeyondEnd) {
            result = this.end.dt;
          }
        } else {
          result = dt;
        }

        this.selected = new x.DateModel(result);
      },
      start: {},
      setStart: function(dt) {
        if (!dt && dt !== 0) return;
        this.start = new x.DateModel(dt);
        this.start.isStart = true;
      },
      end: {},
      setEnd: function(dt) {
        if (!dt && dt !== 0) return;
        this.end = new x.DateModel(dt);
        this.start.isEnd = true;
      },
      setLimits: function(start, end) {
        this.setStart(start);
        this.setEnd(end);
      },
      resetNow: function() {
        this.now = new x.DateModel(+(new Date()));
      },
      now: null // new x.DateModel(+(new Date())) //TODO (S.Panfilov) FIX it - x is undefined
    },

    MonthUtils:
      (function() {

        function getArrFromAndTo(start, end) {
          var isYearEqualStart = x.DateUtils.isYearEqualStart(x.State.selected.y);
          var isYearEqualEnd = x.DateUtils.isYearEqualEnd(x.State.selected.y);

          var from = x.Config.START_MONTH;
          var to = x.Config.END_MONTH;

          // startYear == 2015, nowYear == 2015, endYear == 2015
          if (isYearEqualStart && isYearEqualEnd) {
            from = start;
            to = end;
          } else if (isYearEqualStart && !isYearEqualEnd) { // startYear == 2015, nowYear == 2015, endYear == 2016 (or null)
            from = start;
            to = x.Config.END_MONTH;
          } else if (!isYearEqualStart && isYearEqualEnd) { // startYear == 2014 (or null), nowYear == 2015, endYear == 2015
            from = x.Config.START_MONTH;
            to = end;
          }

          return {
            from: from,
            to: to
          };
        }

        return {
          getMonthList: function() {
            var result = {};
            var isStart = x.State.start.isExist;
            var isEnd = x.State.end.isExist;

            if (isStart || isEnd) {
              var start = (isStart) ? x.State.start.m : x.Config.START_MONTH;
              var end = (isEnd) ? x.State.end.m : x.Config.END_MONTH;
              result = getArrFromAndTo(start, end);
            } else { // in all other cases return array of 12 month
              result = {
                from: x.Config.START_MONTH,
                to: x.Config.END_MONTH
              };
            }

            return x.CommonUtils.intArraySort(x.CommonUtils.getArrayOfNumbers(result.from, result.to), x.Config.direction.m);
          }
        }
      })(),

    YearsUtils:
      (function() {

        function _getLatestPossibleYear(selectedY, nowY) {
          var result = (selectedY > nowY) ? selectedY : nowY;
          result += (x.Config.YEARS_COUNT - 1);
          return result;
        }

        function _getFirstPossibleYear(selectedY, nowY) {
          var result = (selectedY < nowY) ? selectedY : nowY;
          result -= (x.Config.YEARS_COUNT - 1);
          return result;
        }

        function getCases(startY, endY, nowY) {
          return {
            isBoth: !!(startY && endY),
            isBothNot: !!(!startY && !endY),
            isOnlyStart: !!(startY && !endY),
            isOnlyEnd: !!(!startY && endY),
            isStartLower: (startY < endY),
            isEndLower: (startY > endY),
            isStartEqualEnd: (startY === endY),
            isEndUpperNow: (endY > nowY),
            isEndEqualNow: (endY === nowY)
          };
        }

        function _getRangeIfBothLimits(cases, startY, endY, latestPossibleYear) {
          //start = 2011, end = 2014
          if (cases.isStartLower) {
            return {
              from: startY,
              to: endY
            };
          }

          //start = 2014, end = 2011
          if (cases.isEndLower) {
            return {
              from: endY,
              to: startY
            };
          }

          //start = 2011, end = 2011
          if (cases.isStartEqualEnd) {
            return {
              from: startY,
              to: endY
            };
          }

          //start = 2014, end = null
          if (cases.isOnlyStart) {
            return {
              from: startY,
              to: latestPossibleYear
            };
          }
        }

        function _getRangeIfOnlyEndLimits(cases, endY, firstPossibleYear) {
          //start = null, now = 2013 (or 2014), end = 2014
          if (cases.isEndUpperNow || cases.isEndEqualNow) {
            //TODO (S.Panfilov) wtf? I cannot remember wtf this case check
            if ((firstPossibleYear - x.Config.YEARS_COUNT) > (endY - x.Config.YEARS_COUNT)) {
              return {
                from: firstPossibleYear,
                to: endY
              };
            } else {
              return {
                from: endY - (x.Config.YEARS_COUNT - 1),
                to: endY
              };
            }
          }

          //start = null, now = 2015,  end = 2014
          if (!cases.isEndUpperNow) {
            return {
              from: endY - (x.Config.YEARS_COUNT - 1),
              to: endY
            };
          }
        }

        function _getRangeValues(selectedY, startY, endY, nowY) {

          var latestPossibleYear = _getLatestPossibleYear(selectedY, nowY);
          var firstPossibleYear = _getFirstPossibleYear(selectedY, nowY);

          var cases = getCases(startY, endY, nowY);

          if (cases.isBoth) {
            return _getRangeIfBothLimits(cases, startY, endY, latestPossibleYear);
          }

          //start = null, end = 2014
          if (cases.isOnlyEnd) {
            return _getRangeIfOnlyEndLimits(cases, endY, firstPossibleYear);
          }

          //start = null, end = null
          if (cases.isBothNot) {
            return {
              from: firstPossibleYear,
              to: latestPossibleYear
            };
          }
        }

        var exports = {
          getYearsList: function() {
            var range = _getRangeValues(x.State.selected.y, x.State.start.y, x.State.end.y, x.State.now.y);
            var result = x.CommonUtils.getArrayOfNumbers(range.from, range.to);

            return x.CommonUtils.intArraySort(result, x.Config.direction.y);
          }
        };


        return exports;
      })()
  };
  x.State.resetNow();
  x.State.setLimits(startDt, endDt);
  x.State.setSelected(selectedDt);
  return x;
};