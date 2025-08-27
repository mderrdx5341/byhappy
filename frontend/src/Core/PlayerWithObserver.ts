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

    public subEnergy(energy)
    {
        super.subEnergy(energy);
        this.updated();
    }

    public addEnergy(energy)
    {
        super.addEnergy(energy);
        this.updated();
    }

    public updated()
    {
        this._observer.updated();
    }
}

export default PlayerWithObserver;