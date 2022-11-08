
function validar() {
    var valor = document.getElementById("campo").value;
    if (!validateEmail(valor)) {
        alert("Email Incorrect!");
    } else if (valor == " ") {
        alert("Fild empty!!")
    } else {
        alert("Thanks for subscribe!");

    }

}
function validateEmail(valor) {
    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    if (reg.test(valor)) {
        return true;
    }
    else {
        return false;
    }
} 
