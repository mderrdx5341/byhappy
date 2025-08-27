import './app.scss';

import * as Core from './Core';
import * as Views from './Views';

document.addEventListener('DOMContentLoaded', () => {
    let player = new Core.Player();
    player.addCart(new Core.Cart());
    player.addCart(new Core.Cart('Вах Вах', 'Аля улу', Core.CartType.Player));
    let desk = new Views.Desk();
    let app = document.querySelector('#app');
    for (let i: number = 0; i < player.getCarts().length; i++) {
        desk.carts().append((new Views.Cart(player.getCarts()[i])).html());
    }

    let playerView = new Views.Player(player);
    desk.actions().append(
        new Views.Place(
            new Views.MediatorPlayer(player, playerView),
            new Core.Place()).html()
        );

    app.appendChild(desk.html());
    app.appendChild(playerView.html());
    //console.log(player.getCarts()); 
    
});