module apd.interfaces {

    export interface DateModel {
        day: number;
        dayOfWeek: number;
        month: number;
        year: number;
        datetime: number;
    }

    export class Data {
        selected: DateModel;
        days: Array<number>;
        month: Array<number>;
        years: Array<number>;
    }

}