import { assert } from 'chai';
import Cart from '../Cart';
import GameObjects from '../GameObjects';

describe('Cart)', ()=> {
    it('test tests', ()=> {
        let c = new Cart(new GameObjects(), 'cart');
        assert.equal(c.title(), 'cart');
    });
});