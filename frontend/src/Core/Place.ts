class Place
{
    private _title;
    private _description;

    public constructor(title: string = 'Work', description: string = 'money 1 in one step')
    {
        this._title = title;
        this._description = description;
    }

    public title()
    {
        return this._title;
    }

    public action(): number
    {
        return 1;
    }
}

export default Place;