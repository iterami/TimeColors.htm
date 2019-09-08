'use strict';

function update_color(){
    let current_time = Math.floor(date_to_timestamp() / core_storage_data['interval']).toString(16);
    let hex = '#' + current_time.substr(current_time.length - 6);

    document.body.style.background = hex;

    core_ui_update({
      'ids': {
        'color': hex,
        'color-info': hex,
      },
    });
}
