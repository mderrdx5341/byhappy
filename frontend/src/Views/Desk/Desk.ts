class Desk
{
    private _html: HTMLElement;
    private _actions: HTMLElement;
    private _carts: HTMLElement;

    constructor()
    {
        this._html = document.createElement('div');
        this._html.classList.add('desc');

        this._carts = document.createElement('div');
        this._carts.classList.add('carts');
        
        this._actions = document.createElement('div');
        this._actions.classList.add('actions');

        this._html.appendChild(this._carts);
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
        return this._carts;
    }
}

export default Desk;