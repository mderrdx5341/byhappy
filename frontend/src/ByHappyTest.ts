import { JSDOM } from 'jsdom';
import { assert } from 'chai';
import ByHappy from "./ByHappy";

describe('ByHappy', ()=> {
    const { window } = new JSDOM(
    `<!DOCTYPE html><html><body><div id="app"></div></body></html>`,
     { url: 'http://localhost' },
    );

    
    global.document = window.document;
    
    //global.navigator = window.navigator;

    it('test tests', ()=> {
        let byHappy = new ByHappy();
        assert.equal(1, byHappy.run());
    });
});