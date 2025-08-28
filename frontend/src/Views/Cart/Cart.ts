import * as Core from '../../Core';
import * as Views from '../.';

class Cart
{
    private _id: number;
    private _cart: Core.Cart;

    constructor(id: number, cart: Core.Cart)
    {
        this._id = id;
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
        type.innerHTML = this._cart.getType();

        let btnDetails: HTMLElement = document.createElement('button');
        btnDetails.className = 'cart__details';
        btnDetails.innerHTML = 'details';

        btnDetails.addEventListener('click', () => {
            let popup = new Views.PopUp(
                this._cart.title(),
                this._cart.description()
            );
            popup.show();
        });

        let btnUse = document.createElement('button');
        btnUse.className = 'cart__use';
        btnUse.innerHTML = 'use';
        btnUse.addEventListener('click', () => this.use());

        html.append(title);
        html.append(description);
        html.append(type);
        html.append(btnDetails);
        html.append(btnUse);

        return html;
    }

    public use() {
        try {
            this._cart.use(this._id);
        } catch (e) {
            let popup = new Views.PopUp(e.message, 'Используй или удаляй');
            popup.show();
        }
    }
}

export default Cart;