import {Cart} from './Cart';

class Player
{
    private carts: Cart[];

    constructor()
    {
        this.carts = [];
    }

    public addCart(cart: Cart)
    {
        this.carts.push(cart);
    }

    public getCarts()
    {
        return this.carts;
    }

    public getCartById(id): Cart
    {
        return this.carts[id];
    }
}

export {Player};
