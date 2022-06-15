const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const web_router = require('./routers/user.js');
const path = require('path');



dotenv.config();
const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`I'm listening on port ${port}`);
})


app.use('/savings', web_router);



if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
  })
}




// const transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     auth: {
//         user: 'demetrius.raynor6@ethereal.email',
//         pass: 'RVpejvYPYGCNf55cyg'
//     }
// });
//
//     "build": "cd client && npm install legacy-peer-deps-- && npm run bulid",
