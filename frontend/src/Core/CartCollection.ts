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

    public addCarts(carts: Cart[])
    {
        carts.forEach((c, i , ca) => { 
            this._carts.push(c);
        })
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