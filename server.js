const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send(`Hello World! ${process.env.SHOW_TEXT ? process.env.SHOW_TEXT : 'guest'}`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))