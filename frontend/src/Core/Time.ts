import Cart from './Cart';
import Observer from './Observer';

class Time
{
    private _time: number;
    private _hours: number;
    private _days: number;

    public constructor()
    {
        this._time = 8;
        this._hours = 0;
        this._days = 0;
    }

    public getDays(): number
    {
        return this._days;
    }

    public getTime(): number
    {
        return this._time;
    }

    public addHours(hours: number = 1)
    {
        this._hours += hours;
        this._days = Math.floor((this._hours + 8)  / 24);

        let t = 8 + this._hours;
        console.log(24 * this._days)
        console.log(t);
        if (t > 24) {
            this._time = t - (24 * this._days);
        } else {
            this._time = t;
        }
    }

    public subHours(hours: number = 1)
    {
        this._hours -= hours;
        this._days = Math.floor(this._hours  / 24);
    }

    public getHours(): number
    {
        return this._hours;
    }
}

export default Time;