import './app.scss';

import * as Core from './Core';
import * as Views from './Views';

document.addEventListener('DOMContentLoaded', () => {
    let observer = new Core.Observer(); 
    let time = new Core.TimeWithObserver(observer);
    let player = new Core.PlayerWithObserver(observer);
    let cartForUse = new Core.CartForUseWithObserver(observer);
    let gameObjects = new Core.GameObjects(time, player, cartForUse);
    let statusLine = new Views.StatusLine(time);

    observer.addSubscruber(statusLine);

    
    let workCart = new Core.Cart(gameObjects, 'Work', 'add 1 money<br>sub 8 energy<br>sub 8 hours', Core.CartType.Action);
    workCart.setAction(function() {
        this._gameObjects.getPlayer().subEnergy(8);
        this._gameObjects.getPlayer().addMoney(1);
        this._gameObjects.getTime().addHours(8);
    });

    player.addCart(workCart);

    let sleepCart = new Core.Cart(gameObjects, 'Sleep', 'add 8 energy<br>sub 8 hours', Core.CartType.Action);
    sleepCart.setAction(function() {
        this._gameObjects.getPlayer().addEnergy(16);
        this._gameObjects.getTime().addHours(8);
    });

    player.addCart(sleepCart);

    let learningCart = new Core.Cart(gameObjects, 'Learning', 'sub 2 hours<br>sub 3 energy<br>add 1 level', Core.CartType.Action);
    learningCart.setAction(function() {
        this._gameObjects.getPlayer().subEnergy(3);
        this._gameObjects.getTime().addHours(2);
        this._gameObjects.getPlayer().addLevel(1);
    });

    player.addCart(learningCart);

    let emptyCart = new Core.Cart(gameObjects);
    emptyCart.setAction(function() {
        alert('Ошибка природы');
    });

    player.addCart(emptyCart);
    player.addCart(new Core.Cart(gameObjects, 'Вах Вах', 'Аля улу', Core.CartType.Player, 
        function() {this._gameObjects.getPlayer().addMoney(4)}
    ));
    
    

    let cartForUseView = new Views.CartForUse(cartForUse);
    observer.addSubscruber(cartForUseView);

    let desk = new Views.Desk(cartForUseView.html());
    let app = document.querySelector('#app');
    for (let i: number = 0; i < player.getCarts().length; i++) {
        desk.carts().append((new Views.Cart(i, player.getCarts()[i])).html());
    }

    let playerView = new Views.Player(player);
    
    observer.addSubscruber(playerView);

    desk.actions().append(
        new Views.Place(
            gameObjects,
            new Core.Place()).html()
        );

    app.appendChild(desk.html());
    app.appendChild(playerView.html());
    app.appendChild(statusLine.html());
});