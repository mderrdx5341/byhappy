import Cart from './Cart';
import Observer from './Observer';

class Player
{
    private _observer: Observer;
    private _money: number;
    private _level: number;

    private _carts: Cart[];

    constructor(observer: Observer)
    {
        this._observer = observer;
        this._carts = [];
        this._level = 0;
        this._money = 0;
    }

    public addCart(cart: Cart)
    {
        this._carts.push(cart);
    }

    public getCarts()
    {
        return this._carts;
    }

    public getCartById(id): Cart
    {
        return this._carts[id];
    }

    public addMoney(money: number)
    {
        this._money += money;
        this.updated();
    }

    public setMoney(money: number)
    {
        this._money = money;
    }

    public money(): number
    {
        return this._money;
    }

    public level(): number
    {
        return this._level;
    }

    public updated()
    {
        this._observer.updated();
    }
}

export default Player;