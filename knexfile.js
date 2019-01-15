module.exports = {

  development: {
    client: 'postgresql',
    //connection: 'postgress://postgres:postgres@localhost:5432/clase'
connection:'postgres://vjwvyqsyeflhjy:484461a3b5ab809eabb25673b738ca97c2102c0c26f16175b981b43e64d21066@ec2-23-21-171-25.compute-1.amazonaws.com:5432/dautgr4sagnboo'

},
    production: {
        client: 'postgresql',
        connection: process.env.DATABASE_URL + '?ssl=true'
  }
};

console.log('Cargando configuracion....');
