'use strict';

function update_color(){
    if(core_menu_open){
        return;
    }

    let current_time = Math.floor(core_date_to_timestamp() / core_storage_data['interval']).toString();
    let hex = '#' + current_time.substr(current_time.length - 6);

    document.body.style.background = hex;
    document.getElementById('current-color').innerHTML = hex;
}