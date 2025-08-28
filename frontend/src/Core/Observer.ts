import ISubscriber from "./ISubscriber";

class Observer
{
    private _subscrubers: ISubscriber[];

    public constructor()
    {
        this._subscrubers = [];
    }

    public addSubscruber(s: ISubscriber)
    {
        this._subscrubers.push(s);
    }

    public updated()
    {
        for(let i = 0; i < this._subscrubers.length; i++) {
            this._subscrubers[i].update();
        }
    }
}

export default Observer;