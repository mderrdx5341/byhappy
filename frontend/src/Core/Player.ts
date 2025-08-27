import Cart from './Cart';

class Player
{
    private _money: Number;
    private _level: Number;

    private _carts: Cart[];

    constructor()
    {
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

    public setMoney(money: Number)
    {
        this._money = money;
    }

    public money(): Number
    {
        return this._money;
    }

    public level(): Number
    {
        return this._level;
    }
}

export default Player;