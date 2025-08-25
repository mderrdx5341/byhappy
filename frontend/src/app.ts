import './app.scss';

import * as Core from './Core';
import * as Views from './Views';

document.addEventListener('DOMContentLoaded', () => {
    let player = new Core.Player();
    player.addCart(new Core.Cart());
    player.addCart(new Core.Cart('Вах Вах', 'Аля улу'));
    let desk = new Views.Desk();
    let app = document.querySelector('#app');
    for (let i: number = 0; i < player.getCarts().length; i++) {
        desk.carts().append((new Views.Cart(player.getCarts()[i])).html());
    }

    app.appendChild(desk.html());
    //console.log(player.getCarts());
});