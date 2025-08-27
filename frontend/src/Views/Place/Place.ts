import * as Core from '../../Core';
import * as Views from '../.';

class Place
{
    private _place;
    private _gameObjects;

    public constructor(gameObjects: Core.GameObjects, place: Core.Place)
    {
        this._gameObjects = gameObjects;
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
        this._gameObjects.getPlayer().addMoney(1);
        this._gameObjects.getStep().addStep();
    }
}

export default Place;