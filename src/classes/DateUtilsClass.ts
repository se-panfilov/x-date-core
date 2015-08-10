/// <reference path="DataClass.ts" />

module apd.Model {
    'use strict';

    export class DateUtilsClass {

        static getMonth = function (datetime, isUTC:boolean):number {
            var result:number;

            if (isUTC) {
                result = new Date(datetime).getUTCMonth();
            } else {
                result = new Date(datetime).getMonth();
            }

            return result;
        };

        static getYear = function (datetime, isUTC:boolean):number {
            var result:number;

            if (isUTC) {
                result = new Date(datetime).getUTCFullYear();
            } else {
                result = new Date(datetime).getFullYear();
            }

            return result;
        };

        static getDay = function (datetime, isUTC:boolean):number {
            var result:number;

            if (isUTC) {
                result = new Date(datetime).getUTCDate();
            } else {
                result = new Date(datetime).getDate();
            }

            return result;
        };

        static getDayOfWeek = function (datetime, isUTC:boolean):number {
            var result:number;

            if (isUTC) {
                result = new Date(datetime).getUTCDay();
            } else {
                result = new Date(datetime).getDay();
            }

            return result;
        };

    }
}