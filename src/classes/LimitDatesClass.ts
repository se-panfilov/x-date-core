/// <reference path="DateUtilsClass.ts" />
/// <reference path="MessagesFactoryClass.ts" />

module apd.Model {
    'use strict';

    export class LimitDatesClass {
        startDate:{
            datetime:number;
            day: number;
            month:number;
            year:number;
        };

        endDate:{
            datetime:number;
            day:number;
            month: number;
            year:number;
        };

        nowDate:{
            datetime:number;
            day:number;
            month: number;
            year:number;
        };

        _isUTC:boolean;

        constructor(startDateTime:number, endDateTime:number, isUTC:boolean) {
            if (!(this instanceof LimitDatesClass)) {
                apd.Model.MessagesFactoryClass.throwWrongClassCreationMessage();
                return new LimitDatesClass(startDateTime, endDateTime, isUTC);
            }

            this._isUTC = isUTC;

            this.startDate = {day: null, month: null, year: null, datetime: null};
            this.endDate = {day: null, month: null, year: null, datetime: null};
            this.nowDate = {day: null, month: null, year: null, datetime: null};

            this._setStartDate(startDateTime);
            this._setEndDate(endDateTime);
            this._setNowDate();
        }

        _setStartDate = function (datetime:number) {
            if (!(this instanceof LimitDatesClass)) {
                apd.Model.MessagesFactoryClass.throwWrongInstanceMessage();
                return false;
            }

            this.startDate.day = apd.Model.DateUtilsClass.getDay(datetime, this._isUTC);
            this.startDate.month = apd.Model.DateUtilsClass.getMonth(datetime, this._isUTC);
            this.startDate.year = apd.Model.DateUtilsClass.getYear(datetime, this._isUTC);
            this.startDate.datetime = datetime;
            return this;
        };

        _setEndDate = function (datetime:number) {
            if (!(this instanceof LimitDatesClass)) {
                apd.Model.MessagesFactoryClass.throwWrongInstanceMessage();
                return false;
            }

            this.endDate.day = apd.Model.DateUtilsClass.getDay(datetime, this._isUTC);
            this.endDate.month = apd.Model.DateUtilsClass.getMonth(datetime, this._isUTC);
            this.endDate.year = apd.Model.DateUtilsClass.getYear(datetime, this._isUTC);
            this.endDate.datetime = datetime;
            return this;
        };

        _setNowDate = function () {
            if (!(this instanceof LimitDatesClass)) {
                apd.Model.MessagesFactoryClass.throwWrongInstanceMessage();
                return false;
            }

            var datetime = new Date().getTime();
            this.nowDate.day = apd.Model.DateUtilsClass.getDay(datetime, this._isUTC);
            this.nowDate.month = apd.Model.DateUtilsClass.getMonth(datetime, this._isUTC);
            this.nowDate.year = apd.Model.DateUtilsClass.getYear(datetime, this._isUTC);
            this.nowDate.datetime = datetime;
            return this;
        };

        static isDateUpperStartLimit = function (datetime:number, startLimitTime:number) {
            if (!startLimitTime) return true;
            return (datetime > startLimitTime);
        };

        static isDateLowerEndLimit = function (datetime:number, endLimitTime:number) {
            if (!endLimitTime) return true;
            return (datetime < endLimitTime);
        };

        static isDateBetweenLimits = function (datetime:number, startLimitTime:number, endLimitTime:number) {
            return (this.isDateUpperStartLimit(datetime, startLimitTime) && this.isDateLowerEndLimit(datetime, endLimitTime));
        };

    }
}