import Cart from './Cart';

class Step
{
    private _step: number;

    public constructor()
    {
        this._step = 0;
    }

    public addStep()
    {
        this._step += 1;
    }

    public applyCart(cart: Cart)
    {

    }

    public getStep(): number
    {
        return this._step;
    }
}

export default Step;