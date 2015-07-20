/// <reference path="DataClass.ts" />

module apd.Model {
    'use strict';

    export class DayClass {
        name:string;
        short:string;

        constructor(name:string, short:string) {
            if (!(this instanceof DayClass)) {
                apd.Model.MessagesFactoryClass.throwWrongClassCreationMessage();
                return new DayClass(name, short);
            }

            this.name = name;
            this.short = short;

            return this;
        }
    }
}