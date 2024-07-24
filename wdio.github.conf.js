import { config as sharedConfig } from './wdio.conf.js'

export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        capabilities: [{
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['no-sandbox', 'headless', 'disable-gpu', 'disable-dev-shm-usage', 'remote-debugging-pipe']
            }
        }]
    }
}
