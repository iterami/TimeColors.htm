function update_color(){
    var current_time = Math.floor(new Date().getTime() / 100).toString();

    var hex = '#' + current_time.substr(current_time.length - 6);

    document.body.style.background = hex;
    document.getElementById('current-color').innerHTML = hex;
}

setInterval('update_color()',100);
