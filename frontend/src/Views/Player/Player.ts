import * as Core from '../../Core';

class Player implements Core.ISubscriber
{
    private _player: Core.Player;
    private _moneyHtml: HTMLElement;
    private _energyHtml: HTMLElement;
    
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

        this._energyHtml = document.createElement('div');
        this._energyHtml.className = 'player__money';
        this._energyHtml.innerHTML = 'Енергия: ' + this._player.getEnergy();

        player.appendChild(this._energyHtml);
        player.appendChild(this._moneyHtml);
        
        player.appendChild(level);

        return player;
    }

    public update()
    {
        this.updateMonery();
        this.updateEnergy();
    }

    public updateMonery()
    {
        this._moneyHtml.innerHTML = 'Деньги: ' + this._player.money();
    }

    public updateEnergy()
    {
        this._energyHtml.innerHTML = 'Енергия: ' + this._player.getEnergy();
    }
}

export default Player;
