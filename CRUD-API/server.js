const express = require('express');
var colors = require('colors');
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require('path')

const app = express();

const connectDB = require('./Server/database/connection')

dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 8080

//log requests
app.use(morgan('tiny')); //allow as to log request when ever we make req;


// mongodb connection
connectDB();

//parser request to body-parser
app.use(bodyparser.urlencoded({ extended: true }))


//set view engine
app.set("view engine", "ejs")
// app.set("views", path.resolve(__dirname, "views/ejs"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))
//css/style.css


// load routers
app.use('/', require('./server/routes/router'))

app.listen(3001, () => {
    console.log(`Server is running PORT : http://localhost:${PORT}/`.america.bold.underline);
}) 