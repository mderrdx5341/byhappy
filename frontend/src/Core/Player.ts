import Cart from './Cart';
import Observer from './Observer';

class Player
{
    private _money: number;
    private _level: number;
    private _energy: number;

    constructor()
    {
        this._level = 0;
        this._money = 0;
        this._energy = 16;
    }

    public addMoney(money: number)
    {
        this._money += money;
    }

    public setMoney(money: number)
    {
        this._money = money;
    }

    public getMoney(): number
    {
        return this._money;
    }

    public getEnergy(): number
    {
        return this._energy;
    }

    public subEnergy(energy)
    {
        if (this._energy < energy) {
            throw new Error('Не хватает энергии');
        }
        this._energy -= energy;
    }

    public addEnergy(energy)
    {
        this._energy += energy;
    }

    public addLevel(level: number)
    {
        this._level += level;
    }

    public getLevel(): number
    {
        return this._level;
    }
}

export default Player;