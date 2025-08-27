import * as Core from '../../Core';

class Place
{
    private _place;

    public constructor(place: Core.Place)
    {
        this._place = place;
    }

    public html()
    {
        let place = document.createElement('div');
        place.className = 'place';
        
        let title = document.createElement('div');
        title.className = 'place__title';
        title.innerHTML = this._place.title();

        place.appendChild(title);

        let button = document.createElement('button');
        button.className = 'place__action';
        button.innerHTML = 'action';

        button.addEventListener('click', () => alert(this._place.action()));

        place.appendChild(button);

        return place;
    }
}

export default Place;