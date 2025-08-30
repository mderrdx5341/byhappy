import Cart from "./Cart";
import CartType from "./CartType";
import GameObjects from "./GameObjects";

class CartCollection
{
    private _carts: Cart[];
    private _gameObjects;
    
    public constructor(gameObjects: GameObjects)
    {
        this._gameObjects = gameObjects;
        this._carts = [];
    }

    public addCart(cart: Cart)
    {
        this._carts.push(cart);
    }

    public findCarts(type: CartType, tag: string)
    {
        this.addCarts(this._gameObjects.getCartRepository().getCarts(type, tag));
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