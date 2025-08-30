import CartCollection from "./CartCollection";
import CartRepository from "./CartRepository";
import CartType from "./CartType";
import GameObjects from "./GameObjects";
import Observer from "./Observer";

class CartCollectionWithObserver extends CartCollection
{
    private _observer: Observer;

    public constructor(gameObjects: GameObjects, observer: Observer)
    {
        super(gameObjects);
        this._observer = observer;
    }

    public findCarts(type: CartType, tag: string): void {
        super.findCarts(type, tag);
        this.updated();
    }

    public updated()
    {
        this._observer.updated();
    }
}

export default CartCollectionWithObserver;