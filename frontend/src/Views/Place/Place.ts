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

        let btnDetails = document.createElement('button');
        btnDetails.className = 'place__action';
        btnDetails.innerHTML = 'details';
        btnDetails.addEventListener('click', () => {
            let popup = new Views.PopUp(
                this._place.title(),
                this._place.description()
            );
            popup.show();
        });

        let btnAction = document.createElement('button');
        btnAction.className = 'place__action';
        btnAction.innerHTML = 'action';

        btnAction.addEventListener('click', () => this.action());

        place.appendChild(btnDetails);
        place.appendChild(btnAction);

        return place;
    }

    public action()
    {
        this._mediator.action(this._place.action());
    }
}

export default Place;