'use strict';

function update_color(){
    var current_time = Math.floor(time_date_to_timestamp() / interval).toString();
    var hex = '#' + current_time.substr(current_time.length - 6);

    document.body.style.background = hex;
    document.getElementById('current-color').innerHTML = hex;
}

function repo_init(){
    update_color();
    window.setInterval(
      update_color,
      interval
    );
}

var interval = 100;
