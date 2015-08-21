module apd.Model {
    'use strict';

    export class DaysClass {
        days:Array<string>;

        constructor(days?:Array<string>) {
            if (days) {
                this.days = days;
                return this;
            } else {
                return this._setDefault();
            }

        }

        private _setDefault = () => {
            return new DaysClass(['Sun', 'Mon', 'Tue', 'Wed', 'Thu','Fri', 'Sat']);
        };

        getName = (dayNum:number) => {
            return this.days[dayNum];
        };
    }

}