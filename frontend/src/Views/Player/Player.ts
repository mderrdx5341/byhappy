import * as Core from '../../Core';

class Player
{
    private _player: Core.Player;
    private _moneyHtml: HTMLElement;
    
    constructor(player: Core.Player)
    {
        this._player = player;
    }

    public html()
    {
        let player = document.createElement('div');
        player.className = 'player';

        this._moneyHtml = document.createElement('div');
        this._moneyHtml.className = 'player__money';
        this._moneyHtml.innerHTML = 'Деньги: ' + this._player.money();

        let level = document.createElement('div');
        level.className = 'player__money';
        level.innerHTML = 'Уровень: ' + this._player.level();

        player.appendChild(this._moneyHtml);
        player.appendChild(level);

        return player;
    }

    public updateMonery()
    {
        this._moneyHtml.innerHTML = 'Деньги: ' + this._player.money();
    }
}

export default Player;
