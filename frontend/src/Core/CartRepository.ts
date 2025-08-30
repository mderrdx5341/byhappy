import Cart from './Cart';
import * as CartsLibrary from './CartsLibrary';
import CartType from "./CartType";
import GameObjects from './GameObjects';
import DBCarts from './CartsLibrary/DBCarts';

class CartRepository
{
    private _gameObjects;
    private _cartsDB: DBCarts;

    constructor(gameObjects: GameObjects, cartsDB: DBCarts)
    {
        this._gameObjects = gameObjects;
        this._cartsDB = cartsDB;
    }

    public getCarts(type: CartType, tag: string): Cart[]
    {
        return this._cartsDB.getCarts().filter((c, i, ca ) => {
            if(c.getType() === type && c.getTag() === tag ) {
                return c;
            }
        });

        if (type == CartType.Action && tag === 'Sleep') {
            return [new CartsLibrary.Sleep(this._gameObjects)];
        }

        if (type == CartType.Action && tag === 'Learning') {
            return [new CartsLibrary.Learning(this._gameObjects)];
        }

        if (type == CartType.Action && tag === 'ToEat') {
            return [new CartsLibrary.ToEat(this._gameObjects)];
        }
    }
}

export default CartRepository;