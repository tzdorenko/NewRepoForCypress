const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://guest:welcome2qauto@qauto.forstudy.space',
        env: {
            username: 'Tetiana',
            userlastname: 'Zdorenko',
            useremail: 'tanyazdorenkoo+user@gmail.com',
            password: 'ValidPass1',
            repassword: 'ValidPass1',
        },
    },
});
