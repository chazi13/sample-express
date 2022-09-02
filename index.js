const express = require('express')
const app = express()
const port = 3000 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hello', (_, res) => {
  res.send("yo! whatsapp")
})

app.get('/ci', (_, res) => {
  res.send("test ci/cd")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})