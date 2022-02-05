module.exports = getDate();

function getDate () {
    //figure out which day of the week, month and year it is today

    let today = new Date();
    let options = {
        // weekday: "long",
        // day: "numeric",
        month: "long",
        year: "numeric"
        
    }

    let day = today.toLocaleDateString("en-US", options);

    return day;
}