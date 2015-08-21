/// <reference path="DataClass.ts" />

module apd.Model {
    'use strict';

    export class DateUtilsClass {

        static getVal = function (datetime:number, method:Function):number {
            var date:Date = new Date(datetime);
            return method.call(date);
        };

        static getDay = function (datetime:number, isUTC:boolean):number {
            var method = (isUTC) ? Date.prototype.getUTCDate : Date.prototype.getDate;
            return this.getVal(datetime, method);
        };

        static getDayOfWeek = function (datetime:number, isUTC:boolean):number {
            var method = (isUTC) ? Date.prototype.getUTCDay : Date.prototype.getDay;
            return this.getVal(datetime, method);
        };

        static getYear = function (datetime:number, isUTC:boolean):number {
            var method = (isUTC) ? Date.prototype.getUTCFullYear : Date.prototype.getFullYear;
            return this.getVal(datetime, method);
        };

        static getMonth = function (datetime:number, isUTC:boolean):number {
            var method = (isUTC) ? Date.prototype.getUTCMonth : Date.prototype.getMonth;
            return this.getVal(datetime, method);
        };
    }
}