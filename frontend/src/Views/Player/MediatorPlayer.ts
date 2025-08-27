import * as Core from '../../Core';
import * as Views from '..';

class MediatorPlayer
{
    private _player; 
    private _viewPlayer;

    public constructor(player: Core.Player, viewPlayer: Views.Player)
    {
        this._player = player;
        this._viewPlayer = viewPlayer;
    }
    action(money)
    {
        this._player.addMoney(money);
        this._viewPlayer.updateMonery();
    }
}

export default MediatorPlayer;