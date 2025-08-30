import Cart from "../Core/Cart";
import GameObjects from "../Core/GameObjects";
import * as Carts from './.';

class DBCarts
{
    private _carts: Cart[];
    private _gameObjects: GameObjects;

    public registyCart()
    {
        this._carts.push(new Carts.Work(this._gameObjects));
        this._carts.push(new Carts.Work1(this._gameObjects));
        this._carts.push(new Carts.Sleep(this._gameObjects));
        this._carts.push(new Carts.Learning(this._gameObjects));
        this._carts.push(new Carts.ToEat(this._gameObjects));
    }

    constructor(gameObjects: GameObjects)
    {
        this._carts = [];
        this._gameObjects = gameObjects;
        this.registyCart();
    }

    public addCart(cart: Cart)
    {
        this._carts.push(cart)
    }

    public getCarts(): Cart[]
    {
        return this._carts;
    }


}

export default DBCarts;