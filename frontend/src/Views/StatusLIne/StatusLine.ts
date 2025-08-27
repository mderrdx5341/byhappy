import * as Core from '../../Core';

class StatusLine
{
    private _step: Core.Step;
    private _stepHtml: HTMLElement;

    public constructor(step: Core.Step)
    {
        this._step = step;
    }

    public html()
    {
        let statusLine = document.createElement('div');
        statusLine.className = 'status-line';

        this._stepHtml = document.createElement('div');
        this._stepHtml.className = 'status-line__step';
        this._stepHtml.innerHTML = 'Step: ' + this._step.getStep();

        statusLine.appendChild(this._stepHtml);

        return statusLine;
    }

    public updateStep()
    {
        this._step.addStep();
        this._stepHtml.innerHTML = 'Step: ' + this._step.getStep();
    }
}

export default StatusLine;