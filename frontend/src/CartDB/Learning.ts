import Cart from "../Core/Cart";
import CartType from "../Core/CartType";
import GameObjects from "../Core/GameObjects";

class Learning extends Cart{
    public constructor(gameObjects: GameObjects) {
        super(gameObjects);
        this._name = 'Learning';
        this._description = 'sub 2 hours<br>sub 3 energy<br>add 1 level';
        this._type = CartType.Action;
        this._tag = 'Learning';
    }
    
    public action()
    {
        this._gameObjects.getPlayer().addHungre(1);
        this._gameObjects.getPlayer().subEnergy(3);
        this._gameObjects.getTime().addHours(2);
        this._gameObjects.getPlayer().addLevel(1);
        this._gameObjects.getCartCollection().findCarts(CartType.Action, 'Work');
    }
}

export default Learning;