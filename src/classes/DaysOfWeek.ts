/// <reference path="DataClass.ts" />

module apd.Model {
    'use strict';

    export class DaysOfWeek {
        list:Array<DayOfWeek>;
        names:Array<string>;
        shorts:Array<string>;

        constructor(days:Array<DayOfWeek>) {
            if (!(this instanceof DaysOfWeek)) {
                apd.Model.MessagesFactoryClass.throwWrongClassCreationMessage();
                return new DaysOfWeek(days);
            }

            this.list = days;
            this.shorts = this.getListOfShorts();
            this.names = this.getListOfNames();
            return this;
        }

        private getListOfShorts = () => {
            if (!(this instanceof DaysOfWeek)) {
                apd.Model.MessagesFactoryClass.throwWrongInstanceMessage();
                return null;
            }

            var result = [];

            for (var i = 0; i < this.list.length; i++) {
                var dayOfWeek = this.list[i];
                result.push(dayOfWeek.short);
            }

            return result;
        };

        private getListOfNames = () => {
            if (!(this instanceof DaysOfWeek)) {
                apd.Model.MessagesFactoryClass.throwWrongInstanceMessage();
                return null;
            }

            var result = [];

            for (var i = 0; i < this.list.length; i++) {
                var dayOfWeek = this.list[i];
                result.push(dayOfWeek.name);
            }

            return result;
        };

        getDayOfWeekShortName = (dayNum:number) => {
            if (!(this instanceof DaysOfWeek)) {
                apd.Model.MessagesFactoryClass.throwWrongInstanceMessage();
                return null;
            }

            return this.shorts[dayNum];
        };

        getDayOfWeekName = (dayNum:number) => {
            if (!(this instanceof DaysOfWeek)) {
                apd.Model.MessagesFactoryClass.throwWrongInstanceMessage();
                return null;
            }

            return this.names[dayNum];
        };
    }

}