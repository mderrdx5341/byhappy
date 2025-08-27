import Cart from './Cart';
import Observer from './Observer';

class Time
{
    private _step: number;
    private _hours: number;
    private _days: number;

    public constructor()
    {
        this._step = 0;
        this._hours = 0;
        this._days = 0;
    }

    public getDays(): number
    {
        return this._days;
    }

    public addHours(steps: number = 1)
    {
        this._step += steps;
        this._days = Math.floor(this._step / 24);
    }

    public subHours(steps: number = 1)
    {
        this._step -= steps;
        this._days = Math.floor(this._step / 24);
    }

    public getHours(): number
    {
        return this._step;
    }
}

export default Time;