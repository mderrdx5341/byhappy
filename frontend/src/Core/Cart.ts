class Cart
{
    private _name: string = 'title';
    private _description: string = 'description';

    constructor(name = 'title', description = 'description')
    {
        this._name = name;
        this._description = description;
    }

    public title()
    {
        return this._name;
    }

    public description()
    {
        return this._description;
    }
}

export {Cart};