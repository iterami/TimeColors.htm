'use strict';

function repo_init(){
    core_repo_init({
      'info': '<span id=color-info></span>',
      'storage': {
        'interval': 100,
      },
      'storage-menu': '<table><tr><td><input class=mini id=interval min=1 step=any type=number><td>Interval</table>',
      'title': 'TimeColors.htm',
      'ui': '<span id=color></span>',
    });

    update_color();

    core_interval_modify({
      'id': 'update',
      'interval': core_storage_data['interval'],
      'todo': update_color,
    });
}
