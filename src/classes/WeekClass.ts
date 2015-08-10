/// <reference path="MessagesFactoryClass.ts" />

module apd.Model {
    'use strict';

    export class WeekClass {
        days:Array<string>;

        constructor(days?:Array<string>) {
            if (!(this instanceof WeekClass)) {
                apd.Model.MessagesFactoryClass.throwWrongClassCreationMessage();
                return new WeekClass(days);
            }

            if (days) {
                this.days = days;
                return this;
            } else {
                return this._setDefaultWeek();
            }

        }

        private _setDefaultWeek = () => {
            return new WeekClass(['Sun', 'Mon', 'Tue', 'Wed', 'Thu','Fri', 'Sat']);
        };

        getDayName = (dayNum:number) => {
            if (!(this instanceof WeekClass)) {
                apd.Model.MessagesFactoryClass.throwWrongInstanceMessage();
                return null;
            }

            return this.days[dayNum];
        };
    }

}