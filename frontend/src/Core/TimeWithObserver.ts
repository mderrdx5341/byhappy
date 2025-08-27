import * as Core from '.';

class TimeWithObserver extends Core.Time
{
    private _observer;

    public constructor(observer: Core.Observer)
    {
        super();
        this._observer = observer;
    }

    public addHours(steps: number = 1)
    {
        super.addHours(steps);
        this.updated();
    }

    public subHours(steps: number = 1)
    {
        super.subHours(steps);
        this.updated();
    }

    public updated()
    {
        this._observer.updated();
    }
}

export default TimeWithObserver;