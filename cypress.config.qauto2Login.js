const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://guest:welcome2qauto@qauto2.forstudy.space',
        env: {
            useremail: 'tanyazdorenkoo+user222@gmail.com',
            password: 'ValidPass1',
        },
    },
});
