import * as Core from '../../Core';
import * as Views from '../.';

class Place
{
    private _place;
    private _mediator;

    public constructor(mediator: Views.MediatorPlayer, place: Core.Place)
    {
        this._mediator = mediator;
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

        button.addEventListener('click', () => this.action());

        place.appendChild(button);

        return place;
    }

    public action()
    {
        this._mediator.action(this._place.action());
    }
}

export default Place;