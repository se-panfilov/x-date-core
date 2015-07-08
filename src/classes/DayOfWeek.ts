module apd.Model {
    'use strict';

    export class DayOfWeek {
        name:string;
        short:string;

        constructor(name:string, short:string) {
            if (!(this instanceof DayOfWeek)) {
                apd.messages.MessagesFactoryClass.throwWrongInstanceMessage();
                return new DayOfWeek(name, short);
            }

            this.name = name;
            this.short = short;

            return this;
        }
    }
}