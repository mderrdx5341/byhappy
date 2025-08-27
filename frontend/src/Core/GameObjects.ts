import * as Core from '.';

class GameObjects
{
    private _time: Core.Time;
    private _player: Core.Player;
    private _history: string; //TODO 

    public constructor(time: Core.Time, player, history: string = 'todo')
    {
        this._time = time;
        this._player = player;
        this._history = history;
    }

    public getTime(): Core.Time
    {
        return this._time;
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