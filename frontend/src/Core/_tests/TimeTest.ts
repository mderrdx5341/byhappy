import { assert } from 'chai';
import Time from '../Time';

describe('Time)', ()=> {
    it('test tests', ()=> {
        let t = new Time();
        t.addHours(1);
        assert.equal(2 -1,1);
    });
});