/// <reference path="DataClass.ts" />

module apd.Model {
    'use strict';

    export class DateModelClass {
        day:number;
        dayOfWeek:number;
        month:number;
        year:number;
        datetime:number;
        timezone:number;

        constructor(datetime:number) {
            if (!(this instanceof DateModelClass)) {
                apd.Model.MessagesFactoryClass.throwWrongInstanceMessage();
                return new DateModelClass(datetime);
            }

            var date = new Date(datetime);

            this.day = date.getDate();
            this.dayOfWeek = date.getDay();
            this.month = date.getMonth();
            this.year = date.getFullYear();
            this.datetime = datetime;
            this.timezone = date.getTimezoneOffset();

            return this;
        }

        static validate = function (model:DateModelClass) {
            return !!(model && model.datetime);
        }

    }
}