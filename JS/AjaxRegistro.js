"use strict";
class AjaxRegistro{
    objetoAjax(){
		var xmlhttp = false;
		try {
			xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {

			try {
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (E) {
				xmlhttp = false; }
		}

		if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
		  xmlhttp = new XMLHttpRequest();
		}
		return xmlhttp;
	}
    enviarDatos(){
        //Recogemos los valores introducimos en los campos de texto
        var nombre = document.formularioRegistro.nombre.value;
        var apellidos = document.formularioRegistro.apellidos.value;
        var usuario = document.formularioRegistro.usuario.value;
        var dni = document.formularioRegistro.dni.value;
        var pass1 = document.formularioRegistro.pass1.value;
        var pass2 = document.formularioRegistro.pass2.value;
		//instanciamos el objetoAjax
        var ajax = this.objetoAjax();
		//Abrimos una conexión AJAX pasando como parámetros el método de envío, y el archivo que realizará las operaciones deseadas
		ajax.open("POST", "PHP/Registro.php", true);
		//cuando el objeto XMLHttpRequest cambia de estado, la función se inicia
		ajax.onreadystatechange = function() {
             //Cuando se completa la petición, mostrará los resultados
			if (ajax.readyState == 4){

                if(ajax.responseText === "Rellene los campos correctamente." ){
                    document.getElementById('aux').innerHTML = "<div class='signform'><h2>Rellene los campos correctamente.</h2> <h3>Registrate</h3><div class='form'><form name='formularioRegistro' onsubmit='registroajax.enviarDatos(); return false'  class='login-form' ><input type='text' name='nombre' placeholder='Nombre'/><input type='text' name='apellidos' placeholder='Apellidos'/><input type='text' name='usuario' placeholder='Nombre de usuario'/><input type='text' name='dni' placeholder='DNI'/><input type='password' name='pass1' placeholder='Contraseña'/><input type='password' name='pass2' placeholder='Confirmar contraseña'/><input class='subbt' type='submit' value='Registrarse'/></form><button id='iniciose' onclick='nav.login()'>¿Ya tienes cuenta? Inicia sesion aqui.</button></div></div>";
                }else if(ajax.responseText === "Las contraseñas no coinciden."){
                    document.getElementById('aux').innerHTML = "<div class='signform'><h2>Las contraseñas no coinciden.</h2> <h3>Registrate</h3><div class='form'><form name='formularioRegistro' onsubmit='registroajax.enviarDatos(); return false'  class='login-form' ><input type='text' name='nombre' placeholder='Nombre'/><input type='text' name='apellidos' placeholder='Apellidos'/><input type='text' name='usuario' placeholder='Nombre de usuario'/><input type='text' name='dni' placeholder='DNI'/><input type='password' name='pass1' placeholder='Contraseña'/><input type='password' name='pass2' placeholder='Confirmar contraseña'/><input class='subbt' type='submit' value='Registrarse'/></form><button id='iniciose' onclick='nav.login()'>¿Ya tienes cuenta? Inicia sesion aqui.</button></div></div>";
                }else{
                    $("#div1").show();
					$("#aux").hide();
					$("#navbar").show();
					document.getElementById('user').innerHTML = ajax.responseText;
					$("#user").hide();
                }
			}
		}
		//Llamamos al método setRequestHeader indicando que los datos a enviarse están codificados como un formulario.
        ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		 ajax.send("&name="+ nombre + "&apellidos="+ apellidos+ "&usuario="+ usuario+ "&dni="+ dni+ "&pass1="+ pass1+ "&pass2="+ pass2); 
		 alert("&nombre="+ nombre + "&apellidos="+ apellidos+ "&usuario="+ usuario+ "&dni="+ dni+ "&pass1="+ pass1+ "&pass2="+ pass2); 
    }
}
var registroajax = new AjaxRegistro();