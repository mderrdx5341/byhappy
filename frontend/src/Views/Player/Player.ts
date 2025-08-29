import * as Core from '../../Core';

class Player implements Core.ISubscriber
{
    private _player: Core.Player;
    private _hungerHtml: HTMLElement; 
    private _moneyHtml: HTMLElement;
    private _energyHtml: HTMLElement;
    private _levelHtml: HTMLElement;
    
    constructor(player: Core.Player)
    {
        this._player = player;
    }

    public html()
    {
        let player = document.createElement('div');
        player.className = 'player';

        this._hungerHtml = document.createElement('div');
        this._hungerHtml.className = 'player__hunger';
        this._hungerHtml.innerHTML = 'Голод: ' + this._player.getMoney();

        this._moneyHtml = document.createElement('div');
        this._moneyHtml.className = 'player__money';
        this._moneyHtml.innerHTML = 'Деньги: ' + this._player.getMoney();

        this._levelHtml = document.createElement('div');
        this._levelHtml.className = 'player__money';
        this._levelHtml.innerHTML = 'Уровень: ' + this._player.getLevel();

        this._energyHtml = document.createElement('div');
        this._energyHtml.className = 'player__money';
        this._energyHtml.innerHTML = 'Енергия: ' + this._player.getEnergy();

        player.appendChild(this._hungerHtml);
        player.appendChild(this._energyHtml);
        player.appendChild(this._moneyHtml);
        player.appendChild(this._levelHtml);

        return player;
    }

    public update()
    {
        this.updateMonery();
        this.updateEnergy();
        this.updateLevel();
        this.updateHunger();
    }

    public updateMonery()
    {
        this._moneyHtml.innerHTML = 'Деньги: ' + this._player.getMoney();
    }

    public updateHunger()
    {
        this._hungerHtml.innerHTML = 'Голод: ' + this._player.getHunger();
    }

    public updateEnergy()
    {
        this._energyHtml.innerHTML = 'Енергия: ' + this._player.getEnergy();
    }

    public updateLevel()
    {
        this._levelHtml.innerHTML = 'Уровень: ' + this._player.getLevel();
    }
}

export default Player;
