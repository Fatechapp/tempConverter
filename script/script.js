document.addEventListener('DOMContentLoaded', function() {
    
    // TIME INFORMATION
    function updateCurrentTime() {
        var currentTimeElement = document.getElementById('currentTime')
        var currentTime = new Date()
        
        var hours = currentTime.getHours()
        var minutes = currentTime.getMinutes()
        var seconds = currentTime.getSeconds()
        
        hours = (hours < 10) ? "0" + hours : hours
        minutes = (minutes < 10) ? "0" + minutes : minutes
        seconds = (seconds < 10) ? "0" + seconds : seconds
        
        var formattedTime = hours + ":" + minutes + ":" + seconds
        
        currentTimeElement.innerHTML = "Current Time: " + formattedTime
    }
    
    updateCurrentTime()
    setInterval(updateCurrentTime, 1000)
    
    // APPS OR CONVERTER FUNCTION
    const celsiusInput = document.getElementById("celsiusInput")
    const fahrenheitInput = document.getElementById("fahrenheitInput")
    const kelvinInput = document.getElementById("kelvinInput")
    const rankineInput = document.getElementById("rankineInput")
    const reamurInput = document.getElementById("reamurInput")
    
    // CELSIUS LOGIC
    function celsiusToFahrenheit (celsius) {
        return (celsius * 9) / 5 + 32
    }
    function celsiusToKelvin(celsius) {
        return celsius + 273.15
    }
    function celsiusToRankine(celsius) {
        return (celsius * 9/5) + 491,67
    }
    function celsiusToReamur(celsius) {
        return celsius * 4/5
    }
    

    // FAHRENHEIT


    // KELVIN


    // RANKINE


    // REAMUR
    
    celsiusInput.addEventListener("input", () => {
        const celsius = parseFloat(celsiusInput.value)
        const fahrenheit = celsiusToFahrenheit(celsius)
        const kelvin =  celsiusToKelvin(celsius)
        const rankine = celsiusToRankine(celsius)
        const reamur = celsiusToReamur(celsius)
    
        fahrenheitInput.value = (isNaN(fahrenheit) ? "" : fahrenheit.toFixed(2));
        kelvinInput.value = isNaN(kelvin) ? "" : kelvin.toFixed(2);
        rankineInput.value = isNaN(rankine) ? "" : rankine.toFixed(2);
        reamurInput.value = isNaN(reamur) ? "" : reamur.toFixed(2);
    })
})
