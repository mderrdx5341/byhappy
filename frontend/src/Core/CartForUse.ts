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

    public delCart(id)
    {
        this._carts.splice(id, 1);
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
        this._carts = [];
    }
}

export default CartForUse;