const express = require('express')
const app = express()
const port = 3000

app.get('/trangchu', (req, res) => {
  res.send('<p style="color:red;">Hello Word !</p>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})