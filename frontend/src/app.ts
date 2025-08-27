import './app.scss';

import * as Core from './Core';
import * as Views from './Views';

document.addEventListener('DOMContentLoaded', () => {
    let observer = new Core.Observer(); 
    let step = new Core.Step(observer);
    let player = new Core.Player(observer);

    let gameObjects = new Core.GameObjects(step, player)
    let statusLine = new Views.StatusLine(step);

    observer.addSubscrubir(statusLine);

    

    player.addCart(new Core.Cart(gameObjects, 'Step', 'Use cart for action or place', Core.CartType.Action));
    player.addCart(new Core.Cart(gameObjects));
    player.addCart(new Core.Cart(gameObjects, 'Вах Вах', 'Аля улу', Core.CartType.Player));
    
    let desk = new Views.Desk();
    let app = document.querySelector('#app');
    for (let i: number = 0; i < player.getCarts().length; i++) {
        desk.carts().append((new Views.Cart(player.getCarts()[i])).html());
    }

    let playerView = new Views.Player(player);

    observer.addSubscrubir(playerView);

    desk.actions().append(
        new Views.Place(
            gameObjects,
            new Core.Place()).html()
        );

    app.appendChild(desk.html());
    app.appendChild(playerView.html());
    app.appendChild(statusLine.html());
});