import Cart from './Cart';
import Observer from './Observer';

class Step
{
    private _observer;
    private _step: number;

    public constructor(observer: Observer)
    {
        this._observer = observer;
        this._step = 0;
    }

    public addStep()
    {
        this._step += 1;
        this.updated();
    }

    public applyCart(cart: Cart)
    {

    }

    public getStep(): number
    {
        return this._step;
    }

    public updated()
    {
        this._observer.updated();
    }
}

export default Step;