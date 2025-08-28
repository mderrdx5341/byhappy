import * as Core from '../../Core';
import * as Views from '..';

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
        if(this._cartForUse.getCartAction() === null) {
            this._cartsList.innerHTML = '';
            this._btnUse.disabled = true;
            return;
        }
        this._cartsList.innerHTML = '';
        let actionCart = this._cartForUse.getCartAction();
        let actionCartHtml = new Views.CartUse(999, actionCart);
        this._cartsList.appendChild(actionCartHtml.html());

        this._cartForUse.getCartsImprove().forEach((c, i, cl) => {
            let cartImrove = new Views.CartUse(i, c);
            this._cartsList.appendChild(cartImrove.html());
        });


        if (this._cartForUse.getCartAction()) {
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