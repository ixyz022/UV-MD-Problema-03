module.exports = {
    development: {
        username: 'root',
        //password: 'Informatica2022.-',
        password: 'C79J85B5_',
        //password: '7827',
        database: 'odp',
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
}