// To display time
    function updateTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var hoursIn12 = hours;
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        if (minutes < 10){
            minutes = "0" + minutes;
        }
        if (seconds < 10){
            seconds = "0" + seconds;
        }
        if (hours > 12){
            hoursIn12 -= 12;
        }
        if (hours == 0){
            hoursIn12 = 12;
        }
        var v = hoursIn12 + ":" + minutes + ":" + seconds + " ";
        if(hours > 11){
            v+="PM";
        } else {
            v+="AM"
        }
        setTimeout("updateTime()",1000);
        document.getElementById('time').innerHTML=v;
    }
    updateTime();
