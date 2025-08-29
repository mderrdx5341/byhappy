import Cart from "../Cart";
import CartType from "../CartType";
import GameObjects from "../GameObjects";

class Work extends Cart 
{
    public constructor(gameObjects: GameObjects) {
        super(gameObjects);
        this._name = 'Work';
        this._description = 'add 1 money<br>sub 8 energy<br>sub 8 hours';
        this._type = CartType.Action;
    }
    
    public action()
    {
        this._gameObjects.getPlayer().addHungre(3);
        this._gameObjects.getPlayer().subEnergy(8);
        this._gameObjects.getPlayer().addMoney(1);
        this._gameObjects.getTime().addHours(8);
    }

    public registry()
    {

    }
}

export default Work;