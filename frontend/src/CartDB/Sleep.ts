import Cart from "../Core/Cart";
import CartType from "../Core/CartType";
import GameObjects from "../Core/GameObjects";

class Sleep extends Cart
{
    public constructor(gameObjects: GameObjects) {
        super(gameObjects);
        this._name = 'Sleep';
        this._description = 'add 16 energy<br>sub 8 hours';
        this._type = CartType.Action;
        this._tag = 'Sleep';
    }
    
    public action()
    {
        this._gameObjects.getPlayer().addHungre(1);
        this._gameObjects.getPlayer().addEnergy(16);
        this._gameObjects.getTime().addHours(8);
    }

    public registry()
    {

    }
}

export default Sleep;