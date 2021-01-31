import { strict as assert } from 'assert'
import { ExampleHttpBinController } from '../api/controller/example.controller'

// You can delete this file
describe('Example test', () => {
    it('can receive body from HTTP bin', async function () {
        const exampleHttpBin = new ExampleHttpBinController()
        const body = await exampleHttpBin.get();
        assert(body.url == 'https://httpbin.org/get')
    })
}) 