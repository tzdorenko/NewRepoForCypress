const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://guest:welcome2qauto@qauto2.forstudy.space',
        env: {
            username: 'Tetiana',
            userlastname: 'Zdorenko',
            useremail: 'tanyazdorenkoo+user222@gmail.com',
            password: 'ValidPass1',
            repassword: 'ValidPass1',
        },
    },
});
