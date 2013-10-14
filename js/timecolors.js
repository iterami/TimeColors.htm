function update_color(){
    var current_time = Math.floor(new Date().getTime() / interval).toString();

    var hex = '#' + current_time.substr(current_time.length - 6);

    document.body.style.background = hex;
    document.getElementById('current-color').innerHTML = hex;
}

// update interval in milliseconds
var interval = 100;

setInterval('update_color()', interval);
