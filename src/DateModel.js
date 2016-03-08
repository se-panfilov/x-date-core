/*START.DEV_ONLY*/
'use strict';
/*END.DEV_ONLY*/

/*START.TESTS_ONLY*/ exports.DateModel = /*END.TESTS_ONLY*/ function DateModel(dt) {
      if (!dt || Number.isNaN(+dt) || !Number.isFinite(+dt)) throw 'NaN or null';
      this.d = this.DateUtils.getDay(+dt);
      this.dow = this.DateUtils.getDayOfWeek(+dt);
      this.m = this.DateUtils.getMonth(+dt);
      this.y = this.DateUtils.getYear(+dt);
      this.dt = +dt;
      this.tz = new Date(+dt).getTimezoneOffset();

      return this;
}

  /*START.TESTS_ONLY*/;
return exports;
/*END.TESTS_ONLY*/