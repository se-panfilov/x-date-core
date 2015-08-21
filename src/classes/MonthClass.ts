module apd.Model {
    'use strict';

    export class MonthClass {
        month:Array<string>;

        constructor(month?:Array<string>) {
            if (month) {
                this.month = month;
                return this;
            } else {
                return this._setDefault();
            }
        }

        private _setDefault = () => {
            return new MonthClass(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
        };

        getName = (monthNum:number) => {
             return this.month[monthNum];
        };
    }

}