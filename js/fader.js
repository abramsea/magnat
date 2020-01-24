btn1.onclick = function fader() {
    $('#speakers-500').fadeIn();
    $('#complete-500').fadeOut();
    $('#btn1').addClass('nav-btn-active');
    $('#btn2').removeClass('nav-btn-active');
}

btn2.onclick = function fader() {
    $('#speakers-500').fadeOut();
    $('#complete-500').fadeIn();
    $('#btn1').removeClass('nav-btn-active');
    $('#btn2').addClass('nav-btn-active');
}

btn3.onclick = function fader() {
    $('#speakers-700').fadeIn();
    $('#complete-700').fadeOut();
    $('#btn3').addClass('nav-btn-active');
    $('#btn4').removeClass('nav-btn-active');
}

btn4.onclick = function fader() {
    $('#speakers-700').fadeOut();
    $('#complete-700').fadeIn();
    $('#btn3').removeClass('nav-btn-active');
    $('#btn4').addClass('nav-btn-active');
}

btn5.onclick = function fader() {
    $('#speakers-900').fadeIn();
    $('#complete-900').fadeOut();
    $('#btn5').addClass('nav-btn-active');
    $('#btn6').removeClass('nav-btn-active');
}


btn6.onclick = function fader() {
    $('#speakers-900').fadeOut();
    $('#complete-900').fadeIn();
    $('#btn5').removeClass('nav-btn-active');
    $('#btn6').addClass('nav-btn-active');
}