import * as Core from '.';

class CartForUseWithObserver extends Core.CartForUse
{
    private _observer: Core.Observer;

    public constructor(observer: Core.Observer)
    {
        super();
        this._observer = observer;
    }

    public addCart(cart: Core.Cart): void {
        super.addCart(cart);
        this._observer.updated();
    }

    public delCart(id)
    {
        super.delCart(id);
        this._observer.updated();
    }
    public use()
    {
        super.use();
        this._observer.updated();
    }
}

export default CartForUseWithObserver;