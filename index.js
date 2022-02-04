//require the important modules

const express = require('express')
const https = require('https')
const bodyParser = require('body-parser')
const ejs = require('ejs')

//create new express app
const app = express()
app.use(bodyParser.urlencoded({ extended: true}))
const port = 3000

//set up ejs templating
app.set('view engine', 'ejs')

//test rendering when the home route is accessed
app.get('/', function (req, res) {
    //check if today is a weekend or not
    let today = new Date();
    if (today.getDay() == 6 || today.getDay() == 0) {
            res.send("Cheers to the weekend!");
} else {
    res.send("Uhm I have to work.")
}
})

//render our static files for css and images
app.use(express.static("public"));


//set up port and log a message to show that port 3000 is running
app.listen(port, () => {
    console.log(`Hey Debbie, your new server is listening on port ${port}`)

})
