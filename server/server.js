const express = require('express');
require('dotenv').config();
const dbConnect = require('./config/dbConnect');
const initRoutes = require('./routes')
const cookieParser = require('cookie-parser')

const app = express();
app.use(cookieParser())
const port = process.env.PORT || 5050;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

dbConnect();
initRoutes(app)

app.listen(port, () => {
    console.log('Server running: ' + port)
})

