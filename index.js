//require the important modules

const express = require('express')
const https = require('https')
const bodyParser = require('body-parser')

//create new express app
const app = express()
app.use(bodyParser.urlencoded({ extended: true}))
const port = 3000

//test rendering when the home route is accessed
app.get('/', function (req, res) {
    res.send("Heyyy")
})

//render our static files for css and images
app.use(express.static("public"));


//set up port and log a message to show that port 3000 is running
app.listen(port, () => {
    console.log(`Hey Debbie, your new server is listening on port ${port}`)

})
