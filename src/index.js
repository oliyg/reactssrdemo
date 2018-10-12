const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('done')
})

const server = app.listen(3000)
