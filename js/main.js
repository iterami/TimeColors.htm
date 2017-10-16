'use strict';

function repo_init(){
    core_repo_init({
      'title': 'TimeColors.htm',
    });

    update_color();
    window.setInterval(
      update_color,
      interval
    );
}
