import * as Core from '../../Core';

class Player
{
    private _player: Core.Player;
    
    constructor(player: Core.Player)
    {
        this._player = player;
    }

    public html()
    {
        let player = document.createElement('div');
        player.className = 'player';

        let money = document.createElement('div');
        money.className = 'player__money';
        money.innerHTML = 'Деньги: ' + this._player.money();

        let level = document.createElement('div');
        level.className = 'player__money';
        level.innerHTML = 'Уровень: ' + this._player.level();

        player.appendChild(money);
        player.appendChild(level);

        return player;
    }
}

export default Player;
