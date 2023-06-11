const express = require('express')
const app = express()
const port = 4000

// app.use(bodyParser.json())

app.get('/', (req, res) => {
    //hasil data dari mysql

    res.send("hhghjgjgj")
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  