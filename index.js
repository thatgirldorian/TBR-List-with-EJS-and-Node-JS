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
    day = "";

  //figure out which day of the week it is today
    switch(today.getDay()) {
        case 0:
        day = "Sunday";
        break;

        case 1:
        day = "Monday";
        break;

        case 2:
        day = "Tuesday";
        break;
        
        case 3:
        day = "Wednesday";    
        break;
        
        case 4:
        day = "Thursday";    
        break;
        
        case 5:
        day = "Friday";
        break;
        
        case 6:
        day = "Saturday";
        break;
        
        default:
        console.log("Error: Unknown day: " + day);
    }

//render a variable called list found in the views file and pass the kind of day with the value of day
res.render("list", {kindOfDay: day});
})

//render our static files for css and images
app.use(express.static("public"));


//set up port and log a message to show that port 3000 is running
app.listen(port, () => {
    console.log(`Hey Debbie, your new server is listening on port ${port}`)

})
