//require the important modules

const express = require('express')
const https = require('https')
const bodyParser = require('body-parser')
const ejs = require('ejs')

//create new express app
const app = express()
app.use(bodyParser.urlencoded({ extended: true}))
const port = 3000

//create an array to hold the new books we add
let books = ['Finlay Donovan is Killing it by Elle Cosimano', 'Ultralearning by Scott H. Young', 'Certain Dark Things by Silvia Moreno-Garcia'];

//set up ejs templating
app.set('view engine', 'ejs')

//test rendering when the home route is accessed
app.get('/', function (req, res) {
    //figure out which day of the week, month and year it is today

    let today = new Date();
    let options = {
        // weekday: "long",
        // day: "numeric",
        month: "long",
        year: "numeric"
        
    }

    let day = today.toLocaleDateString("en-US", options);

    

//render a variable called list found in the views file and pass the kind of day with the value of day
res.render("list", {kindOfDay: day, newBookItems: books});
})

//handle the post request to the home route
app.post('/', function(req, res) {
    let book = req.body.newBook;

    //push new book into books array
    books.push(book);

    res.redirect('/')
})

//render our static files for css and images
app.use(express.static("public"));


//set up port and log a message to show that port 3000 is running
app.listen(port, () => {
    console.log(`Hey Debbie, your new server is listening on port ${port}`)

})
