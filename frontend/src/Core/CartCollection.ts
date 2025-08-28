import Cart from "./Cart";

class CartCollection
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

    public getCartById(id): Cart
    {
        return this._carts[id];
    }
}

export default CartCollection