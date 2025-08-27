import * as Core from '../../Core';

class Cart
{
    private _cart: Core.Cart;

    constructor(cart: Core.Cart)
    {
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

        html.append(title);
        html.append(description);
        html.append(type);
        html.append(btnDetails);

        return html;
    }
}

export default Cart;