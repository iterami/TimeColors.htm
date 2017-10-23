'use strict';

function repo_init(){
    core_repo_init({
      'storage': {
        'interval': 100,
      },
      'storage-menu': '<table><tr><td><input id=interval><td>Interval</table>',
      'title': 'TimeColors.htm',
    });

    update_color();
    window.setInterval(
      update_color,
      core_storage_data['interval']
    );
}
