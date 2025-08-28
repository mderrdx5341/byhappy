import Cart from "./Cart";

class CartForUse
{
    private _carts: Cart[];

    public constructor()
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

    public use()
    {
        this._carts.forEach((c, i, cs) => {
            c.action();
        })
    }
}

export default CartForUse;