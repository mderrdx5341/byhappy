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

    
    let workCart = new Core.Cart(gameObjects, 'Work', 'add 1 money', Core.CartType.Action);
    workCart.setAction(function() {
        this._gameObjects.getPlayer().subEnergy(8);
        this._gameObjects.getPlayer().addMoney(1);
        this._gameObjects.getStep().addStep(8);
    });

    player.addCart(workCart);

    let sleepCart = new Core.Cart(gameObjects, 'Sleep', 'add 7 energy', Core.CartType.Action);
    sleepCart.setAction(function() {
        this._gameObjects.getPlayer().addEnergy(8);
        this._gameObjects.getStep().addStep(8);
    });

    player.addCart(sleepCart);

    let learningCart = new Core.Cart(gameObjects, 'Learning', 'add', Core.CartType.Action);
    learningCart.setAction(function() {
        this._gameObjects.getPlayer().subEnergy(3);
        this._gameObjects.getStep().addStep(2);
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