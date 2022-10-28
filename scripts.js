localStorage.setItem('mode', 'dark');

const body = $('body');

switch(localStorage.getItem('mode')){
    case 'light':
        body.attr("mode","light");
        break;
    case 'dark':
        body.attr("mode","dark");
        break;
}