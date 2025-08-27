import Effect from './Effect';
import CartType from './CartType';
import GameObjects from './GameObjects';

class Cart
{
    private _gameObjects: GameObjects;
    private _name: string = 'title';
    private _description: string = 'description';
    private _effects: Effect[];
    private _type: CartType;
    private _action;

    constructor(
        gameObject: GameObjects,
        name: string = 'title',
        description: string = 'description',
        type: CartType = CartType.Item,
        action: CallableFunction = () =>{}
    )
    {
        this._action = action;
        this._gameObjects = gameObject;
        this._name = name;
        this._description = description;
        this._type = type;
    }

    public title()
    {
        return this._name;
    }

    public description()
    {
        return this._description;
    }

    public effects()
    {

    }

    public setAction(action: CallableFunction)
    {
        this._action = action;
    }

    public action()
    {
        this._action();
    }

    public type()
    {
        return this._type;
    }
}

export default Cart;