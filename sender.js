var whatsapp = prompt('Bienvenido a Whatsender. \nPor favor Introduce el numero de whatsapp \nAhora haz click en aceptar');
var phone_user = whatsapp
link = ("https://web.whatsapp.com/send/?phone="+phone_user+"&text=Hola+escribo+para+confirmar+su+pedido+numero+%21&app_absent=0");
webwhatsapp = ("https://web.whatsapp.com/");


function myFunction() {
window.open(link);
}

function Webwhatsapp() {
window.open(webwhatsapp);
}


