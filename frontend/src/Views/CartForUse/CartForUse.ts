import * as Core from '../../Core';
import * as Views from '../.';

class CartForUse implements Core.ISubscriber
{
    private _cartForUse: Core.CartForUse;
    private _cartsPanelHtml: HTMLElement;
    private _cartsList: HTMLElement;
    private _actionPanel: HTMLElement;
    private _btnUse: HTMLButtonElement;

    public constructor(cartForUse: Core.CartForUse)
    {
        this._cartForUse = cartForUse;
    }

    public html() {

        this._cartsPanelHtml = document.createElement('div');
        this._cartsPanelHtml.className = 'carts-panel';

        this._cartsList = document.createElement('div');
        this._cartsList.className = 'carts-panel__list';

        this._actionPanel = document.createElement('div');
        this._actionPanel.className = 'carts-panel__actions';

        this._btnUse = document.createElement('button');
        this._btnUse.className = 'btn-use';
        this._btnUse.innerHTML = 'use';
        this._btnUse.addEventListener('click', () => this.use());
        this._btnUse.disabled = true;
        

        this._cartsPanelHtml.appendChild(this._cartsList);
        this._cartsPanelHtml.appendChild(this._actionPanel);
        this._actionPanel.appendChild(this._btnUse);
        

        return this._cartsPanelHtml;
    }

    public update()
    {
        this._cartsList.innerHTML = '';
        this._cartForUse.getCarts().forEach((c, i, cl) => {
            let cart = new Views.CartUse(i, c);
            this._cartsList.appendChild(cart.html());
        });

        if (this._cartForUse.getCarts().length > 0 ) {
            this._btnUse.disabled = false;
        } else {
            this._btnUse.disabled = true;
        }
    }

    public use()
    {
        try {
            this._cartForUse.use();
        } catch (e) {
            let popup = new Views.PopUp('Нельзя использовать карту', e.message);
            popup.show();
        }
    }
}

export default CartForUse;