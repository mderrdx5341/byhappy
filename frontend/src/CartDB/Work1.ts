import Cart from "../Core/Cart";
import CartType from "../Core/CartType";
import GameObjects from "../Core/GameObjects";

class Work1 extends Cart 
{
    public constructor(gameObjects: GameObjects) {
        super(gameObjects);
        this._name = 'Work1';
        this._description = 'zzadd 1 money<br>sub 8 energy<br>sub 8 hours';
        this._type = CartType.Action;
        this._tag = 'Work';
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

    public condition(): Cart {

        if (this._gameObjects.getPlayer().getLevel() === 0)
        {
            return this;
        }
    }
}

export default Work1;