var days, hours, minutes, seconds; 
var day_display, hour_display, min_display, sec_display;
day_display = document.getElementById('day_display');
hour_display = document.getElementById('hour_display');
min_display = document.getElementById('min_display');
sec_display = document.getElementById('sec_display');
var christmas_date = "Dec 25 2017";

function time_till_christmas (till_stop) {

    var time = Date.parse(till_stop) - Date.parse(new Date());
    days = Math.floor(time / (1000*60*60*24));
    hours = Math.floor((time / (1000*60*60)) % 24);
    minutes = Math.floor((time /1000/60) % 60);
    seconds = Math.floor((time /1000) % 60);
    return {
        'total': time,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

var timer = setInterval(function () {

    day_display.innerHTML = time_till_christmas(christmas_date).days;
    hour_display.innerHTML = time_till_christmas(christmas_date).hours;
    min_display.innerHTML = time_till_christmas(christmas_date).minutes;
    sec_display.innerHTML = time_till_christmas(christmas_date).seconds;

}, 1000);
