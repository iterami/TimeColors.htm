'use strict';

function update_color(){
    // Current time in time units set by the update interval.
    var current_time = Math.floor(new Date().getTime() / interval).toString();

    var hex = '#' + current_time.substr(current_time.length - 6);

    document.body.style.background = hex;
    document.getElementById('current-color').innerHTML = hex;
}

// Update interval in milliseconds.
var interval = 100;

window.onload = function(e){
    update_color();
    window.setInterval(
      update_color,
      interval
    );
};
