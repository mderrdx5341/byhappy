import Cart from './Cart';

class Player
{
    private _money: Number;
    private _carts: Cart[];

    constructor()
    {
        this._carts = [];
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
}

export default Player;