import * as Core from '../../Core';
import * as Views from '..';

class MediatorPlayer
{
    private _statusLine: Views.StatusLine;
    private _player; 
    private _viewPlayer;

    public constructor(statusLine: Views.StatusLine, player: Core.Player, viewPlayer: Views.Player)
    {
        this._statusLine = statusLine;
        this._player = player;
        this._viewPlayer = viewPlayer;
    }
    action(money)
    {
        this._player.addMoney(money);
        this._viewPlayer.updateMonery();
        this._statusLine.updateStep();
    }
}

export default MediatorPlayer;