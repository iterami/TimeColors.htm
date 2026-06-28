'use strict';

function repo_init(){
    core_repo_init({
      'info': '<span class=timecolor></span>',
      'storage': {
        'interval': 100,
      },
      'storage_menu': '<table><tr><td><input class=mini id=interval min=1 step=any type=number><td>Interval</table>',
      'title': 'TimeColors.htm',
      'ui': '<span id=timecolor></span>',
    });

    update_color();
    core_interval_modify({
      'id': 'update',
      'interval': core_storage_data.interval,
      'todo': update_color,
    });
}

function update_color(){
    const timestamp = date_to_timestamp();
    const current_time = Math.floor(timestamp / core_storage_data.interval).toString(16);
    const hex = '#' + current_time.substring(current_time.length - 6);
    const timecolor = time_format({
      'date': timestamp_to_date(timestamp),
    }) + ' ' + hex;

    document.body.style.backgroundColor = hex;
    document.title = timecolor;
    core_ui_update({
      'classname': true,
      'ids': {
        'timecolor': timecolor,
      },
    });
}
