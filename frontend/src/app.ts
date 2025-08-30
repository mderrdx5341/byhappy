import './app.scss';

import * as Core from './Core';
import DBCarts from './Core/CartsLibrary/DBCarts';
import * as Views from './Views';

document.addEventListener('DOMContentLoaded', () => {
    let observer = new Core.Observer(); 
    let time = new Core.TimeWithObserver(observer);
    let player = new Core.PlayerWithObserver(observer);
    let cartCollection = new Core.CartCollection();
    let cartForUse = new Core.CartForUseWithObserver(observer);
    let gameObjects = new Core.GameObjects(time, player, cartCollection, cartForUse);
    let statusLine = new Views.StatusLine(time);

    observer.addSubscruber(statusLine);

    let cartRepository = new Core.CartRepository(gameObjects, new DBCarts(gameObjects));

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
    
    

    let cartForUseView = new Views.CartForUse(cartForUse);
    observer.addSubscruber(cartForUseView);

    let desk = new Views.Desk(cartForUseView.html());
    let app = document.querySelector('#app');
    for (let i: number = 0; i < cartCollection.getCarts().length; i++) {
        desk.carts().append((new Views.Cart(i, cartCollection.getCarts()[i])).html());
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