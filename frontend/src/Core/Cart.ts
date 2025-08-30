import Effect from './Effect';
import CartType from './CartType';
import GameObjects from './GameObjects';

class Cart
{
    protected _gameObjects: GameObjects;
    protected _name: string = 'title';
    protected _description: string = 'description';
    protected _effects: Effect[];
    protected _type: CartType;
    protected _action: CallableFunction;
    protected _isImprove: boolean;
    protected _amountCartImprove: number;
    protected _tag: string;

    public constructor(
        gameObject: GameObjects,
        name: string = 'title',
        description: string = 'description',
        type: CartType = CartType.Action,
        action: CallableFunction = () => {},
        tag: string = 'Work'
    )
    {
        this._action = action;
        this._gameObjects = gameObject;
        this._name = name;
        this._description = description;
        this._type = type;
        this._isImprove = true;
        this._amountCartImprove = 1;
    }

    public title()
    {
        return this._name;
    }

    public isImprove()
    {
        return this._isImprove;
    }

    public amountCartImprove()
    {
        return this._amountCartImprove;
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

    public getTag()
    {
        return this._tag;
    }

    public condition(): boolean
    {
        return true;
    }
}

export default Cart;