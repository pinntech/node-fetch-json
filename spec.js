// Mocha Specification Cases

const assert =    require('assert');
const fetchJson = require('./node-fetch-json.js');

////////////////////////////////////////////////////////////////////////////////////////////////////
describe('Module node-fetch-json', () => {

    it('loads as a function', () => {
        const actual =   typeof fetchJson;
        const expected = 'function';
        assert.equal(actual, expected);
        });

    });

////////////////////////////////////////////////////////////////////////////////////////////////////
describe('GET books about JSON from Google APIs', () => {

    it('has the correct "kind" set', (done) => {
        const url = 'https://www.googleapis.com/books/v1/volumes?q=json';
        function handleData(data) {
            const actual =   { kind: data.kind };
            const expected = { kind: 'books#volumes' };
            assert.deepEqual(actual, expected);
            done();
            }
        fetchJson(url).then(handleData).catch(console.log);
        });

    });
