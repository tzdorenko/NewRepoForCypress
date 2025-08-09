const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        projectId: '8xg89u',
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
