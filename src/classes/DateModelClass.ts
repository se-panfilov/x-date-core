/// <reference path="DateUtilsClass.ts" />

module apd.Model {
    'use strict';

    export class DateModelClass {
        day:number;
        dayOfWeek:number;
        month:number;
        year:number;
        datetime:number;
        timezone:number;
        _isUTC:boolean;

        constructor(datetime:number, isUTC:boolean) {
            this.day =  apd.Model.DateUtilsClass.getDay(datetime, this._isUTC);
            this.dayOfWeek =  apd.Model.DateUtilsClass.getDayOfWeek(datetime, this._isUTC);
            this.month = apd.Model.DateUtilsClass.getMonth(datetime, this._isUTC);
            this.year =  apd.Model.DateUtilsClass.getYear(datetime, this._isUTC);
            this.datetime = datetime;
            this.timezone = new Date(datetime).getTimezoneOffset();
            this._isUTC = isUTC;

            return this;
        }

        static validate = function (model:DateModelClass) {
            return !!(model && model.datetime);
        }

    }
}