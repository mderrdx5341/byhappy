import Cart from "./Cart";
import CartType from "./CartType";

class CartForUse
{
    private _cartAction: Cart;
    private _cartsImproveLastId: number;
    private _cartsImprove: Cart[];

    public constructor()
    {
        this._cartAction = null;
        this._cartsImproveLastId = 0;
        this._cartsImprove = [];
    }

    public addCart(cart: Cart)
    {
        if(this._cartAction === null && cart.getType() === 'action') {
            this._cartAction = cart;
            return;
        }

        if (cart.getType() === 'action') {
            throw Error('Карту действий больше использовать нельзя');
        }

        if(cart.getType() === CartType.Improve && this._cartsImprove.length < this._cartAction.amountCartImprove()) {
            this._cartsImprove.push(cart);
            this._cartsImproveLastId++;
            return;
        } else {
            throw Error('Улучшать больше нельзя');
        }

        throw Error('Данный тип карт нельзя добавить');
    }

    public getCartAction()
    {
        return this._cartAction;
    }

    public delCartAction()
    {
        this._cartAction = null
        this._cartsImprove = [];
    }

    public delCartImrove(id)
    {
        this._cartsImprove.splice(id, 1);
    }

    public getCartsImprove()
    {
        return this._cartsImprove;
    }

    public use()
    {
        this._cartsImprove.forEach((c, i, cs) => {
            c.action();
        })
        this._cartAction.action();
        this._cartAction = null;
        this._cartsImprove = [];
    }
}

export default CartForUse;