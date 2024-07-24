import { config as sharedConfig } from './wdio.conf.js'

export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        capabilities: [{
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['--no-sandbox', '--disable-setuid-sandbox', '--remote-debugging-port=9222', '--disable-dev-shm-using']
            }
        }]
    }
}
