/// <reference path="DataClass.ts" />
/// <reference path="DaysOfWeek.ts" />

module apd.Model {
    'use strict';

    export class DaysOfWeek {
        list:Array<DayOfWeek>;
        names:Array<string>;
        shorts:Array<string>;

        constructor(days?:Array<DayOfWeek>) {
            if (!(this instanceof DaysOfWeek)) {
                apd.Model.MessagesFactoryClass.throwWrongClassCreationMessage();
                return new DaysOfWeek(days);
            }

            if (days) {
                this.list = days;
                this.shorts = this.getListOfShorts();
                this.names = this.getListOfNames();
                return this;
            } else {
                return this._setDefaultDaysOfWeek();
            }

        }

        private _setDefaultDaysOfWeek = () => {
            return new DaysOfWeek([
                new apd.Model.DayOfWeek('Sunday', 'Sun'),
                new apd.Model.DayOfWeek('Monday', 'Mon'),
                new apd.Model.DayOfWeek('Tuesday', 'Tue'),
                new apd.Model.DayOfWeek('Wednesday', 'Wed'),
                new apd.Model.DayOfWeek('Thursday', 'Thu'),
                new apd.Model.DayOfWeek('Friday', 'Fri'),
                new apd.Model.DayOfWeek('Saturday', 'Sat')
            ]);
        };

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