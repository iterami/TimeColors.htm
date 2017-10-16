'use strict';

function update_color(){
    if(core_menu_open){
        return;
    }

    var current_time = Math.floor(time_date_to_timestamp() / interval).toString();
    var hex = '#' + current_time.substr(current_time.length - 6);

    document.body.style.background = hex;
    document.getElementById('current-color').innerHTML = hex;
}

var interval = 100;
