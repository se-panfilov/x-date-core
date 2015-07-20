/// <reference path="DataClass.ts" />
/// <reference path="DayClass.ts" />

module apd.Model {
    'use strict';

    export class WeekClass {
        list:Array<DayClass>;
        names:Array<string>;
        shorts:Array<string>;

        constructor(days?:Array<DayClass>) {
            if (!(this instanceof WeekClass)) {
                apd.Model.MessagesFactoryClass.throwWrongClassCreationMessage();
                return new WeekClass(days);
            }

            if (days) {
                this.list = days;
                this.shorts = this.getListOfShorts();
                this.names = this.getListOfNames();
                return this;
            } else {
                return this._setDefaultWeek();
            }

        }

        private _setDefaultWeek = () => {
            return new WeekClass([
                new apd.Model.DayClass('Sunday', 'Sun'),
                new apd.Model.DayClass('Monday', 'Mon'),
                new apd.Model.DayClass('Tuesday', 'Tue'),
                new apd.Model.DayClass('Wednesday', 'Wed'),
                new apd.Model.DayClass('Thursday', 'Thu'),
                new apd.Model.DayClass('Friday', 'Fri'),
                new apd.Model.DayClass('Saturday', 'Sat')
            ]);
        };

        private getListOfShorts = () => {
            if (!(this instanceof WeekClass)) {
                apd.Model.MessagesFactoryClass.throwWrongInstanceMessage();
                return null;
            }

            var result = [];

            for (var i = 0; i < this.list.length; i++) {
                var day = this.list[i];
                result.push(day.short);
            }

            return result;
        };

        private getListOfNames = () => {
            if (!(this instanceof WeekClass)) {
                apd.Model.MessagesFactoryClass.throwWrongInstanceMessage();
                return null;
            }

            var result = [];

            for (var i = 0; i < this.list.length; i++) {
                var day = this.list[i];
                result.push(day.name);
            }

            return result;
        };

        getDayShortName = (dayNum:number) => {
            if (!(this instanceof WeekClass)) {
                apd.Model.MessagesFactoryClass.throwWrongInstanceMessage();
                return null;
            }

            return this.shorts[dayNum];
        };

        getDayName = (dayNum:number) => {
            if (!(this instanceof WeekClass)) {
                apd.Model.MessagesFactoryClass.throwWrongInstanceMessage();
                return null;
            }

            return this.names[dayNum];
        };
    }

}