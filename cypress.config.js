const { defineConfig } = require('cypress');

module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
        charts: true,
        reportPageTitle: 'Qauto tests',
        embeddedScreenshots: true,
        inlineAssets: true,
    },
    video: false,
    e2e: {
        baseUrl: 'https://guest:welcome2qauto@qauto2.forstudy.space',
        // env: {
        //     email: 'tanyazdorenkoo+test1@gmail.com',
        //     password: 'welcome2qauto',
        // },
        specPattern: 'cypress/e2e/**/*.js',
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
        },
    },
});
