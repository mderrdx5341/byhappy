import Cart from './Cart';
import * as CartsLibrary from './CartsLibrary';
import CartType from "./CartType";
import GameObjects from './GameObjects';

class CartRepository
{
    private _gameObjects;

    constructor(gameObjects: GameObjects)
    {
        this._gameObjects = gameObjects;
    }

    public getCart(type: CartType, tag: string): Cart
    {
        if (type == CartType.Action && tag === 'Work') {
            return new CartsLibrary.Work(this._gameObjects);
        }

        if (type == CartType.Action && tag === 'Sleep') {
            return new CartsLibrary.Sleep(this._gameObjects);
        }

        if (type == CartType.Action && tag === 'Learning') {
            return new CartsLibrary.Learning(this._gameObjects);
        }

        if (type == CartType.Action && tag === 'ToEat') {
            return new CartsLibrary.ToEat(this._gameObjects);
        }
    }
}

export default CartRepository;