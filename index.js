// Get the timer element
const timer = document.getElementById("timer");
const text = document.getElementById("description");

// Set the date to count down
const countDownDate = new Date("Sep 17, 2020 12:00:00");

text.innerHTML = `until ${countDownDate}`;

const interval = setInterval(() => {
    
    // Get the difference between dates
    let currentDate = new Date().getTime();
    let difference = countDownDate - currentDate;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (difference < 0){
        clearInterval(interval);
        timer.innerHTML = "Complete";
    }
}, 1000);