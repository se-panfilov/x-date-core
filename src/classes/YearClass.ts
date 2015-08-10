/// <reference path="MessagesFactoryClass.ts" />

module apd.Model {
    'use strict';

    export class YearClass {
        month:Array<string>;

        constructor(month?:Array<string>) {
            if (!(this instanceof YearClass)) {
                apd.Model.MessagesFactoryClass.throwWrongClassCreationMessage();
                return new YearClass(month);
            }

            if (month) {
                this.month = month;
                return this;
            } else {
                return this._setDefaultYear();
            }

        }

        private _setDefaultYear = () => {
            return new YearClass(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
        };

        getMonthName = (monthNum:number) => {
            if (!(this instanceof YearClass)) {
                apd.Model.MessagesFactoryClass.throwWrongInstanceMessage();
                return null;
            }

            return this.month[monthNum];
        };
    }

}