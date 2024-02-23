const express = require('express')
const app = express()
const port = 80
const axios = require('axios')

app.get('/', (req, res) => {
 axios.get('http://ifconfig.me').then(function (response) {
   res.send(response.data)
 })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})