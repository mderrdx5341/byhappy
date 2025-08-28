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
    private _action: CallableFunction;
    private _isOne: boolean;
    private _isImprove: boolean;
    private _amountCartImprove: number;

    constructor(
        gameObject: GameObjects,
        name: string = 'title',
        description: string = 'description',
        type: CartType = CartType.Action,
        action: CallableFunction = () => {}
    )
    {
        this._action = action;
        this._gameObjects = gameObject;
        this._name = name;
        this._description = description;
        this._type = type;
        this._isOne = true;
        this._isImprove = true;
        this._amountCartImprove = 1;
    }

    public title()
    {
        return this._name;
    }

    public isOne(): boolean
    {
        return this._isOne;
    }

    public isImprove()
    {
        return this._isImprove;
    }

    public amountCartImprove()
    {
        return 2;
    }

    public description()
    {
        return this._description;
    }

    public use(id)
    {
        this._gameObjects.getCartForUse().addCart(
            this._gameObjects.getCartCollection().getCartById(id)
        );
    }

    public delAction()
    {
        this._gameObjects.getCartForUse().delCartAction();
    }

    public delImprove(id)
    {
        this._gameObjects.getCartForUse().delCartImrove(id);
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

    public getType()
    {
        return this._type;
    }
}

export default Cart;