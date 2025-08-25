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

        html.append(title);
        html.append(description);

        return html;
    }
}

export {Cart};