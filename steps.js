


//  ------- NODE ------
// ** Install:
// 1. npm init -y
// 2. npm i cors dotenv express knex pg
// 3. npm i -D nodemon

// ** Initiate :
// 4. "start": "nodemon server.js"
// 5. terminal --> npm start

// ** Create a server :
// 6.
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');


dotenv.config();
const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`I'm listening on port ${port}`);
})


// ** Connect to the database :

const knex = require('knex');

const db = knex({
  client: 'mysql',
  connection: {
    host : process.env.DB_host,
    port : process.env.DB_port,
    user : process.env.DB_user,
    password : process.env.DB_password,
    database : process.env.DB_database
  }
});



//  ------- REACT ------
// npx create-react-app <name>
