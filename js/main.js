function translate(){
  var titulo = document.getElementById('form-signin-heading');
  var mail = document.getElementById('inputEmail');
  var contasenia = document.getElementById('inputPassword');
  var recordarme = document.getElementsByTagName('span')[0];
  var boton = document.getElementsByClassName('btn')[0];

  titulo.innerHTML ="Por favor inicia sesión";
  mail.placeholder="Introduce una correo";
  contasenia.placeholder="Introduce una contraseña";
  recordarme.innerHTML="Recuerdame";
  boton.innerHTML="Iniciar Sesión";
}

translate();

function mostrar(){

  var mail = document.getElementById('inputEmail').value;
  var contra = document.getElementById('inputPassword').value;

  document.getElementById("titulo").innerHTML= "Datos del formulario";
  document.getElementById("Datos").innerHTML= "El correo que ingresaste es: <br>" +mail+"<br>La contraseña que ingresaste es:<br>"+contra;

}
