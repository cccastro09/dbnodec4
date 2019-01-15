module.exports = {

  development: {
    client: 'postgresql',
    //connection: 'postgress://postgres:postgres@localhost:5432/clase'
connection:'postgres://mtcnjtrrnvapeh:49ca14de08b3d0fd861c8d49621af6537e5111611eb1eaea75fe7d7703b09e6d@ec2-107-22-252-66.compute-1.amazonaws.com:5432/d290luh3kfq5lm'

},
    production: {
        client: 'postgresql',
        connection: process.env.DATABASE_URL + '?ssl=true'
  }
};

console.log('Cargando configuracion....');
