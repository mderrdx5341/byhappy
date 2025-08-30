import * as Core from '../../Core';
import * as Views from '../.';

class CartCollection
{
    private _cartCollection: Core.CartCollection;
    private _html: HTMLElement;

    public constructor(cartCollection: Core.CartCollection)
    {
        this._cartCollection = cartCollection;
    }

    public html(): HTMLElement
    {
        this._html = document.createElement('div');
        this._html.className = 'carts';

        for (let i: number = 0; i < this._cartCollection.getCarts().length; i++) {
                this._html.append((new Views.Cart(i, this._cartCollection.getCarts()[i])).html());
        }

        return this._html;
    }

    public update()
    {
        this._html.innerHTML = '';
        for (let i: number = 0; i < this._cartCollection.getCarts().length; i++) {
                this._html.append((new Views.Cart(i, this._cartCollection.getCarts()[i])).html());
        }   
    }
}

export default CartCollection;