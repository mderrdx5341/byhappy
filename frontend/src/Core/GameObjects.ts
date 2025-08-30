import * as Core from '.';

class GameObjects
{
    private _time: Core.Time;
    private _player: Core.Player;
    private _cartCollection: Core.CartCollection;
    private _cartForUse: Core.CartForUse;
    private _cartRepository: Core.CartRepository;
    private _history: string; //TODO 

    public setTime(time: Core.Time )
    {
        this._time = time;
        return this;
    }

    public getTime(): Core.Time
    {
        return this._time;
    }

    public setPlayer(player: Core.Player)
    {
        this._player = player;
        return this;
    }

    public getPlayer(): Core.Player
    {
        return this._player;
    }

    public setCartCollection(cartCollection: Core.CartCollection)
    {
        this._cartCollection = cartCollection;
        return this;
    }

    public getCartCollection()
    {
        return this._cartCollection;
    }

    public setCartRepository(cartRepository: Core.CartRepository)
    {
        this._cartRepository = cartRepository;
        return this;
    }

    public getCartRepository(): Core.CartRepository
    {
        return this._cartRepository;
    }

    public setCartForUse(cartForUse: Core.CartForUse)
    {
        this._cartForUse = cartForUse;
        return this;
    }

    public getCartForUse(): Core.CartForUse
    {
        return this._cartForUse;
    }

}

export default GameObjects;