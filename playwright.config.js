const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({

    testDir: './tests',

    workers: 4,

    fullyParallel: true,

    retries: 0,

    timeout: 30000,

    reporter: [

        ['html'],

        ['list']

    ],

    use: {

        headless: false,

        screenshot: 'only-on-failure',

        trace: 'retain-on-failure',

        video: 'retain-on-failure'

    }

})