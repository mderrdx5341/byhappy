import * as Core from '../../Core';
import * as Views from '../.';

class Cart
{
    private _statusLine: Views.StatusLine;
    private _cart: Core.Cart;

    constructor(statusLine: Views.StatusLine, cart: Core.Cart)
    {
        this._statusLine = statusLine;
        this._cart = cart;
    }

    html(): HTMLElement
    {
        let html: HTMLElement = document.createElement('div');
        html.className = 'cart';
        html.draggable= true;

        let title: HTMLElement = document.createElement('div');
        title.className = 'cart__title';
        title.innerHTML = this._cart.title();

        let description: HTMLElement = document.createElement('div');
        description.className = 'cart__description';
        description.innerHTML = this._cart.description();

        let type: HTMLElement = document.createElement('div');
        type.className = 'cart__type';
        type.innerHTML = this._cart.type();

        let btnDetails: HTMLElement = document.createElement('button');
        btnDetails.className = 'cart__details';
        btnDetails.innerHTML = 'details';

        btnDetails.addEventListener('click', () => alert(this._cart.description()));

        let btnAction = document.createElement('button');
        btnAction.className = 'cart__action';
        btnAction.innerHTML = 'action';
        btnAction.addEventListener('click', () => this.action());

        html.append(title);
        html.append(description);
        html.append(type);
        html.append(btnDetails);
        html.append(btnAction);

        return html;
    }

    public action()
    {
        this._statusLine.updateStep();
        alert('action Cart');
    }
}

export default Cart;