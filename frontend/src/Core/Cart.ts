import Effect from './Effect';
import CartType from './CartType';
import GameObjects from './GameObjects';

class Cart
{
    private _name: string = 'title';
    private _description: string = 'description';
    private _effects: Effect[];
    private _type: CartType;

    constructor(gameObject: GameObjects, name: string = 'title', description: string = 'description', type: CartType = CartType.Item)
    {
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

    public action()
    {

    }

    public type()
    {
        return this._type;
    }
}

export default Cart;