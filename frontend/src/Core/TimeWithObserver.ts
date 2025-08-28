import * as Core from '.';

class TimeWithObserver extends Core.Time
{
    private _observer;

    public constructor(observer: Core.Observer)
    {
        super();
        this._observer = observer;
    }

    public addHours(hours: number = 1)
    {
        super.addHours(hours);
        this.updated();
    }

    public subHours(hours: number = 1)
    {
        super.subHours(hours);
        this.updated();
    }

    public updated()
    {
        this._observer.updated();
    }
}

export default TimeWithObserver;