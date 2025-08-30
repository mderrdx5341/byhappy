import Cart from "../Cart";
import CartType from "../CartType";
import GameObjects from "../GameObjects";

class ToEat extends Cart{
    public constructor(gameObjects: GameObjects) {
        super(gameObjects);
        this._name = 'ToEat';
        this._description = 'sub Hungre 3<br>sub 1 energy<br>sub 1 hours';
        this._type = CartType.Action;
        this._tag = 'ToEat';
    }
    
    public action()
    {
        this._gameObjects.getPlayer().subHungre(3);
        this._gameObjects.getTime().addHours(1);
        this._gameObjects.getPlayer().subEnergy(1);
    }

    public registry()
    {

    }
}

export default ToEat;