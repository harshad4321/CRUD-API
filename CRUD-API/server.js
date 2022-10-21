const express = require('express');
var colors = require('colors');
const dotenv = require('dotenv')
const app = express();


dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 8080


app.get('/', (req, res) => {
    res.send('Crud api is runnig susssfully')
})
app.listen(3001, () => {
    console.log(`Server i running PORT : http://localhost:${PORT}/`.america.bold.underline);
})