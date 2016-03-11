/*START.DEV_ONLY*/
'use strict';
/*END.DEV_ONLY*/

/*START.TESTS_ONLY*/
exports.Config = /*END.TESTS_ONLY*/ {
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
}/*START.TESTS_ONLY*/;
return exports;
/*END.TESTS_ONLY*/