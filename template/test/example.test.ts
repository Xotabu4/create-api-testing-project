import got from 'got';
import { strict as assert } from 'assert'

// You can delete this file
describe('Example test', () => {
    it('can receive body from HTTP bin', async function () {
        const response = await got('https://httpbin.org/get');
        const body = JSON.parse(response.body);
        assert(body.url == 'https://httpbin.org/get')
    })
}) 