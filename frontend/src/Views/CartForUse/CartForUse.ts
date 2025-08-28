import * as Core from '../../Core';
import * as Views from '../.';

class CartForUse implements Core.ISubscriber
{
    private _cartForUse: Core.CartForUse;
    private _cartsHtml: HTMLElement;

    public constructor(cartForUse: Core.CartForUse)
    {
        this._cartForUse = cartForUse;
    }

    public html() {
        this._cartsHtml = document.createElement('div');
        this._cartsHtml.className = 'carts-use';

        return this._cartsHtml;
    }

    public update()
    {
        this._cartsHtml.innerHTML = '';
        this._cartForUse.getCarts().forEach((c, i, cl) => {
            let cart = new Views.Cart(i, c);
            this._cartsHtml.appendChild(cart.html());
        });
    }
}

export default CartForUse;