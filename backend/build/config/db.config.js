"use strict";
module.exports = {
    development: {
        username: 'root',
        //password: 'Informatica2022.-',
        password: '7827',
        //password: '7827',
        database: 'test',
        host: 'localhost',
        dialect: 'mysql'
    },
    test: {
        username: 'root',
        password: null,
        database: 'database_test',
        host: '127.0.0.1',
        dialect: 'mysql'
    },
    production: {
        username: 'root',
        password: null,
        database: 'database_production',
        host: '127.0.0.1',
        dialect: 'mysql'
    }
};
