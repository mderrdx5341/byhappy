import './app.scss';

import * as Core from './Core';
import DBCarts from './CartDB/DBCarts';
import * as Views from './Views';

document.addEventListener('DOMContentLoaded', () => {
    let gameObjects = new Core.GameObjects();
    let observer = new Core.Observer();

    let time = new Core.TimeWithObserver(observer);
    let player = new Core.PlayerWithObserver(observer);
    let cartCollection = new Core.CartCollectionWithObserver(gameObjects, observer);
    let cartForUse = new Core.CartForUseWithObserver(observer);
    let cartRepository = new Core.CartRepository(gameObjects, new DBCarts(gameObjects));

    gameObjects.setTime(time)
        .setPlayer(player)
        .setCartCollection(cartCollection)
        .setCartForUse(cartForUse)
        .setCartRepository(cartRepository);
    
    let statusLine = new Views.StatusLine(time);

    observer.addSubscruber(statusLine);

    cartCollection.addCarts(cartRepository.getCarts(Core.CartType.Action, 'Work'));
    cartCollection.addCarts(cartRepository.getCarts(Core.CartType.Action, 'Sleep'));
    cartCollection.addCarts(cartRepository.getCarts(Core.CartType.Action, 'ToEat'));
    cartCollection.addCarts(cartRepository.getCarts(Core.CartType.Action, 'Learning'));

    let emptyCart = new Core.Cart(gameObjects);
    emptyCart.setAction(function() {
        alert('Ошибка природы');
    });

    cartCollection.addCart(emptyCart);
    cartCollection.addCart(new Core.Cart(gameObjects, 'add money 4', '4 money', Core.CartType.Improve, 
        function() {this._gameObjects.getPlayer().addMoney(4)}
    ));
    
    let cartCollectionView = new Views.CartCollection(cartCollection);
    observer.addSubscruber(cartCollectionView);

    let cartForUseView = new Views.CartForUse(cartForUse);
    observer.addSubscruber(cartForUseView);

    let desk = new Views.Desk(cartCollectionView, cartForUseView);
    let app = document.querySelector('#app');

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