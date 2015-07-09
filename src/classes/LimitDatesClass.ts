/// <reference path="DataClass.ts" />

module apd.Model {
    'use strict';

    export class LimitDatesClass {
        startDate:{
            day: number;
            month:number;
            year:number;
        };

        endDate:{
            day:number;
            month: number;
            year:number;
        };

        nowDate:{
            day:number;
            month: number;
            year:number;
        };

        constructor(startDateTime:number, endDateTime:number) {
            if (!(this instanceof LimitDatesClass)) {
                apd.Model.MessagesFactoryClass.throwWrongClassCreationMessage();
                return new LimitDatesClass(startDateTime, endDateTime);
            }

            this.startDate = {day: null, month: null, year: null};
            this.endDate = {day: null, month: null, year: null};
            this.nowDate = {day: null, month: null, year: null};

            this._setStartDate(startDateTime);
            this._setEndDate(endDateTime);
            this._setNowDate();
        }

        _setStartDate = function (datetime:number) {
            if (!(this instanceof LimitDatesClass)) {
                apd.Model.MessagesFactoryClass.throwWrongInstanceMessage();
                return false;
            }

            this.startDate.day = new Date(datetime).getDate();
            this.startDate.month = new Date(datetime).getMonth();
            this.startDate.year = new Date(datetime).getFullYear();
            return this;
        };

        _setEndDate = function (datetime:number) {
            if (!(this instanceof LimitDatesClass)) {
                apd.Model.MessagesFactoryClass.throwWrongInstanceMessage();
                return false;
            }

            this.endDate.day = new Date(datetime).getDate();
            this.endDate.month = new Date(datetime).getMonth();
            this.endDate.year = new Date(datetime).getFullYear();
            return this;
        };

        _setNowDate = function () {
            if (!(this instanceof LimitDatesClass)) {
                apd.Model.MessagesFactoryClass.throwWrongInstanceMessage();
                return false;
            }

            this.nowDate.day = new Date().getDate();
            this.nowDate.month = new Date().getMonth();
            this.nowDate.year = new Date().getFullYear();
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