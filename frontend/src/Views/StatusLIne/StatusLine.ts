import * as Core from '../../Core';

class StatusLine implements Core.ISubscriber
{
    private _time: Core.Time;
    private _daysHtml: HTMLElement;
    private _hoursHtml: HTMLElement;

    public constructor(step: Core.Time)
    {
        this._time = step;
    }

    public html()
    {
        let statusLine = document.createElement('div');
        statusLine.className = 'status-line';

        this._daysHtml = document.createElement('div');
        this._daysHtml.className = 'status-line__days';
        this._daysHtml.innerHTML = 'Days: ' + this._time.getDays();

        this._hoursHtml = document.createElement('div');
        this._hoursHtml.className = 'status-line__hours';
        this._hoursHtml.innerHTML = 'Hours: ' + this._time.getHours();

        statusLine.appendChild(this._daysHtml);
        statusLine.appendChild(this._hoursHtml);

        return statusLine;
    }

    public update()
    {
        this._hoursHtml.innerHTML = 'Hours: ' + this._time.getHours();
        this._daysHtml.innerHTML = 'Days: ' + this._time.getDays();
    }
}

export default StatusLine;