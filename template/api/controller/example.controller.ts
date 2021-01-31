import { JsonRequest } from 'http-req-builder'

export class ExampleHttpBinController {
    async get() {
        return (await new JsonRequest()
            .prefixUrl('https://httpbin.org')
            .url('get')
            .send()).body;
    }
}