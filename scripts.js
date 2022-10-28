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

$('input[type="button"]').on("click", function(){
    switch(localStorage.getItem('mode')){
        case 'light':
            localStorage.removeItem('mode');
            localStorage.setItem("mode", "dark");
            body.attr("mode","dark");
            break;
        case 'dark':
            localStorage.removeItem('mode');
            localStorage.setItem("mode", "light");
            body.attr("mode","light");
            break;
    }
    console.log(localStorage.getItem('mode'));
});