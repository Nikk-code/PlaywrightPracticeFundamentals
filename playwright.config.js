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

        baseURL: 'https://restful-booker.herokuapp.com',

        headless: process.env.HEADED === 'true' ? false : true,

        screenshot: 'only-on-failure',

        trace: 'retain-on-failure',

        video: 'retain-on-failure'

    }

})