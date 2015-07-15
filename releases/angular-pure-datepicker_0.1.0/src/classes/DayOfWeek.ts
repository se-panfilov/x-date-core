/// <reference path="DataClass.ts" />

module apd.Model {
    'use strict';

    export class DayOfWeek {
        name:string;
        short:string;

        constructor(name:string, short:string) {
            if (!(this instanceof DayOfWeek)) {
                apd.Model.MessagesFactoryClass.throwWrongClassCreationMessage();
                return new DayOfWeek(name, short);
            }

            this.name = name;
            this.short = short;

            return this;
        }
    }
}