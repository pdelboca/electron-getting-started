import { config as sharedConfig } from './wdio.conf.js'

export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        capabilities: [{
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['headless', 'disable-gpu', 'disable-dev-shm-usage', 'no-sandbox', 'remote-debugging-pipe']
            }
        }]
    }
}
