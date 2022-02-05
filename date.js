module.exports = getDate();

function getDate () {
    //figure out which day of the week, month and year it is today

    const today = new Date();
    const options = {
        // weekday: "long",
        // day: "numeric",
        month: "long",
        year: "numeric"
        
    }

    const day = today.toLocaleDateString("en-US", options);

    return day;
}