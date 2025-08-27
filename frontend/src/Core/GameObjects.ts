import * as Core from '.';

class GameObjects
{
    private _step: Core.Step;
    private _player: Core.Player;
    private _history: string; //TODO 

    public constructor(step, player, history: string = 'todo')
    {
        this._step = step;
        this._player = player;
        this._history = history;
    }

    public getStep(): Core.Step
    {
        return this._step;
    }

    public getPlayer(): Core.Player
    {
        return this._player;
    }

    public getHistory()
    {
        return this._history;
    }
}

export default GameObjects;