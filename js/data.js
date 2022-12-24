'use strict';

function update_color(){
    const current_time = Math.floor(date_to_timestamp() / core_storage_data['interval']).toString(16);
    const hex = '#' + current_time.substr(current_time.length - 6);

    document.body.style.backgroundColor = hex;

    core_ui_update({
      'ids': {
        'color': hex,
        'color-info': hex,
      },
    });
}
