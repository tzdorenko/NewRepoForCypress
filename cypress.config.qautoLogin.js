const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://guest:welcome2qauto@qauto.forstudy.space',
        env: {
            useremail: 'tanyazdorenkoo+user@gmail.com',
            password: 'ValidPass1',
        },
    },
});
