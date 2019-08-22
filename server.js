const express = require('express')
const app = express()
const config = require('./config')
const port = 3000

app.get('/', (req, res) => res.send(`Hello World! ${process.env.SHOW_TEXT ? process.env.SHOW_TEXT : 'guest'}`))
app.get('/config', (req, res) => res.send(config.key))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))