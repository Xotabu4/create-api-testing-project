import { JsonRequest } from 'http-req-builder'
import { strict as assert } from 'assert'

// You can delete this file
describe('Example test', () => {
    it('can receive body from HTTP bin', async function () {
        const { body } = await new JsonRequest()
            .prefixUrl('https://httpbin.org')
            .url('/get')
            .send();
        assert(body.url == 'https://httpbin.org/get')
    })
}) 