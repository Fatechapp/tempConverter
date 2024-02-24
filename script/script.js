document.addEventListener('DOMContentLoaded', function() {
    
})
function updateCurrentTime() {
    var currentTimeElement = document.getElementById('currentTime');
    var currentTime = new Date();
    
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    
    var formattedTime = hours + ":" + minutes + ":" + seconds;
    
    currentTimeElement.innerHTML = "Current Time: " + formattedTime;
}

updateCurrentTime();

setInterval(updateCurrentTime, 1000);

