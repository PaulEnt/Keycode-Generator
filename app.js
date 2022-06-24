const input = document.getElementById('keyCode');
const gen = document.getElementById('gen');

function keyCode(event) {
    let key = event.key;
    let which = event.which;
    let code = event.code;

    document.getElementById("key").innerHTML= key;
    document.getElementById("which").innerHTML= which;
    document.getElementById("code").innerHTML= code;
}