import * as Views from "../.";

class Desk
{
    private _html: HTMLElement;
    private _actions: HTMLElement;
    private _cartCollection: Views.CartCollection;
    private _cartForUse: Views.CartForUse;

    constructor(cartCollection: Views.CartCollection, cartForUse: Views.CartForUse)
    {
        this._cartCollection = cartCollection;
        this._cartForUse = cartForUse;

        this._html = document.createElement('div');
        this._html.classList.add('desc');
        
        this._actions = document.createElement('div');
        this._actions.classList.add('actions');

        this._html.appendChild(this._cartCollection.html());
        this._html.appendChild(this._cartForUse.html());
        this._html.appendChild(this._actions);
    }

    public html(): HTMLElement
    {
        return this._html;
    }

    public actions(): HTMLElement
    {
        return this._actions;
    }

    public carts(): HTMLElement
    {
        return this._cartCollection.html();
    }
}

export default Desk;