import * as Core from '.';

class PlayerWithObserver extends Core.Player
{
    private _observer: Core.Observer;

    public constructor(observer: Core.Observer)
    {
        super();
        this._observer = observer;
    }

    public addMoney(money: number)
    {
        super.addMoney(money);
        this.updated();
    }

    public addHungre(hungre: number): void {
        super.addHungre(hungre);
        this.updated();
    }

    public subHungre(hungre: number): void {
        super.subHungre(hungre)
        this.updated();
    }

    public subEnergy(energy: number)
    {
        super.subEnergy(energy);
        this.updated();
    }

    public addEnergy(energy: number)
    {
        super.addEnergy(energy);
        this.updated();
    }

    public addLevel(level: number): void {
        super.addLevel(level);
        this.updated();
    }

    public updated()
    {
        this._observer.updated();
    }
}

export default PlayerWithObserver;